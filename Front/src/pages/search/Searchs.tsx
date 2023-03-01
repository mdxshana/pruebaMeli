import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "../../components/item/Item";
import { ProductListDto } from "../../model/ProductListDto";
import { Product } from "../../model/Product";
import { BreadcrumbContext } from "../../context/BreadcrumbContext";
import { getProducts } from "../../api/products";
import { useQuery } from "@tanstack/react-query";

export const Searchs = () => {
  let [searchParams] = useSearchParams();
  const { setLocalCategories } = useContext(BreadcrumbContext);
  const [termino, settermino] = useState<string>("");
  useEffect(() => {
    settermino(searchParams.get("q") as string);
  }, [searchParams]);
  const query = useQuery<ProductListDto, Error>(
    ["search", termino],
    async () => {
      return await getProducts(termino);
    }
  );
  const getItem = (product: Product, index: number) => {
    return <Item product={product} key={product.id}></Item>;
  };
  if (query.isLoading) {
    return <div>Cargando</div>;
  }
  if (query.data?.items.length) {
    setLocalCategories(query.data.categories);
    return (
      <>
        <div className="row">
          {query.data?.items.map((pr: Product, index: number) =>
            getItem(pr, index)
          )}
        </div>
      </>
    );
  } else {
    return <div>No se encontraron resultaos</div>;
  }
};
