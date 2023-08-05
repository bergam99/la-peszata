// import { useState } from "react";
// import ModalWindow from "./ModalWindow/ModalWindow";
// import { IProduct } from "../../mock/mock";
// import { productsLoader } from "../../pages/Products/Products";
// import style from "./CallModalWindow.module.css";
// import ProductCard from "../ProductCard/ProductCard";
// import { Link } from "react-router-dom";

// const CallModalWindow = () => {
//   const [show, setShow] = useState(false);
//   const [allProducts, setAllProducts] = useState<IProduct[]>([]);

//   const loadProductsOnce = () => {
//     if (allProducts.length === 0) {
//       const productsData = productsLoader();
//       setAllProducts(productsData);
//     }
//   };

//   loadProductsOnce();

//   // Sélectionnez le produit que vous souhaitez afficher dans la fenêtre modale ici
//   const selectedProduct = allProducts[0]; // Par exemple, prenons le premier produit du tableau

//   return (
//     <>
//       <button onClick={() => setShow(true)}>
//         <img className={style.widthButton} src="/icons/equalizer.png" alt="" />
//       </button>
//       <ModalWindow isOpen={show}>
//         <p>Info produit</p>
//               <ProductCard item={selectedProduct} showButton={true} />
//         <button
//           onClick={() => {
//             setShow(false);
//           }}
//         >
//           <img
//             className={style.widthButton}
//             src="/icons/close.png"
//             alt="bouton close"
//           />
//         </button>
//       </ModalWindow>
//     </>
//   );
// };

// export default CallModalWindow;

import { useState } from "react";
import ModalWindow from "./ModalWindow/ModalWindow";
import { IProduct } from "../../mock/mock";
import style from "./CallModalWindow.module.css";
import ProductCard from "../ProductCard/ProductCard";

interface CallModalWindowProps {
  selectedProduct: IProduct; // Ajoutez une prop pour recevoir les informations du produit sélectionné
  onClose: () => void; // Ajoutez une prop pour gérer la fermeture de la fenêtre modale
}

const CallModalWindow: React.FC<CallModalWindowProps> = ({ selectedProduct, onClose }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <ModalWindow isOpen={show}>
        <p>Info produit</p>
        <ProductCard item={selectedProduct} showButton={false} />
        <button onClick={() => {
          setShow(false);
          onClose();
        }}>
          <img
            className={style.widthButton}
            src="/icons/close.png"
            alt="bouton close"
          />
        </button>
      </ModalWindow>
    </>
  );
};

export default CallModalWindow;

