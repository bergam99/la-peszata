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
      <div className={style.wrapper}>
        <p className={style.textAlignCenter}> Payment Success ✅  </p>
        <br />
        <img className={style.paymentSuccessImg} src="imgs/paymentSuccess.png"></img>
          <p>Table number:</p>
        <ul className={style.cards}>
          {products.map((p) => (
            <li key={p.id} className={style.card}>
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
                  <hr />
                </div>
              </div>
            </li>
          ))}
          <p className={style.total}>Total: {formatCurrency(totalPrice)} </p>
        </ul>
        <NavLink to="/products">
          <ReusableButtonOne
            title="Re-commander"
            callback={() => clearLocalStorage()}
          />
        </NavLink>
        <p className={style.byeBye}>A bientôt !</p>
      </div>
    </Fragment>
  );
};

export default PaymentSuccess;
