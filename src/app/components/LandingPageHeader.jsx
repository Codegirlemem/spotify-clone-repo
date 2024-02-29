// import { Component } from "react";

import React from "react";
import "./LandingPageHeader.css";
import Logo from "./Logo.jsx";
import Navigation from "./HeaderNav.jsx";

export function LandingPageHeader() {
  return (
    <header className="header">
      <Logo blackBackground={true} />
      <Navigation />
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
