import { useSelector } from "react-redux";
import style from "./CartPage.module.css";
import { selectCart } from "../../features/products/productsSlice";
import CartProduct from "../../sharedComponents/cartProduct/CartProduct";
import Button from "../../sharedComponents/button/Button";
import { useEffect, useState } from "react";
import { BUY_PAGE, HOME_PAGE } from "../../utils/paths";
import { useTranslation } from "react-i18next";

function CartPage() {
  const { t } = useTranslation();
  const cart = useSelector(selectCart);
  const [subtotal, setSubtotal] = useState();

  useEffect(() => {
    let total = 0;
    cart.forEach((elem) => {
      total += +elem.price;
    });
    setSubtotal(+total);
  }, [cart]);

  return cart.length == 0 ? (
    <main className={style.empty}>
      <p className={style.title}>{t("cartPage.empty.text")}</p>
      <Button path={HOME_PAGE} text={t("cartPage.empty.button")} />
    </main>
  ) : (
    <main className={style.main}>
      <div className={style.cart}>
        <p className={style.title}>{t("cartPage.title")}</p>
        {cart.map((item) => (
          <CartProduct key={item.id} product={item} type="Cart" />
        ))}
      </div>
      <div className={style.total}>
        <p>
          {t("cartPage.price")}
          {subtotal}
        </p>
        <Button path={BUY_PAGE} text={t("cartPage.button")} />
      </div>
    </main>
  );
}

export default CartPage;
