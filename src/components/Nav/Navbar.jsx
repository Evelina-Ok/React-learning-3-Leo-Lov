import style from "./Navbar.module.scss";

export function Navbar() {
  return (
    <>
      <nav className={style.navbarStyle}>
        <ul className={style.navbarUl}>
          <li>
            <a href="Hjem">Hjem</a>
            </li>
          <li> | </li>
          <li>
            <a href="#Advokaterne">Advokaterne</a>
          </li>
          <li> | </li>
          <li>
            <a href="#Om LeoLov">Om LeoLov</a>
          </li>
          <li> | </li>
          <li>
            <a href="#Kontakt">Kontakt</a>
          </li>
        </ul>

        <h3 className={style.navLogo}>
          <span>Leo-</span>Lov
        </h3>
      </nav>
    </>
  );
}
