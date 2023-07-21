import { useNavigate } from "react-router-dom"
import style from "./BackButton.module.css"

const BackButton = () => {
    const navigate = useNavigate();
    const back = () => navigate(-1);
    return <button className={style.backBtn} onClick={back}>
        <img className={style.img} src="/icons/arrow.png" alt="boutton retour" />
        </button>

}
export default BackButton;