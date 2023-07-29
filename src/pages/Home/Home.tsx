import { Fragment } from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <NavLink to="/products">CHECK OUR PRODUCTS</NavLink>
    </Fragment>
  );
};

export default Home;
