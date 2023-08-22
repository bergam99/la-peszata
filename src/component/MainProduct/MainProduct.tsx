import React from 'react';
import style from './MainProduct.module.css';
import Header from '../Header/Header';
import ReusableButtonOne from '../ReusableButtonOne/ReusableButtonOne';

export const MainProduct = () => {
    return (
        <div className={style.wrapper}>
            <div>
                <Header />
                <img className={style.image} src="imgs/burger.jpg" alt="" />
                <h3 className={style["image-caption-h3"]}>Triple <br></br> cheese <br></br> bacon</h3>
                <p className={style["image-caption-paragraphe"]}>Only $7.99</p>
                <button  className={style["image-caption-button"]}>Voir plus</button>
                
            </div>
        </div>
    );
};
