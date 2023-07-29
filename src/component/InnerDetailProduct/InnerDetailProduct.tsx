import { useState } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import { IProduct } from "../../mock/mock";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import ReusableButtonTwo from "../ReusableButtonTwo/ReusableButtonTwo";

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
        <ReusableButtonTwo title="Ajouter au panier" />
      </button>
      {/* ) : ( */}
      <QuantityPicker quantity={quantity} add={add} remove={remove} />
      {/* )} */}
    </main>
  );
};

export default InnerDetailProduct;
