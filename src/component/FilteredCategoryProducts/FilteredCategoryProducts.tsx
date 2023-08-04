import React, { useState } from "react";
import { IProduct, PRODUCTS, ProductCategoryType } from "../../mock/mock";
import ReusableButtonOne from "../ReusableButtonOne/ReusableButtonOne";
import style from "./FilteredCategoryProducts.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const FilteredCategoryProducts = ({ products }: { products: IProduct[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategoryType | undefined
  >(undefined);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Fonction pour afficher tous les produits
  const showAllProducts = () => {
    setSelectedCategory(undefined);
  };

  return (
    <div>
      <div className={style.ingredientsButtonContainer}>
        <ReusableButtonOne
          title="Pizzas"
          callback={() => setSelectedCategory("pizza")}
        />
        <ReusableButtonOne
          title="Burgers"
          callback={() => setSelectedCategory("burger")}
        />
        <ReusableButtonOne
          title="Desserts"
          callback={() => setSelectedCategory("dessert")}
        />
        <ReusableButtonOne
          title="Boissons"
          callback={() => setSelectedCategory("drink")}
        />
        <ReusableButtonOne title="All" callback={showAllProducts} />
      </div>
      <div className={style.elementsContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <Link to={`/products/${product.id}`} className={style.flex}>
              <ProductCard item={product} />
           
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredCategoryProducts;
