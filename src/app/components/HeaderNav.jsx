import "./LandingPageHeader.css";

export default function HeaderNav() {
  console.log(HeaderNav);
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="#/dashboard">Premium</a>
        </li>
        <li>
          <a href="#/dashboard">Support</a>
        </li>
        <li>
          <a href="#/dashboard">Download</a>
        </li>
        <li>
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
