import { Fragment } from "react";
// import { useShoppingCart } from "../../context/ShoppingCartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/ShoppingCartContext";

const CartIcon = () => {
  const { getTotalProduct } = useCartContext();
  const totalQuantity = getTotalProduct();
  return (
    <Fragment>
      <div>
        <NavLink to="/cart">
          <AiOutlineShoppingCart />({totalQuantity})
        </NavLink>
      </div>
    </Fragment>
  );
};

export default CartIcon;
