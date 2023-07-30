import { IProduct } from "../../mock/mock";
import style from "./SubProducts.module.css"

interface SubProductsProps {
    item: IProduct;
}

const SubProducts = (props: SubProductsProps) => {
    const { item } = props;
    const { title, description, picture } = item;
    return (
        <div className={style.wrapper}>
            <article>
                <div className={style.displayFlex}>
                    <div className={style.contentContainer}>
                        <p className={style.decorationTitle}>{title} </p>  { /*subtitle */}
                        <h3 className={style.decorationH3}>{description}</h3> { /*title */}
                        <p className={style.decorationDescription}>{description}</p> { /*description */}
                    </div>

                    <img src={picture.src} alt={picture.alt} />
                </div>
            </article>
        </div>
    )
}
export default SubProducts;