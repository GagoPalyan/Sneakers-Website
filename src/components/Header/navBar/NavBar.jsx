import { NavLink } from "react-router-dom";
import routes from "../../../utils/routes";
import style from "./NavBar.module.css";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  
  const navLinkStyles = ({ isActive }) => ({
    borderColor: isActive && "black",
  });

  return (
    <nav className={style.navBar}>
      {routes.shopPages.map((page) => (
        <NavLink
          style={navLinkStyles}
          key={page.id}
          to={page.path}
          className={style.link}
        >
          {t(page.name)}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
