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

const CartItem = () => {
  const {
    products,
    resetCart,
    removeProduct,
    removeOne,
    addOne,
    getTotalPrice,
  } = useCartContext();
  const reset = () => resetCart();
  const totalPrice = getTotalPrice();

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
      <div>
        <NavLink to="/products" className={style.addProduct}>
          <button className={style.addProducButton}>
            <p className={style.addProductText}>add more products</p>
            <p className={style.addProductIcon}>
              <GrFormAdd />
            </p>
          </button>
        </NavLink>
      </div>

      <div className={style.pay}>
        Payment Method
        <div>
          <FaCcVisa /> <SiApplepay /> <FaCcPaypal />
        </div>
      </div>
      <p className={style.total}>Total: {formatCurrency(totalPrice)} </p>
      <div className={style.center}>
        <NavLink to="/payment">
          <button
            className={`${style.buttonContinue} ${style.centerButton}`}
            onClick={() => console.log("acceder au paiement")}
          >
            Continue
          </button>
        </NavLink>
      </div>

      <button className={style.centerButton} onClick={reset}>
        Reset
      </button>
    </main>
  );
};

export default CartItem;
