import React, { Fragment } from "react";
import style from "./ReusableButtonOne.module.css";
interface ButtonReuseProps {
  title: string;
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
