import { Fragment } from "react";
import style from "./QuantityPicker.module.css";
interface QuantityPickerProps {
  quantity: number;
  add: () => void;
  remove: () => void;
}

const QuantityPicker = (props: QuantityPickerProps) => {
  const { quantity, add, remove } = props;

  return (
    <Fragment>
      <div className={style.QuantityPicker}>
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

export default QuantityPicker;
