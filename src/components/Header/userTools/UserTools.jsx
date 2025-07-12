import { NavLink } from "react-router-dom";
import routes from "../../../utils/routes";
import style from "./UserTools.module.css";
import { useSelector } from "react-redux";
import {
  selectCart,
  selectFavorite,
} from "../../../features/products/productsSlice";
import { useEffect } from "react";

function UserTools() {
  const cartCount = useSelector(selectCart);
  const favoriteCount = useSelector(selectFavorite);

  return (
    <nav className={style.userTools}>
      {routes.userTools.map((link) => (
        <NavLink to={link.path} key={link.id} className={style.link}>
          {link.icon}
          {link.id == 10 && cartCount.length > 0 && <p>{cartCount.length}</p>}
          {link.id == 9 && favoriteCount.length > 0 && (
            <p>{favoriteCount.length}</p>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default UserTools;
