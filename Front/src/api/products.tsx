import { ProductListDto } from "../model/ProductListDto";
import { ProductDto } from "../model/ProductDto";
const urlBase = "http://localhost:8000/api";

export const getProducts = async (search: string) => {
  const response = await fetch(`${urlBase}/items?q=${search}`);
  return (await response.json()) as ProductListDto;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`${urlBase}/items/${id}`);
  return (await response.json()) as ProductDto;
};
