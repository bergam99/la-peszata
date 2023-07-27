import { useState } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import { IProduct } from "../../mock/mock";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import ReusableButtonOne from "../ReusableButtonOne/ReusableButtonOne";

interface InnerDetailProductProps {
  product: IProduct;
}

const InnerDetailProduct = (props: InnerDetailProductProps) => {
  const { product } = props;
  const { title, price } = product;
  const { addOne } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const add = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const remove = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  return (
    <main>
      {title} : {price}€ {/* {quantity === 1 ? ( */}
      <button onClick={() => addOne(product, quantity)}>
        <ReusableButtonOne title="Ajouter au panier"></ReusableButtonOne>
      </button>
      {/* ) : ( */}
      <QuantityPicker quantity={quantity} add={add} remove={remove} />
      {/* )} */}
    </main>
  );
};

export default InnerDetailProduct;
