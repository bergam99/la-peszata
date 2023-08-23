import React, { Fragment } from "react";
import style from "./PaymentSuccess.module.css";
import Header from "../../component/Header/Header";
import { useCartContext } from "../../context/ShoppingCartContext";
import formatCurrency from "../../utilities/formatCurrency";
import ReusableButtonOne from "../../component/ReusableButtonOne/ReusableButtonOne";
import { NavLink } from "react-router-dom";

const PaymentSuccess = () => {
  const { products, getTotalPrice } = useCartContext();
  const totalPrice = getTotalPrice();

  // vider localStorage & refresh page en allant sur /products
  function clearLocalStorage() {
    localStorage.clear();
    location.href = "/products";
  }

  return (
    <Fragment>
      <Header />
      Payment Success ✅
      <br />
      <ul className={style.cards}>
        {products.map((p) => (
          <li key={p.id} className={style.card}>
            <div className={style.des}>
              <div>
                • {p.product.title}
                <span className={style.quantity}></span>
              </div>
              <div>
                {formatCurrency(p.product.price * p.quantity)}
                <span className={style.gray}>
                  &nbsp;&nbsp;({formatCurrency(p.product.price)} x {p.quantity})
                </span>
                <hr />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>table number:</p>
      <p className={style.total}>Total: {formatCurrency(totalPrice)} </p>
      <p>A bientôt !</p>
      <NavLink to="/products">
        <ReusableButtonOne
          title="re-commander"
          callback={() => clearLocalStorage()}
        />
      </NavLink>
    </Fragment>
  );
};

export default PaymentSuccess;
