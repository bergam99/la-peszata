import { NavLink } from "react-router-dom";
import CartIcon from "../cartIcon/CartIcon";
import style from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={style.wrapper}>
        <NavLink to="/">
          <h1 className={style.title}>La Pezsata</h1>
        </NavLink>
      </div>
    </>
  );
};
export default Header;
