import React, { useContext } from "react";
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
  const query = useQuery<ProductListDto, Error>(
    ["search", searchParams.get("q")],
    async () => {
      return await getProducts(searchParams.get("q") as string);
    },
    { staleTime: 1000 * 60 }
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
      <div className="row">
        {query.data?.items.map((pr: Product, index: number) =>
          getItem(pr, index)
        )}
      </div>
    );
  } else {
    return <div>No se encontraron resultaos</div>;
  }
};
