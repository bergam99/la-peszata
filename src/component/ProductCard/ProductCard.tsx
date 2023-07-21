import { Fragment } from "react";
import { IProduct } from "../../mock/mock";
import ReusableButtonOne from "../ReusableButtonOne/ReusableButtonOne";
import style from "./ProductCard.module.css";

interface ProductCardProps {
  item: IProduct;
}

const ProductCard = (props: ProductCardProps) => {
  const { item } = props;
  const { price, title, description, picture } = item;
  return (
    <Fragment>
      <article>
        <img className={style.menuImg} src={picture} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </article>
    </Fragment>
  );
};
export default ProductCard;
