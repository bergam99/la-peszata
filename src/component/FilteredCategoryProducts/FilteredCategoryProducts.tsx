import React, { useState } from 'react';
import { IProduct, PRODUCTS, ProductCategoryType } from '../../mock/mock';
import ReusableButtonOne from '../ReusableButtonOne/ReusableButtonOne';
import style from "./FilteredCategoryProducts.module.css";

const FilteredCategoryProducts = ({ products }: { products: IProduct[] }) => {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryType | "all">("all");

    const filteredProducts =  products.filter((product) => product.category === selectedCategory);

    return (
        <div>
            <div className={style.ingredientsButtonContainer}>
                <ReusableButtonOne title="Afficher tout" callback={() => setSelectedCategory("all")} />
                <ReusableButtonOne title="Pizzas" callback={() => setSelectedCategory("pizza")} />
                <ReusableButtonOne title="Burgers" callback={() => setSelectedCategory("burger")} />
                <ReusableButtonOne title="Desserts" callback={() => setSelectedCategory("dessert")} />
                <ReusableButtonOne title="Boissons" callback={() => setSelectedCategory("drink")} />
            </div>
            <div className={style.elementsContainer}>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img className={style.img} src={product.picture} alt="" />
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilteredCategoryProducts;
