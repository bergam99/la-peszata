import React, { Fragment } from "react";
import style from "./ReusableButtonOne.module.css";
interface ButtonReuseProps {
  children?: React.ReactNode;
  title: string;
  callback: () => void;
  icon?: React.ReactNode;

}

const ReusableButtonOne = (props: ButtonReuseProps) => {
  const { title, callback, icon } = props;
  return (
    <Fragment>
      <button className={`${style.desktopButton} `} onClick={callback}>
        {title}
      </button>

      <button className={style.mobileButton} onClick={callback}>
        {icon}
      </button>
    </Fragment>
  );
};

export default ReusableButtonOne;
