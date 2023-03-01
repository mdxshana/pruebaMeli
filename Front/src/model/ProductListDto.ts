import { Author } from "./Author";
import { Price } from "./Price";
import { Product } from "./Product";

export interface ProductListDto {
  author: Author;
  items: Product[];
  categories: string[];
}
