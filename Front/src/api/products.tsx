const urlBase = "http://localhost:8000/api";

export const getProducts = async (search: string) => {
  return fetch(`${urlBase}/items?q=${search}`);
};

export const getProduct = (id: string) => {
  return fetch(`${urlBase}/items/${id}`);
};
