import React, { Fragment, useState } from "react";
import style from "./PaymentSuccess.module.css";
import Header from "../../component/Header/Header";
import { useCartContext } from "../../context/ShoppingCartContext";
import formatCurrency from "../../utilities/formatCurrency";
import { redirect, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { products, getTotalPrice } = useCartContext();
  const totalPrice = getTotalPrice();
  const initialNumeroTable = localStorage.getItem("numeroTable");
  const { resetCart } = useCartContext();
  const navigate = useNavigate()
  
  function clearLocalStorage() {
    resetCart();
    navigate("/products");
  }
  

  return (
    <Fragment>
      <Header />
      <div className={style.wrapper}>
        <p className={style.textAlignCenter}> Payment Success ✅ </p>
        <p>Numéro de table : {initialNumeroTable}</p>
        <img
          className={style.paymentSuccessImg}
          src="imgs/paymentSuccess.png"
        ></img>
        <ul className={style.cards}>
          {products.map((p) => (
            <li key={p.id} className={style.card}>
              <div className={style.des}>
                <div>
                  {p.product.title}
                  <span className={style.quantity}></span>
                </div>
                <div className={style.priceRow}>
                  {formatCurrency(p.product.price * p.quantity)}
                  <span className={style.gray}>
                    &nbsp;&nbsp;({formatCurrency(p.product.price)} x {p.quantity})
                  </span>
                </div>
              </div>
              <hr className={style.hrPaymentSuccess} />
            </li>
          ))}
          <p className={style.total}>Total: {formatCurrency(totalPrice)} </p>
        </ul>

        <button className={style.restartButton} onClick={clearLocalStorage}>
          Re-commander
        </button>

        <p className={style.byeBye}>A bientôt !</p>
      </div>
    </Fragment>
  );
};

export default PaymentSuccess;
