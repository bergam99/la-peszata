import { AiOutlineClose } from "react-icons/ai";
import { useCartContext } from "../../context/ShoppingCartContext";
import formatCurrency from "../../utilities/formatCurrency";
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
          <li key={p.id} className={style.card}>
            <img
              className={style.img}
              src={p.product.picture}
              alt="{p.product}"
            />
            <div>
              {p.product.title}{" "}
              <span className={style.quantity}>x {p.quantity}</span>
            </div>
            <div>{formatCurrency(p.product.price * p.quantity)}</div>

            <QuantityPicker
              quantity={p.quantity}
              add={() => addOne(p.product, p.quantity)}
              remove={() => removeOne(p.product)}
            />

            <button onClick={() => removeProduct(p.product)}>
              <AiOutlineClose />
            </button>
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </main>
  );
};

export default CartItem;
