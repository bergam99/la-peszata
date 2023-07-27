import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import style from "./ReusableButtonOne.module.css";
interface ButtonReuseProps {
  title: string;
  // callback: () => void;
}
const ReusableButtonOne = (props: ButtonReuseProps) => {
  const { title } = props;
  return (
    <Fragment>
      <button className={style.button}>{title}</button>
    </Fragment>
  );
};

export default ReusableButtonOne;
