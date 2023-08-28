/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from "react";
import style from "./MainProduct.module.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard"; // Make sure to import the ProductCard component
import { IProduct, ProductCategoryType, TagType } from "../../mock/mock";

export const MainProduct = ({ products }: { products: IProduct[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategoryType | undefined
  >(undefined);
  const [currentTag, setCurrentTag] = useState<TagType | null>(null);

  const filteredCategoryProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const filteredTagProducts = filteredCategoryProducts.filter(
    (product) =>
      currentTag === null || (product.tags && product.tags.includes(currentTag))
  );

  const tripleCheeseBacon = filteredTagProducts.find(
    (product) => product.title === "Triple cheese bacon"
  );

  return (
    <div className={style.wrapper}>
      <div>
        <Header />
        <img className={style.image} src="imgs/burger.jpg" alt="" />
        <h3 className={style["image-caption-h3"]}>
          Triple <br></br> cheese <br></br> bacon
        </h3>
        <p className={style["image-caption-paragraphe"]}>Only $7.99</p>
        <button className={style["image-caption-button"]}>
          <Link
            to={`/products/${tripleCheeseBacon?.id}`}
            className={style.flex}
          >
            <h3 className={style.mainProductH3}>Voir plus</h3>
          </Link>
        </button>
      </div>
    </div>
  );
};
