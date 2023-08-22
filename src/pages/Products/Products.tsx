/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Fragment, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../../service/getAllProducts";
import style from "./Products.module.css";
import FilteredCategoryProducts from "../../component/FilteredCategoryProducts/FilteredCategoryProducts";
import { IProduct, IProductsByCategory } from "../../mock/mock";
import SubProducts from "../../component/SubProducts/SubProducts";
import Header from "../../component/Header/Header";
import ModalWindow from "../../component/CallModalWindow/ModalWindow/ModalWindow";
import CallModalWindow from "../../component/CallModalWindow/CallModalWindow";

export const productsLoader = (): IProduct[] => {
  const productsByCategory: IProductsByCategory[] = getProducts();
  const products: IProduct[] = productsByCategory.flatMap(
    (category) => category.products
  );
  return products;
};

const Products = () => {
  const allProducts = useLoaderData() as IProduct[];
  const [currentCategory] = useState<string | null>(null);

  const filteredProducts = currentCategory
    ? allProducts.filter((product) => product.category === currentCategory)
    : allProducts;

  return (
    <Fragment>
      <Header />
      <SubProducts />
      <section className={style.main}>
        <h2> Our Products </h2>
        <FilteredCategoryProducts products={filteredProducts} />
      </section>
    </Fragment>
  );
};

export default Products;
