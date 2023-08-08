import React, { ReactNode, useState } from 'react';
import ModalWindow from './ModalWindow/ModalWindow';
import { IIncludedIngredients, IProduct } from '../../mock/mock';
import style from './CallModalWindow.module.css';
import ProductDetailCard from '../../ProductDetailCard/ProductDetailCard';
import InfosProduit from '../../InfosProduit/InfosProduit';
import { AiFillCaretDown } from 'react-icons/ai';

interface CallModalWindowTwoProps {
  children: ReactNode;
  item: IProduct;
  showButton?: boolean;
  onClose: () => void; // Ajoutez la déclaration de onClose
}

const CallModalWindowTwo: React.FC<CallModalWindowTwoProps> = (props) => {
  const { item, onClose } = props; // Ajoutez selectedProduct et onClose ici
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
    <>
      <ModalWindow isOpen={true}>
        {props.children}
        <ProductDetailCard item={item} />
        <button onClick={onClose}>
          <img
            className={style.widthButton}
            src="/icons/close.png"
            alt="bouton close"
          />
        </button>
        <div>
     <h2> Ingrédients</h2>
          <ul>
            {includedIngredients.map((ingredient: IIncludedIngredients) => (
              <li key={ingredient.ingredient.id}>{ingredient.ingredient.title}</li>
            ))}
          </ul>
    
      </div>
      </ModalWindow>
    </>
  );
};

export default CallModalWindowTwo;
