import React, { ReactNode, useState } from 'react';
import ModalWindow from './ModalWindow/ModalWindow';
import { IIncludedIngredients, IProduct } from '../../mock/mock';
import style from './CallModalWindow.module.css';
import ProductDetailCard from '../../ProductDetailCard/ProductDetailCard';
import QuantityPicker from '../QuantityPicker/QuantityPicker';
import { useCartContext } from '../../context/ShoppingCartContext';

interface CallModalWindowTwoProps {
  children: ReactNode;
  item: IProduct;
  showButton?: boolean;
  onClose: () => void;
}

const CallModalWindowTwo: React.FC<CallModalWindowTwoProps> = (props) => {
  const { item, onClose } = props;
  const { includedIngredients } = item;

  const { addOne, removeOne } = useCartContext();
  const [ingredientQuantities, setIngredientQuantities] = useState<{ [id: number]: number }>(
    includedIngredients.reduce<{ [id: number]: number }>((acc, ingredient) => {
      acc[ingredient.ingredient.id] = 0;
      return acc;
    }, {})
  );

  const handleAdd = (ingredientId: number) => {
    setIngredientQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ingredientId]: prevQuantities[ingredientId] + 1,
    }));
    addOne(item, 1);
  };
  const handleRemove = (ingredientId: number) => {
    setIngredientQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ingredientId]: Math.max(prevQuantities[ingredientId] - 1, 0),
    }));
    removeOne(item); 
  };


  return (
    <>
      <ModalWindow isOpen={true}>
        {props.children}
        <ProductDetailCard item={item} />
        <button onClick={onClose}>
          <img className={style.widthButton} src="/icons/close.png" alt="bouton close" />
        </button>
        <div>
          <h2> Ingrédients</h2>
          <ul>
            {includedIngredients.map((ingredient: IIncludedIngredients) => (
              <li key={ingredient.ingredient.id}>
                {ingredient.ingredient.title}
                <QuantityPicker
                  quantity={ingredientQuantities[ingredient.ingredient.id]}
                  add={() => handleAdd(ingredient.ingredient.id)}
                  remove={() => handleRemove(ingredient.ingredient.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </ModalWindow>
    </>
  );
};

export default CallModalWindowTwo;
