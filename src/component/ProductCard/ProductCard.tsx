import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IProduct } from "../../mock/mock";
import style from "./ProductCard.module.css";
import formatCurrency from "../../utilities/formatCurrency";
import { Link } from "react-router-dom";

interface ProductCardProps {
  item: IProduct;
  showButton?: boolean; // Nouvelle prop pour indiquer si le bouton doit être affiché
}

const ProductCard = (props: ProductCardProps) => {
  const { item } = props;
  const { showButton } = props; // Récupérer la valeur de la prop showButton

  const { title, picture,  price, stars } = item;

  return (
    <article className={style.articleProductCard}>
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
      {showButton && (
        <Link to={`/products/${item.id}`}>
          {" "}
          {/* Lien vers la page de détail du produit */}
          <button className={style.viewButton}>Voir plus</button>
        </Link>
      )}
    </article>
  );
};

export default ProductCard;
