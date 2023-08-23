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
      acc[ingredient.ingredient.id] = 1; // Initialisé à 1
      return acc;
    }, {})
  );

  const handleAddIngredient = (ingredientId: number) => {
    if (ingredientQuantities[ingredientId] > 0) {
      setIngredientQuantities((prevQuantities) => ({
        ...prevQuantities,
        [ingredientId]: 0,
      }));
      removeOne(item);
    }
  };

  const handleRemoveIngredient = (ingredientId: number) => {
    setIngredientQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ingredientId]: Math.max(prevQuantities[ingredientId] - 1, 1), // Décrémenter mais maintenir au moins 1
    }));
    removeOne(item);
  };

  const handleAddExtra = (extra: IExtraIngredient) => {
    if (extra.quantity < extra.maxQuantity) {
      const updatedExtras = [...extras];
      const index = updatedExtras.findIndex((e) => e.ingredient.id === extra.ingredient.id);

      if (index !== -1) {
        updatedExtras[index] = {
          ...updatedExtras[index],
          quantity: updatedExtras[index].quantity + 1,
        };
        
      }
    }
  };

  const handleRemoveExtra = (extra: IExtraIngredient) => {
    if (extra.quantity > 0) {
      const updatedExtras = [...extras];
      const index = updatedExtras.findIndex((e) => e.ingredient.id === extra.ingredient.id);

      if (index !== -1) {
        updatedExtras[index] = {
          ...updatedExtras[index],
          quantity: updatedExtras[index].quantity - 1,
        };
  
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
                  remove={() => handleAddIngredient(ingredient.ingredient.id)} // Inversé ici
                  add={() => handleRemoveIngredient(ingredient.ingredient.id)} // Inversé ici
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
                  add={() => handleAddExtra(extra)}
                  remove={() => handleRemoveExtra(extra)}
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
