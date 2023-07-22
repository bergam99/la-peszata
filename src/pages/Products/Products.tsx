import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getProducts } from '../../service/getAllProducts';
import style from './Products.module.css';
import ProductCard from '../../component/ProductCard/ProductCard';
import ReusableButtonOne from '../../component/ReusableButtonOne/ReusableButtonOne';
import FilteredProduct from '../../component/FilteredProducts/FilteredProducts';
import { IProduct } from '../../mock/mock';

export const productsLoader = (): IProduct[] => {
  const products = getProducts();
  return products;
};

const Products = () => {
  const allProducts = useLoaderData() as IProduct[];
  const [currentCategory] = useState<string | null>(null);

  const filteredProducts = currentCategory
    ? allProducts.filter((product) => product.category === currentCategory)
    : allProducts;


  return (
    <>
      <FilteredProduct products={filteredProducts} />
      <div className={style.container}>
        <h2> All Products </h2>
        <ul>
          {filteredProducts.map((product: IProduct) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard item={product} />
                <ReusableButtonOne title="Voir plus" callback={() => console.log("L'article est cliqué")} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
