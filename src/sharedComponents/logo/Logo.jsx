import { NavLink } from "react-router-dom";
import { HOME_PAGE } from "../../utils/paths";
import logo from "../../assets/Logo/white.jpg";

function Logo() {
  return (
    <NavLink
      style={{
        width: "80px",
        height: "40px",
      }}
      to={HOME_PAGE}
    >
      <img
        style={{
          width: "80px",
          height: "40px",
        }}
        src={logo}
        alt="KickZZZup"
      />
    </NavLink>
  );
}

export default Logo;
