import React from 'react';
import { IProduct } from '../mock/mock';
import style from './ProductDetailCard.module.css';

interface ProductDetailCardProps {
  item: IProduct;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ item }) => {
  const { picture, title, description } = item;

  return (
    <article className={style.articleProductDetail}>  
      <img src={picture.src} alt={picture.alt} />
      <h3 className={style.fontBungee}>{title}</h3>
      <p>description : {description} </p>
    </article>
  );
};

export default ProductDetailCard;