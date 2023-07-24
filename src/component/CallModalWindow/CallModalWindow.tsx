// import { useState } from "react";
// import ModalWindow from "./ModalWindow/ModalWindow";
// import FilterIngredientsContent from "./FilterIngredientsContent/FilterIngredientsContent";
// import { IProduct } from "../../mock/mock";
// import { productsLoader } from "../../pages/Products/Products";




// const CallModalWindow = () => {
//     const [show, setShow] = useState(false);
//     const [allProducts, setAllProducts] = useState<IProduct[]>([]); // Étape 1: Définir l'état des produits

//     // Fonction pour charger les produits une seule fois
//     const loadProductsOnce = () => {
//         if (allProducts.length === 0) {
//             const productsData = productsLoader();
//             setAllProducts(productsData);
//         }
//     };

//     // Appeler la fonction pour charger les produits une seule fois
//     loadProductsOnce();

//     return (
//         <>
//           <button onClick={() => setShow(true)}>
//                 <img src="/icons/equalizer.png" alt="" />
//             </button>
//             <ModalWindow isOpen={show}>
//                 <div>
//                     {/* Étape 2: Passer les produits filtrés en tant que prop */}
//                     <FilterIngredientsContent products={allProducts} />
//                 </div>
//                 <button onClick={() => {
//                     setShow(false);
//                 }}>
//                     <img src="/icons/close.png" alt="bouton close" />
//                 </button>
//             </ModalWindow>



//         </>
//     )
// }
// export default CallModalWindow;