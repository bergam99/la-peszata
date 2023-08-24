import React, { ReactNode, useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import { IProduct } from '../../../mock/mock';
import ProductDetailCard from '../../../ProductDetailCard/ProductDetailCard';
import InfosProduit from '../../../InfosProduit/InfosProduit';
import style from './CallModalWindow.module.css'

interface CallModalWindowProps {
  children: ReactNode;
  item: IProduct;
  showButton?: boolean;
  onClose: () => void; // Ajoutez la déclaration de onClose
}

const CallModalWindow: React.FC<CallModalWindowProps> = (props) => {
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
        <button onClick={onClose}>
          <img className={style.imageClose}
            src="/icons/close.png"
            alt="bouton close"
          />
        </button>
        <h1 className={style.textAlignCenter}> Informations produit</h1>

        <div className={style.contentWrapper}>
          <ProductDetailCard item={item} />
          <InfosProduit
            isIngredientsOpen={isIngredientsOpen}
            includedIngredients={includedIngredients}
            toggleIngredientsOpen={toggleIngredientsOpen}
            allergens={allergens}
            isAllergensOpen={isAllergensOpen}
            toggleAllergensOpen={toggleAllergensOpen}
            nutritionValues={nutritionValues}
            isNutritionOpen={isNutritionOpen}
            toggleNutritionOpen={toggleNutritionOpen}
            showProductDetail={true}
          />
        </div>
      </ModalWindow>
    </>
  );
};

export default CallModalWindow;
