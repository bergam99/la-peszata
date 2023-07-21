import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import style from "./ReusableButtonOne.module.css";
interface ButtonReuseProps {
  title: string;
  callback: () => void;
}
const ReusableButtonOne = (props: ButtonReuseProps) => {
  const { title, callback } = props;
  return (
    <Fragment>
      <button onClick={callback} className={style.button}>
        {title}
      </button>
    </Fragment>
  );
};

export default ReusableButtonOne;
