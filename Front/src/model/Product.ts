import { Price } from "./Price";

export interface Product {
  condition: string;
  free_shipping: boolean;
  picture: string;
  id: string;
  title: string;
  price: Price;
  city_name?: string;
  description?: string;
  sold_quantity?: number;
}
