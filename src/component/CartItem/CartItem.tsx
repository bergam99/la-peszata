import { useCartContext } from "../../context/ShoppingCartContext";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import style from "./CartItem.module.css";
const CartItem = () => {
  const { products, resetCart, removeProduct, removeOne, addOne } =
    useCartContext();
  const reset = () => resetCart();
  return (
    <main>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <img
              className={style.img}
              src={p.product.picture.src}
              alt={p.product.picture.alt}
            />
            Article : {p.product.title} / Quantité : {p.quantity} / Prix:{" "}
            {p.product.price * p.quantity}€
            <br />
            <QuantityPicker
              quantity={p.quantity}
              add={() => addOne(p.product, p.quantity)}
              remove={() => removeOne(p.product)}
            />
            <br />
            <br />
            <button onClick={() => removeProduct(p.product)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </main>
  );
};

export default CartItem;