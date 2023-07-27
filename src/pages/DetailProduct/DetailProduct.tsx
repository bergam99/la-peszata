import { Fragment } from "react";
import BackButton from "../../component/BackButton/BackButton";
import ProductCard from "../../component/ProductCard/ProductCard";
import { IProduct } from "../../mock/mock";
import { getProduct } from "../../service/getAllProducts";
import { ActionFunctionArgs, useLoaderData } from "react-router-dom";
import style from "./DetailProduct.module.css";
import InnerDetailProduct from "../../component/InnerDetailProduct/InnerDetailProduct";
import CartIcon from "../../component/cartIcon/CartIcon";

export const productLoader = (args: ActionFunctionArgs) => {
  const { params } = args;
  const { id } = params;
  const productId = Number(id);
  const product = getProduct(productId);
  console.log(product);
  if (!product) {
    throw new Response("", {
      status: 404,
      statusText: "Produit indisponible",
    });
  }
  return product;
};

const DetailProduct = () => {
  const product = useLoaderData() as IProduct;
  return (
    <Fragment>
      <BackButton />
      <CartIcon />
      <div className={style.DetailProduct}>
        <ProductCard item={product} />
        <InnerDetailProduct product={product} />
      </div>
    </Fragment>
  );
};

export default DetailProduct;
