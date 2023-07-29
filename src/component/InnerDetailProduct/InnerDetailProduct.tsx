import { Fragment, useState } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import { IProduct } from "../../mock/mock";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import ReusableButtonTwo from "../ReusableButtonTwo/ReusableButtonTwo";
import style from "./InnerDetailProduct.module.css";
import { GoInfo } from "react-icons/go";
import { GrFormEdit } from "react-icons/gr";

interface InnerDetailProductProps {
  product: IProduct;
}

const InnerDetailProduct = (props: InnerDetailProductProps) => {
  const { product } = props;
  // const { title, price } = product;
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
    <Fragment>
      {/* {title} : {price}€ */}
      <div className={style.buttonGroup}>
        <QuantityPicker quantity={quantity} add={add} remove={remove} />
        {/* ========= remplacer ici par composant ======= */}
        <button className={style.button}>
          Infos nutritionnelles & allergènes &nbsp; <GoInfo />
        </button>

        <button className={`${style.button} ${style.personal}`}>
          Personnaliser &nbsp;
          <GrFormEdit />
        </button>
        {/* =============================================== */}
        <button onClick={() => addOne(product, quantity)}>
          <ReusableButtonTwo title="Ajouter au panier" />
        </button>
      </div>
    </Fragment>
  );
};

export default InnerDetailProduct;
