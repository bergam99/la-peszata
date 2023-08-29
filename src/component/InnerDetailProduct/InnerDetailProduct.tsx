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

  return (
    <Fragment>
      <div className={style.buttonGroup}>
        <QuantityPicker quantity={quantity} add={add} remove={remove} />

        {/* Nutritional info */}
        <button className={style.button} onClick={toggleModal}>
          Infos nutritionnelles & allergènes &nbsp;
          <GoInfo />
        </button>
        {/* Modal nutritional info */}
        {modalVisible && !showPersonalize && (
          <CallModalWindow
            onClose={() => setModalVisible(false)}
            item={product}
          >
            {/* Contenu du modal ici (si nécessaire) */}
          </CallModalWindow>
        )}

        {/* Personalization */}
        {extras.length > 0 && (
          <button className={style.button} onClick={togglePersonalize}>
            Personnaliser &nbsp;
            <GrFormEdit />
          </button>
        )}
        {/* Modal */}
        {showPersonalize && (
          <CallModalWindowTwo
            onClose={() => setShowPersonalize(false)}
            item={product}
            showButton={true}
          >
          </CallModalWindowTwo>
        )}

        <button
          onClick={() => {
            for (let i = 0; i < quantity; i++) {
              addOne(product, 1);
            }
          }}
          className={style.margin}
        >
          <ReusableButtonTwo
            title="Ajouter au panier"
            callback={() => console.log("ajouté au panier")}
          />
        </button>
      </div>
    </Fragment>
  );
};

export default InnerDetailProduct;
