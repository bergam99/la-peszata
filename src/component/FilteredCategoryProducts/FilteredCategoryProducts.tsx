import React, { useState } from "react";
import { IProduct, ProductCategoryType, TagType } from "../../mock/mock";
import ReusableButtonOne from "../ReusableButtonOne/ReusableButtonOne";
import style from "./FilteredCategoryProducts.module.css";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import pizzaIcon from '/icons/pizzaIcon.png'
import burgerIcon from '/icons/burgerIcon.png'
import cupcakeIcon from '/icons/cupcakeIcon.png'
import drinkIcon from '/icons/drinkIcon.png'
import fastFoodIcon from '/icons/fastFoodIcon.png'
import veganIcon from '/icons/veganIcon.png'
import noPocrIcon from '/icons/noPocrIcon.png'
import sugarFreeIcon from '/icons/sugarFreeIcon.png'
import fatIcon from '/icons/fatIcon.png'
import sodaIcon from '/icons/sodaIcon.png'
import healthIcon from '/icons/healthIcon.png'


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
        <ReusableButtonOne
          title="Tous les produits" callback={showAllProducts} />
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

      <div className={style.wrapperMobile}>
        <div className={style.mobile}>
          <ReusableButtonOne
            title="Pizzas"
            callback={() => setSelectedCategory("pizza")}
            icon={<img className={style.pizzaIcon} src={pizzaIcon} alt="Pizza Icon" />}
          />
          <ReusableButtonOne
            title="Burgers"
            callback={() => setSelectedCategory("burger")}
            icon={<img className={style.burgerIcon} src={burgerIcon} alt="Pizza Icon" />}

          />
          <ReusableButtonOne
            title="Desserts"
            callback={() => setSelectedCategory("dessert")}
            icon={<img className={style.cupcakeIcon} src={cupcakeIcon} alt="Pizza Icon" />}
            

          />
          <ReusableButtonOne
            title="Boissons"
            callback={() => setSelectedCategory("drink")}
            icon={<img className={style.drinkIcon} src={drinkIcon} alt="Pizza Icon" />}

          />
          <ReusableButtonOne
            title="Tous les produits" callback={showAllProducts}
            icon={<img className={style.fastFoodIcon} src={fastFoodIcon} alt="Pizza Icon" />}
          />
        </div>
        <div className={style.mobile}>
          <ReusableButtonOne
            title="Vegan"
            callback={() => handleTagFilter("Vegan")}
            icon={<img className={style.veganIcon} src={veganIcon} alt="Pizza Icon" />}

          />
          <ReusableButtonOne
            title="No porc"
            callback={() => handleTagFilter("No porc")}
            icon={<img className={style.noPocrIcon} src={noPocrIcon} alt="Pizza Icon" />}

          />
          <ReusableButtonOne
            title="No sugar"
            callback={() => handleTagFilter("No sugar")}
            icon={<img className={style.sugarFreeIcon} src={sugarFreeIcon} alt="Pizza Icon" />}

          />
          <ReusableButtonOne
            title="Fat food"
            callback={() => handleTagFilter("Fat food")}
            icon={<img className={style.fatIcon} src={fatIcon} alt="Pizza Icon" />}

          />
          <ReusableButtonOne
            title="Sodas"
            callback={() => handleTagFilter("Sodas")}
            icon={<img className={style.sodaIcon} src={sodaIcon} alt="Pizza Icon" />}
          />
          <ReusableButtonOne
            title="Healthy"
            callback={() => handleTagFilter("Healthy")}
            icon={<img className={style.healthIcon} src={healthIcon} alt="Pizza Icon" />}

          />
        </div>
      </div>


      <div className={style.elementsContainer}>
        {filteredTagProducts.map((product) => (
          <div key={product.id}>
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
