import BackButton from "../../component/BackButton/BackButton";
import ProductCard from "../../component/ProductCard/ProductCard";
import { IProduct } from "../../mock/mock";
import { getProduct } from "../../service/getAllProducts";
import { ActionFunctionArgs, useLoaderData } from "react-router-dom";

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
<<<<<<< Updated upstream
  return (
    <>
      <BackButton />
      <ProductCard item={product} />
    </>
  )
}
=======
  return <ProductCard item={product} />;
};
>>>>>>> Stashed changes

export default DetailProduct;
