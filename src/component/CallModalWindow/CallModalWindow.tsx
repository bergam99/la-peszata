import React, { useState } from 'react';
import ModalWindow from './ModalWindow/ModalWindow';
import { IProduct } from '../../mock/mock';
import style from './CallModalWindow.module.css';
import ProductDetailCard from '../../ProductDetailCard/ProductDetailCard';

interface CallModalWindowProps {
  selectedProduct: IProduct;
  onClose: () => void;
  showProductDetail: boolean;
  children?: React.ReactNode;
}

const CallModalWindow: React.FC<CallModalWindowProps> = ({
  selectedProduct,
  onClose,
  showProductDetail,
  children, 
}) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <ModalWindow isOpen={show}>
        <p>Info produit</p>
        {children} 
        {showProductDetail && <ProductDetailCard item={selectedProduct} />}
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
