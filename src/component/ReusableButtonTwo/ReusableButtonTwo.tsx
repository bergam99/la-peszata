// sans function
import { Fragment } from "react";
import style from "./ReusableButtonTwo.module.css";
interface ButtonReuseProps {
  title: string;
  callback: () => void;
}

const ReusableButtonTwo = (props: ButtonReuseProps) => {
  const { title, callback } = props;
  return (
    <Fragment>
      <button className={style.button} onClick={callback}>
        {title}
      </button>
    </Fragment>
  );
};

export default ReusableButtonTwo;
