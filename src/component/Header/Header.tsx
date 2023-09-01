import { NavLink } from "react-router-dom";
import CartIcon from "../cartIcon/CartIcon";
import style from "./Header.module.css";
import { Fragment } from "react";
import BackButton from "../BackButton/BackButton";
const Header = () => {
  return (
    <Fragment>
      <div className={style.wrapper}>
        <BackButton />

        <div className={style.titleWrapper}>
          <NavLink to="/">
            <h1 className={style.title}>La Pezsata</h1>
          </NavLink>
        </div>

        <div className={style.icon}>
          <CartIcon />
        </div>
        
      </div>
    </Fragment>
  );
};
export default Header;
