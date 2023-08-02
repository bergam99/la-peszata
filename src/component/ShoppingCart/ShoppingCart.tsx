import React, { Fragment } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import CartItem from "../CartItem/CartItem";
import BackButton from "../BackButton/BackButton";
import { NavLink } from "react-router-dom";
import style from "./ShoppingCart.module.css";
import formatCurrency from "../../utilities/formatCurrency";
const ShoppingCart = () => {
  const { getTotalPrice } = useCartContext();
  const totalPrice = getTotalPrice();

  return (
    <Fragment>
      <div className={style.HeaderCart}>
        <BackButton />
        <div className={style.titleWrapper}>
          <NavLink to="/">
            <h1 className={style.title}>La Pezsata</h1>
          </NavLink>
        </div>
      </div>

      <h3>Cart</h3>

      <CartItem />
      <p>Total: {formatCurrency(totalPrice)} </p>
    </Fragment>
  );
};

export default ShoppingCart;
