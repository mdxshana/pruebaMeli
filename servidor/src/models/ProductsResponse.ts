export interface ListProducts {
  author: Author;
  categories: string[];
  items: Product[];
}

interface Author {
  name: string;
  lastname: string;
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string | undefined;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  city_name?: string;
}

interface Price {
  amount: number;
  currency: string;
  decimals: number;
}

export interface ProductRespose {
  author: Author;
  categories: string[];
  item: Product;
}

/*
"id": String, "title": String, "price": {
"currency": String, "amount": Number, "decimals": Number
},
“picture”: String, "condition": String, "free_shipping": Boolean*/
