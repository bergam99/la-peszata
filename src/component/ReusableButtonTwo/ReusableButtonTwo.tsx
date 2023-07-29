// sans function
import React, { Fragment } from "react";
import style from "./ReusableButtonTwo.module.css";
interface ButtonReuseProps {
  title: string;
}

const ReusableButtonTwo = (props: ButtonReuseProps) => {
  const { title } = props;
  return (
    <Fragment>
      <button className={style.button}>{title}</button>
    </Fragment>
  );
};

export default ReusableButtonTwo;
