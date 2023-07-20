import style from "./Header.module.css"
const Header = () => {
    return (
        <>
            <div className={style.wrapper}>
                <h1 className={style.title} >La Pezsata</h1>
                <img className={style.img} src="public/shopping-cart.png" alt="" />
            </div>
        </>
    )
}
export default Header;