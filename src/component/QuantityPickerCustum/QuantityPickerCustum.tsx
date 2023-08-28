import React, { Fragment } from "react";
import style from "./QuantityPickerCustum.module.css";
interface QuantityPickerCustumProps {
  quantity: number;
  add: () => void;
  remove: () => void;
}

const QuantityPickerCustum = (props: QuantityPickerCustumProps) => {
  const { quantity, add, remove } = props;

  return (
    <Fragment>
      <div className={style.QuantityPickerCustum}>
        <br />
        <button className={style.decrease} onClick={remove}>
          -
        </button>
        <p className={style.quantity}>{quantity}</p>
        <button className={style.increase} onClick={add}>
          +
        </button>
        <br />
      </div>
    </Fragment>
  );
};

export default QuantityPickerCustum;
