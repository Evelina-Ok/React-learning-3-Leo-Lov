import style from "./Navbar.module.scss"

export function Navbar () {
    return (
        <>
            <nav className={style.navbarStyle}>
                <ul className={style.navbarUl}>
                    <li>Hjem</li>
                    <li> | </li>
                    <li>Advokaterne</li>
                    <li> | </li>
                    <li>Om LeoLov</li>
                    <li> | </li>
                    <li>Kontakt</li>
                </ul>
                <h3 className={style.navLogo}><span>Leo-</span>Lov</h3>
            </nav>
        
        </>
    )
}