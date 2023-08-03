import React, { useState } from "react";
import ReusableButtonOne from "../../ReusableButtonOne/ReusableButtonOne";
import style from "./FilterIngredientsContent.module.css";
import { IProduct, TagType } from "../../../mock/mock";

const FilterIngredientsContent = ({ products }: { products: IProduct[] }) => {
  const [currentTag, setCurrentTag] = useState<TagType | null>(null);

  const filteredProducts = products.filter(
    (product) =>
      currentTag === null || (product.tags && product.tags.includes(currentTag))
  );

  const handleTagFilter = (tag: TagType) => {
    setCurrentTag(tag);
  };

  return (
    <div>
      <div className={style.ingredientsButtonContainer}>
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
      <div className={style.elementsContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img
              className={style.img}
              src={product.picture}
              alt={`Image of ${product.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterIngredientsContent;
