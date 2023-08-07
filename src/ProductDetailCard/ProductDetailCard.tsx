import React, { useState } from 'react';
import { IIncludedIngredients, IProduct } from '../mock/mock';
import { AiFillCaretDown } from 'react-icons/ai';
import style from "./ProductDetailCard.module.css"

interface ProductDetailCardProps {
  item: IProduct;
  showButton?: boolean;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = (props) => {
  const { item } = props;
  const { title, picture, description, includedIngredients, allergens, nutritionValues } = item;

  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isAllergensOpen, setIsAllergensOpen] = useState(false);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);

  const toggleIngredientsOpen = () => {
    setIsIngredientsOpen(!isIngredientsOpen);
  };

  const toggleAllergensOpen = () => {
    setIsAllergensOpen(!isAllergensOpen);
  };

  const toggleNutritionOpen = () => {
    setIsNutritionOpen(!isNutritionOpen);
  };

  return (
    <article>
      <img src={picture.src} alt={picture.alt} />
      <h3 className={style.fontBungee}> {title}</h3>
      <p>description : {description}</p>

      <div>
      <AiFillCaretDown onClick={toggleIngredientsOpen} />
          {isIngredientsOpen ? 'Fermer' : <span className={style.fontBungee}>  Ingrédients  </span> } 
        {isIngredientsOpen && (
          <ul>
            {includedIngredients.map((ingredient: IIncludedIngredients) => (
              <li key={ingredient.ingredient.id}> {ingredient.ingredient.title}</li>
            ))}
          </ul>
        )}
      </div>

      <div>
      <AiFillCaretDown onClick={toggleAllergensOpen} />
          {isAllergensOpen ? 'Fermer' : <span className={style.fontBungee}> Allergènes </span>}
    
        {isAllergensOpen && (
          <ul>
            {allergens.map((allergen: string) => (
              <li key={allergen}> {allergen}</li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <AiFillCaretDown onClick={toggleNutritionOpen} />
          {isNutritionOpen ? 'Fermer' : <span className={style.fontBungee}>Informations nutritionnelles </span>}
        
        {isNutritionOpen && (
          <div>
            <h4>Valeurs nutritionnelles</h4>
            <p>Energie: {nutritionValues.energy}</p>
            <p>Matières grasses : {nutritionValues.fat}</p>
            <p>Acides gras saturés: {nutritionValues.saturatedFat}</p>
            <p>Glucides: {nutritionValues.carbohydrates}</p>
            <p>Sel: {nutritionValues.salt}</p>
            <p>Protéines: {nutritionValues.proteins}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductDetailCard;
