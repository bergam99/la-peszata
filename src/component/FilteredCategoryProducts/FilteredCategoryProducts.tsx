import React, { useState } from "react";
import { IProduct, ProductCategoryType, TagType } from "../../mock/mock";
import ReusableButtonOne from "../ReusableButtonOne/ReusableButtonOne";
import style from "./FilteredCategoryProducts.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import CallModalWindow from "../CallModalWindow/CallModalWindow";

const FilteredCategoryProducts = ({ products }: { products: IProduct[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryType | undefined>(undefined);
  const [currentTag, setCurrentTag] = useState<TagType | null>(null);

  const filteredCategoryProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const filteredTagProducts = filteredCategoryProducts.filter(
    (product) =>
      currentTag === null || (product.tags && product.tags.includes(currentTag))
  );


  // Fonction pour afficher tous les produits
  const showAllProducts = () => {
    setSelectedCategory(undefined);
    setCurrentTag(null);
  };

  const handleTagFilter = (tag: TagType) => {
    setCurrentTag(tag);
    setSelectedCategory(undefined);
  };

  return (
    <div>
      <div className={style.ingredientsButtonContainer}>
        <div className={style.displayFlex}>
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
        <div className={style.displayFlex}>
          <ReusableButtonOne
            title="Vegan"
            callback={() => handleTagFilter("Vegan")}
          />
          <ReusableButtonOne
            title="No porc"
            callback={() => handleTagFilter("No porc")}
          />
          <ReusableButtonOne
            title="No sugar"
            callback={() => handleTagFilter("No sugar")}
          />
          <ReusableButtonOne
            title="Fat food"
            callback={() => handleTagFilter("Fat food")}
          />
          <ReusableButtonOne
            title="Sodas"
            callback={() => handleTagFilter("Sodas")}
          />
          <ReusableButtonOne
            title="Healthy"
            callback={() => handleTagFilter("Healthy")}
          />
        </div>
      </div>
      <div className={style.elementsContainer}>
        {filteredTagProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <Link to={`/products/${product.id}`} className={style.flex}>
              <ProductCard item={product} showButton={true} />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FilteredCategoryProducts;
