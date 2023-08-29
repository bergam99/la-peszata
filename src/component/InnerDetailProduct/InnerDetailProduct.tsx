/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// InnerDetailProduct.tsx
import React, { useState, Fragment } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import { IProduct } from "../../mock/mock";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import ReusableButtonTwo from "../ReusableButtonTwo/ReusableButtonTwo";
import style from "./InnerDetailProduct.module.css";
import { GoInfo } from "react-icons/go";
import { GrFormEdit } from "react-icons/gr";
import CallModalWindow from "../CallModalWindow/CallModalWindow1/CallModalWindow";
import CallModalWindowTwo from "../CallModalWindow/CallModalWindow2/CallModalWindowTwo";

interface InnerDetailProductProps {
  product: IProduct;
}

const InnerDetailProduct: React.FC<InnerDetailProductProps> = ({ product }) => {
  const { addOne } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPersonalize, setShowPersonalize] = useState(false);

  const add = () => setQuantity(quantity + 1);
  const remove = () => (quantity > 1 ? setQuantity(quantity - 1) : null);
  const toggleModal = () => setModalVisible(!modalVisible);
  const togglePersonalize = () => setShowPersonalize(!showPersonalize);
  const { extras } = product;

  const handleAddToCart = () => {
    addOne(product, quantity);
  };

  return (
    <Fragment>
      <div className={style.buttonGroup}>
        <QuantityPicker quantity={quantity} add={add} remove={remove} />

        <button className={style.button} onClick={toggleModal}>
          Infos nutritionnelles & allergènes &nbsp;
          <GoInfo />
        </button>
        {modalVisible && !showPersonalize && (
          <CallModalWindow
            onClose={() => setModalVisible(false)}
            item={product}
          >
          </CallModalWindow>
        )}

        {extras.length > 0 && (
          <button className={style.button} onClick={togglePersonalize}>
            Personnaliser &nbsp;
            <GrFormEdit />
          </button>
        )}
        {showPersonalize && (
          <CallModalWindowTwo
            onClose={() => setShowPersonalize(false)}
            item={product}
            showButton={true}
          >
          </CallModalWindowTwo>
        )}

        <ReusableButtonTwo
          title="Ajouter au panier"
          callback={handleAddToCart}
        />
      </div>
    </Fragment>
  );
};

export default InnerDetailProduct;
