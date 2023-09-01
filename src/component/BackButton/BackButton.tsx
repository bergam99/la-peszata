import { useNavigate } from "react-router-dom";
import style from "./BackButton.module.css";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <button onClick={back}>
      <BiArrowBack className={style.icon} />
    </button>
  );
};
export default BackButton;
