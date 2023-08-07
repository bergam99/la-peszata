import React, { useState, Fragment } from 'react';
import { useCartContext } from '../../context/ShoppingCartContext';
import { IProduct } from '../../mock/mock';
import QuantityPicker from '../QuantityPicker/QuantityPicker';
import ReusableButtonTwo from '../ReusableButtonTwo/ReusableButtonTwo';
import style from './InnerDetailProduct.module.css';
import { GoInfo } from 'react-icons/go';
import { GrFormEdit } from 'react-icons/gr';
import CallModalWindow from '../CallModalWindow/CallModalWindow';

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

  return (
    <Fragment>
      <div className={style.buttonGroup}>
        <QuantityPicker quantity={quantity} add={add} remove={remove} />

        {/*  nutritional info */}
        <button className={style.button} onClick={toggleModal}>
          Infos nutritionnelles & allergènes &nbsp;
          <GoInfo />
        </button>
        {/* modal nutritional info */}
        {modalVisible && !showPersonalize && (
          <CallModalWindow
            selectedProduct={product}
            onClose={() => setModalVisible(false)}
            showProductDetail={true}
          />
        )}

        {/* personalisation */}
        <button className={`${style.button} ${style.personal}`} onClick={togglePersonalize}>
          Personnaliser &nbsp;
          <GrFormEdit />
        </button>
        {/* Modal */}
        {showPersonalize && (
          <CallModalWindow
            selectedProduct={product}
            onClose={() => setModalVisible(false)}
            showProductDetail={false}
          >
            {/* product detail card */}
            <div className={style.personalizedContent}>
              <img src={product.picture.src} alt={product.picture.alt} />
              <h3 className={style.fontBungee}>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </CallModalWindow>
        )}

        {/* add to cart */}
        <button onClick={() => addOne(product, quantity)}>
          <ReusableButtonTwo title="Ajouter au panier" />
        </button>
      </div>
    </Fragment>
  );
};

export default InnerDetailProduct;
