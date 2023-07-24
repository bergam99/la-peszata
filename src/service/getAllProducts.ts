import { IProduct, IProductsByCategory, PRODUCTS } from "../mock/mock";

export const getProducts = (): IProductsByCategory[] => {
  return PRODUCTS;
};

export const getProduct = (id: number): IProduct | undefined => {
  for (const category of PRODUCTS) {
    const product = category.products.find((product) => product.id === id);
    if (product) {
      return product;
    }
  }
  return undefined;
};
