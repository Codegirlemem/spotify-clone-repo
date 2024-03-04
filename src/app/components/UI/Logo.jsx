import { ReactComponent as SpotifyWhiteLogo } from "../../assets/spotify-whitesvg-logo.svg";
import { ReactComponent as SpotifyBlackLogo } from "../../assets/spotify-blacksvg-logo.svg";

import "../LandingPageHeader.css";
import "./Logo.css";

// export default function Logo(props) {
//   if (props.blackBackground) {
//     return (
//       <a href="#/dashboard">

//         <SpotifyWhiteLogo />;
//       </a>
//     );
//   } else {
//     return (
//       <a href="#/dashboard">
//         <SpotifyBlackLogo />;
//       </a>
//     );
//   }
// }

export default function Logo(props) {
  return (
    <a className="spotify-logo" href="#/dashboard">
      {props.blackBackground ? <SpotifyWhiteLogo /> : <SpotifyBlackLogo />}
    </a>
  );
}
