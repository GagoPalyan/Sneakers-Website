import style from "./CartProduct.module.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  removeCart,
  removeFavorite,
} from "../../features/products/productsSlice";
import { useTranslation } from "react-i18next";

function CartProduct({ product, type }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className={style.cart}>
      <img src={product.image[0]} alt={product.name} />
      <div className={style.info}>
        <p className={style.category}>
          {type == "Cart"
            ? t("favoritePage.cartProduct.size") + product.size
            : product.brand}
        </p>
        <div className={style.buy}>
          <p className={style.name}>{product.name}</p>
          <p className={style.price}>${product.price}</p>
        </div>
        <div className={style.aboutCart}>
          <NavLink to={`/sneakers-page/${product.id}`}>
            {t("favoritePage.cartProduct.more")}
          </NavLink>
          <button
            onClick={() => {
              (type == "Cart" && dispatch(removeCart(product.id))) ||
                (type == "Favorite" && dispatch(removeFavorite(product.id)));
            }}
          >
            {t("favoritePage.cartProduct.remove")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
