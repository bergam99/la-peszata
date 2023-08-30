import React, { Fragment, useState } from "react";
import style from "./PaymentSuccess.module.css";
import Header from "../../component/Header/Header";
import { useCartContext } from "../../context/ShoppingCartContext";
import formatCurrency from "../../utilities/formatCurrency";

const PaymentSuccess = () => {
  const { products, getTotalPrice } = useCartContext();
  const totalPrice = getTotalPrice();
  const initialNumeroTable = localStorage.getItem("numeroTable");

  const [numeroTable, setNumeroTable] = useState(
    initialNumeroTable ? parseInt(initialNumeroTable) : 1
  );

  function updateTableNumber() {
    const newNumeroTable = numeroTable + 1;
    setNumeroTable(newNumeroTable);
    localStorage.setItem("numeroTable", newNumeroTable.toString()); // Mettre à jour le localStorage
  }

  // vider localStorage & refresh page en allant sur /products
  function clearLocalStorage() {
    localStorage.clear();
    updateTableNumber();
    location.href = "/products";
  }

  return (
    <Fragment>
      <Header />
      <div className={style.wrapper}>
        <p className={style.textAlignCenter}> Payment Success ✅ </p>
        <img
          className={style.paymentSuccessImg}
          src="imgs/paymentSuccess.png"
        ></img>
        <p>Numéro de table : {numeroTable}</p>
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
