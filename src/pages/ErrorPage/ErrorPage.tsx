import React from "react";
import Header from "../../component/Header/Header";
import style from './ErrorPage.module.css'
import BackButton from "../../component/BackButton/BackButton";

const ErrorPage = () => {
  const navigateBack = () => {
    window.history.back();
  };
  return <div>
    <Header />
    <div className={style.wrapperErrorPage}>
      <img className={style.notFoundImg} src="imgs/errorPage.png" alt="error" />
      <h1 className={style.bold}>Ooooops !</h1>
      <p>We can't find the page you are looking for</p>
      <button className={style.backButton} onClick={navigateBack}> Go Back </button>
    </div>
  </div>;
};

export default ErrorPage;
