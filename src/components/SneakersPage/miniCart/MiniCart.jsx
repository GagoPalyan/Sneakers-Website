import { NavLink } from "react-router-dom";
import style from "./MiniCart.module.css";

function MiniCart({ sneakers }) {
  return (
    <NavLink to={`/sneakers-page/${sneakers.id}`} className={style.cart}>
      <img src={sneakers.image[0]} />
    </NavLink>
  );
}

export default MiniCart;
