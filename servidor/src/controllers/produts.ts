import { Request, Response } from "express";

import axios, { AxiosResponse } from "axios";
import dotenv from "dotenv";
import { ProductsMeli, ProductMeli } from "../models/ProductMeli";
import {
  ListProducts,
  Product,
  ProductRespose,
} from "../models/ProductsResponse";
dotenv.config();

const urlbase = process.env.MELIURL;

const getProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query.q;
    let result: AxiosResponse = await axios.get(`${urlbase}/sites/MLA/search`, {
      params: {
        q: query,
      },
    });
    const productsMeli: ProductsMeli = result.data;
    let fourItem: ProductMeli[];
    if (productsMeli.results.length > 4) {
      fourItem = productsMeli.results.slice(0, 4);
    } else {
      fourItem = productsMeli.results;
    }
    let categories: string[] =
      productsMeli.filters
        .find((filter) => filter.id == "category")
        ?.values[0].path_from_root.map((path) => path.name) ?? [];

    const products: Product[] = fourItem.map((item) => ({
      condition: item.attributes.find((attr) => attr.id == "ITEM_CONDITION")!
        .value_name,
      free_shipping: item.shipping.free_shipping,
      picture: item.thumbnail,
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.available_quantity,
        decimals: item.price,
      },
      city_name: item.address.city_name,
    }));
    const respose: ListProducts = {
      author: {
        name: "Deiby",
        lastname: "Tovar",
      },
      items: products,
      categories,
    };
    res.status(200).json(respose);
  } catch (err) {
    const respose: ListProducts = {
      author: {
        name: "Deiby",
        lastname: "Tovar",
      },
      items: [],
      categories: [],
    };
    res.status(200).json(respose);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const productPromise = axios.get(`${urlbase}/items/${id}`);
    const productDescripctionPromise = axios.get(
      `${urlbase}/items/${id}/description`
    );
    let response = await Promise.all([
      productPromise,
      productDescripctionPromise,
    ]);
    const productMeli: ProductMeli = response[0].data;
    const product: Product = {
      condition: productMeli.attributes.find(
        (attr) => attr.id == "ITEM_CONDITION"
      )!.value_name,
      id: productMeli.id,
      free_shipping: productMeli.shipping.free_shipping,
      picture: productMeli.pictures?.length ? productMeli.pictures[0].url : "",
      title: productMeli.title,
      description: response[1].data.plain_text,
      sold_quantity: productMeli.sold_quantity,
      price: {
        currency: productMeli.currency_id,
        decimals: productMeli.price,
        amount: productMeli.available_quantity,
      },
    };

    let result = await axios.get(
      `${urlbase}/categories/${productMeli.category_id}`
    );

    const categories: string[] = result.data.path_from_root.map(
      (path: any) => path.name
    );

    const responseProduct: ProductRespose = {
      author: {
        name: "Deiby",
        lastname: "Tovar",
      },
      item: product,
      categories,
    };

    res.status(200).json(responseProduct);
  } catch (err: any) {
    res.status(err.response.status).json(err.response.data.message);
  }
};

export default {
  getProducts,
  getProduct,
};
