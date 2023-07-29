import { Fragment } from "react";

interface QuantityPickerProps {
  quantity: number;
  add: () => void;
  remove: () => void;
}

const QuantityPicker = (props: QuantityPickerProps) => {
  const { quantity, add, remove } = props;

  return (
    <Fragment>
      <br />
      <button onClick={remove}> - </button>
      <p>{quantity}</p>
      <button onClick={add}> + </button>
      <br />
    </Fragment>
  );
};

export default QuantityPicker;
