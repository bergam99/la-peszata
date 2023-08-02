import { Fragment } from "react";
// import { useShoppingCart } from "../../context/ShoppingCartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/ShoppingCartContext";
import style from "./CartIcon.module.css";
const CartIcon = () => {
  const { getTotalProduct } = useCartContext();
  const totalQuantity = getTotalProduct();
  return (
    <Fragment>
      <div className={style.container}>
        <NavLink to="/cart">
          <div className={style.icon}>
            <AiOutlineShoppingCart />
          </div>
          <div className={style.number}>{totalQuantity}</div>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default CartIcon;
