// test component pour custumization
import React from "react";
import {
  IExtraIngredient,
  IIncludedIngredients,
  IProduct,
} from "../../mock/mock";

interface IngredientButtonProps {
  item: IProduct;
}
const IngredientButton: React.FC<IngredientButtonProps> = (props) => {
  const { item } = props;
  const { extras } = item;
  //   const { addOne, removeOne } = useCartContext();

  return (
    <div>
      {extras.map((extra, index) => (
        <li key={index}>
          {extra.ingredient.title} (+{extra.additionalPrice}€)
          {/* <button onClick={addOne} disabled={extra.quantity >= extra.maxQuantity}></button> */}
        </li>
      ))}
    </div>
  );
};

export default IngredientButton;
