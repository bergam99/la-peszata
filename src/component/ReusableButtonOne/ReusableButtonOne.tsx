import React, { Fragment } from "react";
import style from "./ReusableButtonOne.module.css";
interface ButtonReuseProps {
  children?: React.ReactNode;
  title: string;
  callback: () => void;
}

const ReusableButtonOne = (props: ButtonReuseProps) => {
  const { title, callback } = props;
  return (
    <Fragment>
      <button className={style.button} onClick={callback}>
        {title}
      </button>
    </Fragment>
  );
};

export default ReusableButtonOne;
