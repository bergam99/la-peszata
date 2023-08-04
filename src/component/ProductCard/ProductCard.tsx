import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IProduct } from "../../mock/mock";
import style from "./ProductCard.module.css";
import formatCurrency from "../../utilities/formatCurrency";
import ReusableButtonOne from "../ReusableButtonOne/ReusableButtonOne";

interface ProductCardProps {
  item: IProduct;
  showButton?: boolean; // Nouvelle prop pour indiquer si le bouton doit être affiché

}

const ProductCard = (props: ProductCardProps) => {
  const { item } = props;
  const { showButton } = props; // Récupérer la valeur de la prop showButton

  const { title, picture, description, price, stars } = item;
  console.log(item);

  return (
    <article>
      <img className={style.menuImg} src={picture.src} alt={picture.alt} />
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
      <p>Prix : {formatCurrency(price)}</p>
      <div className={style.stars}>
        {Array.from({ length: stars }, (_, i) => (
          <AiFillStar key={i} />
        ))}
        {Array.from({ length: 5 - stars }, (_, i) => (
          <AiOutlineStar key={i} />
        ))}
      </div>
      {showButton && ( // Afficher le bouton uniquement si showButton est vrai
        <ReusableButtonOne
          title="Voir plus"
          callback={() => console.log("L'article est cliqué")}
        />
      )}
    </article>
  );
};

export default ProductCard;
