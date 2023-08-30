import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { IAllergen, IIncludedIngredients } from '../mock/mock';
import style from './InfosProduit.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface InfosProduitProps {
  isIngredientsOpen: boolean;
  includedIngredients: IIncludedIngredients[];
  toggleIngredientsOpen: () => void;
  allergens: IAllergen[];
  isAllergensOpen: boolean;
  toggleAllergensOpen: () => void;
  nutritionValues: any;
  isNutritionOpen: boolean;
  toggleNutritionOpen: () => void;
  showProductDetail: boolean;
}

const InfosProduit: React.FC<InfosProduitProps> = ({
  isIngredientsOpen,
  includedIngredients,
  toggleIngredientsOpen,
  allergens,
  isAllergensOpen,
  toggleAllergensOpen,
  nutritionValues,
  isNutritionOpen,
  toggleNutritionOpen,
}) => {
  return (
    <div className={style.ingredientsContent}>
      <div>
        {isIngredientsOpen ? (
          <FaChevronUp onClick={toggleIngredientsOpen} />
        ) : (
          <FaChevronDown onClick={toggleIngredientsOpen} />

        )}
        <span className={style.bungee}>Ingrédients</span>
        {isIngredientsOpen && (
          <ul className={style.ingredientsDisplayFlex}>
            {includedIngredients.map((ingredient: IIncludedIngredients) => (
              <li key={ingredient.ingredient.id}> <img className={style.imgIngredients} src={ingredient.image.src} alt="" /> {ingredient.ingredient.title}</li>
            ))}
          </ul>
        )}

      </div>
      <hr />


      <div>
        {isAllergensOpen ? (
          <FaChevronUp onClick={toggleAllergensOpen} />
        ) : (
          <FaChevronDown onClick={toggleAllergensOpen} />
        )}

        <span className={style.bungee}>Allergènes</span>
        {isAllergensOpen && (
          <ul>
    {allergens.map((allergen: IAllergen) => (
              <li key={allergen.title}><img src={allergen.image.src} alt="" />{allergen.title}</li>
            ))}
          </ul>
        )}

      </div>
      <hr />

      <div>
        {isNutritionOpen ? (
          <FaChevronUp onClick={toggleNutritionOpen} />
        ) : (
          <FaChevronDown onClick={toggleNutritionOpen} />
        )}

        <span className={style.bungee}>Informations nutritionnelles</span>
        {isNutritionOpen && (
          <div className={style.textAlignCenter}>
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

    </div>

  );
};

export default InfosProduit;
