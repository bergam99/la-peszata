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
import ReusableButtonTwo from "../../ReusableButtonTwo/ReusableButtonTwo";

interface CallModalWindowTwoProps {
  children: ReactNode;
  item: IProduct;
  showButton?: boolean;
  onClose: () => void;
}

const CallModalWindowTwo: React.FC<CallModalWindowTwoProps> = (props) => {
  const { item, onClose } = props;
  const { includedIngredients } = item;

  const { addOne, removeOne, addCustumOne } = useCartContext();
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

  const totalExtraPrice = extras.reduce(
    (total, extra) => total + extra.additionalPrice * extra.quantity,
    0
  );
  const totalPrice = item.price + totalExtraPrice;

  return (
    <>
      <ModalWindow isOpen={true}>
        <p className={style.textAlignCenter}> Personnalisation produit</p>
        <button onClick={onClose}>
          <img
            className={style.imageClose}
            src="/icons/close.png"
            alt="bouton close"
          />
        </button>
        <p className={style.textAlignCenter}> Personnalisation produit</p>
        {props.children}
        <div className={style.contentWrapper}>
          <ProductDetailCard item={item} />
          <div>
            <h2 className={style.fontSizeH2CallModalWindow2}>Ingrédients</h2>
            <ul>
              {includedIngredients.map((ingredient: IIncludedIngredients) => (
                <li
                  className={style.displayFlexQuantityPicker}
                  key={ingredient.ingredient.id}
                >
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

          <h2 className={style.fontSizeH2CallModalWindow2}>Suppléments</h2>
          <ul>
            {extras.map((extra, index) => (
              <li className={style.displayFlexQuantityPicker} key={index}>
                {extra.ingredient.title} (+{extra.additionalPrice}€)
                <QuantityPickerCustum
                  quantity={extra.quantity}
                  add={() => handleIncrementExtra(extra)}
                  remove={() => handleDecrementExtra(extra)}
                />
              </li>
            ))}
          </ul>
          <ReusableButtonTwo
            callback={() => addCustumOne(item, ingredientQuantities, extras)}
            title={`Ajouter au panier personnalisé : ${totalPrice}€`}
          />
        </div>
      </ModalWindow>
    </>
  );
};

export default CallModalWindowTwo;
