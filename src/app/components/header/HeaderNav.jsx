import style from "./LandingPageHeader.module.css";

export default function HeaderNav() {
  return (
    <nav className={style.navigation}>
      <ul className={style.navList}>
        <li>
          <a href="#/dashboard">Premium</a>
        </li>
        <li>
          <a href="#/dashboard">Support</a>
        </li>
        <li>
          <a href="#/dashboard">Download</a>
        </li>
        <li className={style.line}>
          <a href="#/dashboard">|</a>
        </li>
        <li className="active">
          <a href="#/dashboard">Sign up</a>
        </li>
        <li className="active">
          <a href="#/dashboard">Log in</a>
        </li>
      </ul>
    </nav>
  );
}
