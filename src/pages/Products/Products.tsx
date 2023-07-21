import { Link, useLoaderData } from "react-router-dom";
import { IProduct } from "../../mock";
import { getProducts } from "../../service/getAllProducts";
import style from "./Products.module.css"
import ProductCard from "../../component/ProductCard/ProductCard";

export const productsLoader = (): IProduct[] => {
  const products = getProducts();
  return products;
};

const Products = () => {
  const products = useLoaderData() as IProduct[];
  return (
      <div className={style.container}>
        <h1> Tous les produits </h1>
        <ul>
        {products.map((product : IProduct) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard item={product} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
  )
}
export default Products;
