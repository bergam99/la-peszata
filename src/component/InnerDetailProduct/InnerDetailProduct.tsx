// import { Fragment, useState } from "react";
// import { useCartContext } from "../../context/ShoppingCartContext";
// import { IProduct } from "../../mock/mock";
// import QuantityPicker from "../QuantityPicker/QuantityPicker";
// import ReusableButtonTwo from "../ReusableButtonTwo/ReusableButtonTwo";
// import style from "./InnerDetailProduct.module.css";
// import { GoInfo } from "react-icons/go";
// import { GrFormEdit } from "react-icons/gr";
// import CallModalWindow from "../CallModalWindow/CallModalWindow";

// interface InnerDetailProductProps {
//   product: IProduct;
// }

// const InnerDetailProduct = (props: InnerDetailProductProps) => {
//   const { product } = props;
//   const { addOne } = useCartContext();
//   const [quantity, setQuantity] = useState(1);

 

//   const add = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//   };

//   const remove = () => {
//     if (quantity <= 1) return;
//     const newQuantity = quantity - 1;
//     setQuantity(newQuantity);
//   };

//   return (
//     <Fragment>
//       <div className={style.buttonGroup}>
//         <QuantityPicker quantity={quantity} add={add} remove={remove} />
//         <button className={style.button}>
//           Infos nutritionnelles & allergènes &nbsp; 
//           <CallModalWindow/> {/* Affiche la fenêtre modale uniquement si modalVisible est vrai */}

//         </button>
//         <button className={`${style.button} ${style.personal}`}>
//           Personnaliser &nbsp;
//           <GrFormEdit />
//         </button>
//         <button onClick={() => addOne(product, quantity)}>
//           <ReusableButtonTwo title="Ajouter au panier" />
//         </button>
//       </div>
//     </Fragment>
//   );
// };

// export default InnerDetailProduct;

import React, { Fragment, useState } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import { IProduct } from "../../mock/mock";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import ReusableButtonTwo from "../ReusableButtonTwo/ReusableButtonTwo";
import style from "./InnerDetailProduct.module.css";
import { GoInfo } from "react-icons/go";
import { GrFormEdit } from "react-icons/gr";
import CallModalWindow from "../CallModalWindow/CallModalWindow";

interface InnerDetailProductProps {
  product: IProduct;
}

const InnerDetailProduct: React.FC<InnerDetailProductProps> = ({ product }) => {
  const { addOne } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false); // État pour gérer la visibilité de la fenêtre modale

  const add = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const remove = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Fragment>
      <div className={style.buttonGroup}>
        <QuantityPicker quantity={quantity} add={add} remove={remove} />
        <button className={style.button} onClick={toggleModal}>
          Infos nutritionnelles & allergènes &nbsp;
          <GoInfo />
        </button>
        {modalVisible && (
          <CallModalWindow
            selectedProduct={product} 
            onClose={() => setModalVisible(false)} 
          />
        )}
        <button className={`${style.button} ${style.personal}`}>
          Personnaliser &nbsp;
          <GrFormEdit />
        </button>
        <button onClick={() => addOne(product, quantity)}>
          <ReusableButtonTwo title="Ajouter au panier" />
        </button>
      </div>
    </Fragment>
  );
};

export default InnerDetailProduct;
