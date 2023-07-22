import { useState } from 'react';
import { IProduct, ProductCategoryType } from '../../mock/mock';
import ReusableButtonOne from '../ReusableButtonOne/ReusableButtonOne';
import style from "./FilteredProducts.module.css"

const SelectedCategory = ({ products }: { products: IProduct[] }) => {
    const [currentCategory, setCurrentCategory] = useState<ProductCategoryType | null>(null);

    const filteredProducts = products.filter((product) => currentCategory === null || product.category === currentCategory);

    return (
        <>
            <ReusableButtonOne title="Show All" callback={() => setCurrentCategory(null)} />
            <ReusableButtonOne title="Filter by Desserts" callback={() => setCurrentCategory("dessert")} />
            <ReusableButtonOne title="Filter by Drinks" callback={() => setCurrentCategory("drink")} />
            <ReusableButtonOne title="Filter by Burgers" callback={() => setCurrentCategory("burger")} />
            <div className={style.container}>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.picture} alt="" />
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SelectedCategory;
