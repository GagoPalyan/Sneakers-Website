import style from "./FavoritePage.module.css";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../features/products/productsSlice";
import CartProduct from "../../sharedComponents/cartProduct/CartProduct";
import Button from "../../sharedComponents/button/Button";
import { HOME_PAGE } from "../../utils/paths";
import { useTranslation } from "react-i18next";

function FavoritePage() {
  const { t } = useTranslation();
  const favorite = useSelector(selectFavorite);

  return favorite.length == 0 ? (
    <main className={style.empty}>
      <p className={style.title}>{t("favoritePage.empty")}</p>
      <Button path={HOME_PAGE} text={t("cartPage.empty.button")} />
    </main>
  ) : (
    <main className={style.main}>
      <p className={style.title}>{t("favoritePage.title")}</p>
      {favorite.map((item) => (
        <CartProduct key={item.id} product={item} type="Favorite" />
      ))}
    </main>
  );
}

export default FavoritePage;
