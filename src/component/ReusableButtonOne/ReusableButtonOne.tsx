import React, { Fragment } from "react";
import style from "./ReusableButtonOne.module.css";
interface ButtonReuseProps {
  children? : React.ReactNode;
  title: string;
  callback : () => void;
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
