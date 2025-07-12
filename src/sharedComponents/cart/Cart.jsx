import { Link } from "react-router-dom";
import style from "./Cart.module.css";

function Cart({ item }) {
  return (
    <div className={style.cart}>
      <Link to={`/sneakers-page/${item.id}`} key={item.id}>
        <img src={item.image[0]} />
      </Link>
      <div className={style.info}>
        <h3 className={style.categoryPrice}>{item.name}</h3>
        <h2 className={style.price}>${item.price}</h2>
      </div>
    </div>
  );
}

export default Cart;
