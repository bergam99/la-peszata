/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Fragment, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../../service/getAllProducts";
import style from "./Products.module.css";
import ProductCard from "../../component/ProductCard/ProductCard";
import ReusableButtonOne from "../../component/ReusableButtonOne/ReusableButtonOne";
import FilteredCategoryProducts from "../../component/FilteredCategoryProducts/FilteredCategoryProducts";
import { IProduct, IProductsByCategory } from "../../mock/mock";
import FilterIngredientsContent from "../../component/CallModalWindow/FilterIngredientsContent/FilterIngredientsContent";
import SubProducts from "../../component/SubProducts/SubProducts";
import Header from "../../component/Header/Header";

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
      <SubProducts item={filteredProducts[0]} />
      <section className={style.main}>
        <h2> Choose & enjoy </h2>

        <FilterIngredientsContent products={filteredProducts} />

        <h2> Our Products </h2>
        <FilteredCategoryProducts products={filteredProducts} />

        <div className={style.container}>
          <h2 className={style.h2}> All Products </h2>
          <ul className={style.ul}>
            {filteredProducts.map((product: IProduct) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`} className={style.flex}>
                  <ProductCard item={product} />
                  <ReusableButtonOne
                    title="Voir plus"
                    callback={() => console.log("L'article est cliqué")}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Products;
