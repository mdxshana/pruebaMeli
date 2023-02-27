import { Author } from "./Author";
import { Product } from "./Product";
export interface ProductDto {
  author: Author;
  item: Product;
  categories: string[];
}
