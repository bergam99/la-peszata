import React, { Fragment } from "react";
import style from "./QuantityPickerCustum.module.css";
interface QuantityPickerCustumProps {
  quantity: number;
  add: () => void;
  remove: () => void;
  css?: "increment" | "decrement"
}

const QuantityPickerCustum = (props: QuantityPickerCustumProps) => {
  const { quantity, add, remove, css } = props;

  return (
    <Fragment>
      <div className={style.QuantityPickerCustum}>
        <button className={`${style.decrease} 
        ${css === "decrement" ? style.secondaryButton : ""}`}
          onClick={remove}> - </button>

        <p className={style.quantity}>{quantity}</p>

        <button
          className={`${style.increase} ${css === "increment" ? style.secondaryButton : ""}`}
          onClick={add}> +
        </button>
      </div>

      {/* condition pour appliquer du css dans le composant souhaité en condition ternaire : soit on appelle secondary dans le composant et le style s'applique , sinon on le laisse à vide  */}

    </Fragment>
  );
};

export default QuantityPickerCustum;
