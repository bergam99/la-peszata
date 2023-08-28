import { IProduct } from "../../mock/mock";
import style from "./SingleProductImg.module.css"

interface SingleProductImgProps {
    item: IProduct;
    showButton?: boolean; // Nouvelle prop pour indiquer si le bouton doit être affiché
}

const SingleProductImg = (props: SingleProductImgProps) => {
    const { item } = props;
    const { picture } = item;

    return (
        <img className={style.imgSingleProduct} src={picture.src} alt={picture.alt} />
    );
};

export default SingleProductImg;
