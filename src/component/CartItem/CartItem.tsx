/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AiOutlineClose } from "react-icons/ai";
import { useCartContext } from "../../context/ShoppingCartContext";
import formatCurrency from "../../utilities/formatCurrency";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import style from "./CartItem.module.css";
import { NavLink } from "react-router-dom";
import { GrFormAdd } from "react-icons/gr";
import { FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";
import ReusableButtonOne from "../ReusableButtonOne/ReusableButtonOne";

const CartItem = () => {
  const { products, resetCart, removeProduct, removeOne, addOne } =
    useCartContext();
  const reset = () => resetCart();
  return (
    <main>
      <ul className={style.cards}>
        {products.map((p) => (
          <li key={p.id} className={style.card}>
            <img
              className={style.img}
              src={p.product.picture.src}
              alt={p.product.picture.alt}
            />
            <div className={style.des}>
              <div>
                {p.product.title}
                <span className={style.quantity}></span>
              </div>
              <div>
                {formatCurrency(p.product.price * p.quantity)}
                <span className={style.gray}>
                  &nbsp;&nbsp;({formatCurrency(p.product.price)} x {p.quantity})
                </span>
              </div>

              <QuantityPicker
                quantity={p.quantity}
                add={() => addOne(p.product, p.quantity)}
                remove={() => removeOne(p.product)}
              />
            </div>
            <button
              onClick={() => removeProduct(p.product)}
              className={style.remove}
            >
              <AiOutlineClose />
            </button>
          </li>
        ))}
      </ul>
      <div className={style.addProduct}>
        <NavLink to="/products">
          <button className={style.button}>
            <p> add more products</p>
            <p>
              <GrFormAdd />
            </p>
          </button>
        </NavLink>
      </div>

      <div className={style.pay}>
        Payment Method{" "}
        <div>
          <FaCcVisa /> <SiApplepay /> <FaCcPaypal />
        </div>
      </div>
      <ReusableButtonOne
        title="continue"
        callback={() => console.log("acceder au paiement")}
      />
      <button onClick={reset}>Reset</button>
    </main>
  );
};

export default CartItem;
