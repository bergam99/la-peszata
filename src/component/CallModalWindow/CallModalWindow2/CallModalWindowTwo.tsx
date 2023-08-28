/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ReactNode, useState } from "react";
import {
  IExtraIngredient,
  IIncludedIngredients,
  IProduct,
} from "../../../mock/mock";
import ProductDetailCard from "../../../ProductDetailCard/ProductDetailCard";
import { useCartContext } from "../../../context/ShoppingCartContext";
import ModalWindow from "../ModalWindow/ModalWindow";
import style from "./CallModalWindowTwo.module.css";
import QuantityPickerCustum from "../../QuantityPickerCustum/QuantityPickerCustum";

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
  const [ingredientQuantities, setIngredientQuantities] = useState<{
    [id: number]: number;
  }>(
    includedIngredients.reduce<{ [id: number]: number }>((acc, ingredient) => {
      acc[ingredient.ingredient.id] = 1; // Initialisé à 1
      return acc;
    }, {})
  );
  const [extras, setExtras] = useState(item.extras);

  // bases ingredients
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

  // Extra
  // Fonction pour incrémenter la quantité de l'ingrédient
  const incrementIngredientQuantity = (
    ingredient: IExtraIngredient
  ): IExtraIngredient => {
    if (ingredient.quantity < ingredient.maxQuantity) {
      return {
        ...ingredient,
        quantity: ingredient.quantity + 1,
      };
    }
    return ingredient;
  };

  const handleIncrementExtra = (ingredient: IExtraIngredient) => {
    const updatedExtras = extras.map((extra) =>
      extra.ingredient.id === ingredient.ingredient.id
        ? incrementIngredientQuantity(extra)
        : extra
    );
    setExtras(updatedExtras);
  };

  // Fonction pour décrémenter la quantité de l'ingrédient
  const decrementIngredientQuantity = (
    ingredient: IExtraIngredient
  ): IExtraIngredient => {
    if (ingredient.quantity > 0) {
      return {
        ...ingredient,
        quantity: ingredient.quantity - 1,
      };
    }
    return ingredient;
  };
  const handleDecrementExtra = (ingredient: IExtraIngredient) => {
    const updatedExtras = extras.map((extra) =>
      extra.ingredient.id === ingredient.ingredient.id
        ? decrementIngredientQuantity(extra)
        : extra
    );
    setExtras(updatedExtras);
  };

  return (
    <>
      <ModalWindow isOpen={true}>
        <button onClick={onClose}>
          <img
            className={style.imageClose}
            src="/icons/close.png"
            alt="bouton close"
          />
        </button>
        <h1 className={style.textAlignCenter}> Personnalisation produit</h1>
        {props.children}
        <div className={style.contentWrapper}>
          <ProductDetailCard item={item} />
          <div>
            <h2> Ingrédients</h2>
            <ul>
              {includedIngredients.map((ingredient: IIncludedIngredients) => (
                <li key={ingredient.ingredient.id}>
                  {ingredient.ingredient.title}
                  <QuantityPickerCustum
                    quantity={ingredientQuantities[ingredient.ingredient.id]}
                    remove={() => handleAddIngredient(ingredient.ingredient.id)} 
                    add={() => handleRemoveIngredient(ingredient.ingredient.id)} 
                  />
                </li>
              ))}
            </ul>
          </div>

          <h2>Suppléments</h2>
          <ul>
            {extras.map((extra, index) => (
              <li key={index}>
                {extra.ingredient.title} (+{extra.additionalPrice}€)
                <QuantityPickerCustum
                  quantity={extra.quantity}
                  add={() => handleIncrementExtra(extra)}
                  remove={() => handleDecrementExtra(extra)}
                />
                {extra.maxQuantity}&{extra.quantity}
              </li>
            ))}
          </ul>
        </div>
      </ModalWindow>
    </>
  );
};

export default CallModalWindowTwo;
