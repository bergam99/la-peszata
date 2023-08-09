import React, { ReactNode, useState } from 'react';
import ModalWindow from './ModalWindow/ModalWindow';
import { IIncludedIngredients, IProduct, IExtraIngredient } from '../../mock/mock';
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
  const { includedIngredients, extras } = item;

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

  const handleExtraAdd = (extra: IExtraIngredient) => {
    if (extra.quantity < extra.maxQuantity) {
      const updatedExtras = [...extras];
      const index = updatedExtras.findIndex((e) => e.ingredient.id === extra.ingredient.id);
      
      if (index !== -1) {
        updatedExtras[index] = {
          ...updatedExtras[index],
          quantity: updatedExtras[index].quantity + 1,
        };

        // Mettre à jour l'état des suppléments en utilisant la fonction de mise à jour du contexte
        (updatedExtras);
      }
    }
  };

  const handleExtraRemove = (extra: IExtraIngredient) => {
    if (extra.quantity > 0) {
      const updatedExtras = [...extras];
      const index = updatedExtras.findIndex((e) => e.ingredient.id === extra.ingredient.id);
      
      if (index !== -1) {
        updatedExtras[index] = {
          ...updatedExtras[index],
          quantity: updatedExtras[index].quantity - 1,
        };

        // Mettre à jour l'état des suppléments en utilisant la fonction de mise à jour du contexte
        (updatedExtras);
      }
    }
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
          <h2>Suppléments</h2>
          <ul>
            {extras.map((extra, index) => (
              <li key={index}>
                {extra.ingredient.title} (+{extra.additionalPrice}€)
                <QuantityPicker
                  quantity={extra.quantity}
                  add={() => handleExtraAdd(extra)}
                  remove={() => handleExtraRemove(extra)}
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
