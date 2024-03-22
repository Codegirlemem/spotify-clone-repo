import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import style from "./LandingPageHeader.module.css";
import Logo from "../UI/Logo.jsx";
import Navigation from "./HeaderNav.jsx";

export function LandingPageHeader() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={style.header}>
      <div className={style.headerDiv}>
        <div className={style.logo}>
          <Logo blackBackground={true} />
        </div>

        <span className={style.menu} onClick={toggleMenu}>
          {showMenu ? "X" : <MdMenu />}
        </span>

        {showMenu ? (
          <div className={style.navigation}>
            <Navigation />
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

// export class LandingPageHeader extends Component {
//   constructor() {
//     super();

//     this.html = `
//     <header className="header">
//         <span className="logo">
//           <img src={Spotify} alt="spotify logo" />
//         </span>
//         <span className="menu">menu</span>
//       </header>
//     `;
//   }
//   render() {
//     return this.html;
//   }
// }
