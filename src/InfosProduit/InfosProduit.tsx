import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IIncludedIngredients } from '../mock/mock';

interface InfosProduitProps {
  isIngredientsOpen: boolean;
  includedIngredients: IIncludedIngredients[];
  toggleIngredientsOpen: () => void;
  allergens: string[];
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
    <div>
      <div>
        <AiFillCaretDown onClick={toggleIngredientsOpen} />
        {isIngredientsOpen ? 'Fermer' : <span>Ingrédients</span>}
        {isIngredientsOpen && (
          <ul>
            {includedIngredients.map((ingredient: IIncludedIngredients) => (
              <li key={ingredient.ingredient.id}>{ingredient.ingredient.title}</li>
            ))}
          </ul>
        )}
      </div>


      <div>
        <AiFillCaretDown onClick={toggleAllergensOpen} />
        {isAllergensOpen ? 'Fermer' : <span>Allergènes</span>}
        {isAllergensOpen && (
          <ul>
            {allergens.map((allergen: string) => (
              <li key={allergen}>{allergen}</li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <AiFillCaretDown onClick={toggleNutritionOpen} />
        {isNutritionOpen ? 'Fermer' : <span>Informations nutritionnelles</span>}
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
    </div>
  );
};

export default InfosProduit;
