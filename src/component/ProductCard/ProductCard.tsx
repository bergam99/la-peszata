import { IProduct } from "../../mock/mock";
import style from "./ProductCard.module.css";

interface ProductCardProps {
  item: IProduct;
}

const ProductCard = (props : ProductCardProps) => {
  const {item} = props;
  const { title, picture, description, price, stars } = item;
  console.log(item);

  return (
    <div>
      <article>
        <img className={style.menuImg} src={picture} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Prix : {price} €</p>
        <img className={style.starsImg} src={stars} alt="Stars" />
      </article>
    </div>
  );
};

export default ProductCard;
