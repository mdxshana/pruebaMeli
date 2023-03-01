import { ProductListDto } from "../model/ProductListDto";
const urlBase = "http://localhost:8000/api";

export const getProducts = async (search: string) => {
  const response = await fetch(`${urlBase}/items?q=${search}`);
  return (await response.json()) as ProductListDto;
};

export const getProduct = (id: string) => {
  return fetch(`${urlBase}/items/${id}`);
};
