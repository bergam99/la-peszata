import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IProduct } from "../../mock/mock";
import style from "./ProductCard.module.css";
import formatCurrency from "../../utilities/formatCurrency";

interface ProductCardProps {
  item: IProduct;
}

const ProductCard = (props: ProductCardProps) => {
  const { item } = props;
  const { title, picture, description, price, stars } = item;
  console.log(item);

  return (
    <div>
      <article>
        <img className={style.menuImg} src={picture} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Prix : {formatCurrency(price)}</p>

        <div className={style.stars}>
          {Array.from({ length: stars }, (_, i) => (
            <AiFillStar key={i} />
          ))}
          {Array.from({ length: 5 - stars }, (_, i) => (
            <AiOutlineStar key={i} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
