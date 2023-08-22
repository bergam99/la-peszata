import React from "react";
import style from "./SubProducts.module.css";

const SubProducts = () => {
    return (
        <article className={style.wrapper}>
            <div className={style.displayFlex}>
                <div className={style.textContainer}>
                    <h3 className={style.decorationH3}>Découvrez notre onctueuse pizza pepperoni</h3>
                    <p className={style.decorationDescription}>
                        Délicieuse pizza composée d'une pâte à pizza fraîchement préparée,
                        <br />
                        garnie d'une sauce tomate savoureuse <br />et d'une couche généreuse de fromage fondant.
                    </p>
                </div>
                <div className={style.imageContainer}>
                    <img src="imgs/home.jpg" alt="" className={style.img} />
                </div>
            </div>
        </article>
    );
};

export default SubProducts;
