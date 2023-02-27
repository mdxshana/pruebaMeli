import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "../../components/item/Item";
import { ProductListDto } from "../../model/ProductListDto";
import { Product } from "../../model/Product";
import { BreadcrumbContext } from "../../context/BreadcrumbContext";
import { getProducts } from "../../api/products";

export const Searchs = () => {
  let [searchParams] = useSearchParams();
  const { setLocalCategories } = useContext(BreadcrumbContext);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const query = searchParams.get("q");
    setLoading(true);
    getProducts(query as string)
      .then((resp) => resp.json())
      .then((resp: ProductListDto) => {
        setProducts(resp.items);
        setLocalCategories(resp.categories);
        setLoading(false);
      });
  }, [searchParams]);

  const getItem = (product: Product, index: number) => {
    return <Item product={product} key={product.id}></Item>;
  };

  if (loading) {
    return <div>Cargando</div>;
  }

  if (products.length) {
    return (
      <>
        <div className="row">
          {products.map((pr: Product, index: number) => getItem(pr, index))}
        </div>
      </>
    );
  } else {
    return <div>No se encontraron resultaos</div>;
  }
};
