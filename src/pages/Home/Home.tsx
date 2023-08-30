import { Fragment } from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <section className={style.home}>
        <div className={style.texts}>
          <div className={style.title}>
            <div className={style.dot}>.&nbsp; </div>{" "}
            <h1 className={style.title}>La Pezsata </h1>
            <div className={style.dot}> &nbsp;.</div>
          </div>
          <div className={`${style.text} ${style.mobile}`}>
            No way to resist !!
          </div>
        </div>
        <img className={style.img} src="/imgs/official2home.png" alt="home" />
        <NavLink to="/products">
          <button className={style.button}>CHECK OUR PRODUCTS</button>
        </NavLink>
        <div className={style.promo}>
          promo 
          <br></br>
          $7.99
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
