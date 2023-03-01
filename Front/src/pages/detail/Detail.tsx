import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDto } from "../../model/ProductDto";
import "./detail.scss";
import { formatNumber } from "../../helper/utils";
import { BreadcrumbContext } from "../../context/BreadcrumbContext";
import { getProduct } from "../../api/products";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../model/Product";

export const Detail = () => {
  const { id } = useParams();
  const { setLocalCategories } = useContext(BreadcrumbContext);

  const query = useQuery<ProductDto, Error>(
    ["search", id],
    async () => {
      return await getProduct(id as string);
    },
    { staleTime: 1000 * 60 }
  );

  if (query.isLoading) {
    return <div>Cargando</div>;
  } else {
    const product: Product = query.data?.item!;
    setLocalCategories(query.data?.categories!);
    return (
      <div className="row detail content">
        <div className="col-lg-9 col-md-8">
          <div className="picture">
            <img src={product?.picture} alt="imagen producto" />
          </div>
          <div className="detail">
            <h3>Descripción del producto</h3>
            <p className="description">{product?.description}</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="row">
            <div className="col-12 rigthPanel">
              <span className="condition">
                {product?.condition} - {product?.sold_quantity} vendidos
              </span>
              <h1 className="mt-2">{product?.title}</h1>
              <p className="price my-5">
                $ {formatNumber(product!.price.decimals)}{" "}
                <sup className="sup">00</sup>
              </p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
