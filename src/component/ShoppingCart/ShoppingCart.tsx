import React, { Fragment } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = () => {
  const { getTotalPrice } = useCartContext();
  const totalPrice = getTotalPrice();

  return (
    <Fragment>
      <CartItem />
      <p>Total: {totalPrice}€ </p>;
    </Fragment>
  );
};

export default ShoppingCart;
