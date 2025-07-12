import style from "./Button.module.css";
import { NavLink } from "react-router-dom";

function Button({ path, text }) {
  return (
    <NavLink className={style.button} to={path}>
      {text}
    </NavLink>
  );
}

export default Button;
