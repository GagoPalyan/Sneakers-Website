import style from "./BuyPage.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/products/productsSlice";
import { promoCode } from "../../utils/promoList";
import { HOME_PAGE } from "../../utils/paths";
import DeliveryOptions from "./DeliveryOptions/DeliveryOptions";
import Payment from "./Payment/Payment";
import Review from "./Review/Review";

function BuyPage() {
  const cart = useSelector(selectCart);
  cart.length == 0 && (window.location = HOME_PAGE);

  const { t } = useTranslation();
  const [data, setData] = useState();
  const [chapter, setChapter] = useState("Delivery Options");
  const itemPrice = cart.reduce((prev, item) => prev + item.price, 0);
  const delivery = "FREE";
  const [total, setTotal] = useState(itemPrice);

  const [promo, setPromo] = useState("");
  const promoStory = localStorage.getItem("PromoCode") ? true : false;

  return (
    <main className={style.main}>
      <section className={style.content}>
        <p className={style.title}>{t("checkoutPage.title")}</p>
        <ul className={style.left}>
          <li className={style.chapter}>
            <p className={style.about}>
              {t("checkoutPage.chapter.deliveryOptions.about")}
            </p>
            {chapter == "Delivery Options" && (
              <DeliveryOptions setChapter={setChapter} setData={setData} />
            )}
          </li>
          <li className={style.chapter}>
            <p className={style.about}>
              {t("checkoutPage.chapter.payment.about")}
            </p>
            {chapter == "Payment" && (
              <Payment setChapter={setChapter} data={data} setData={setData} />
            )}
          </li>
          <li className={style.chapter}>
            <p className={style.about}>
              {t("checkoutPage.chapter.orderReview.title")}
            </p>
            {chapter == "Review" && <Review />}
          </li>
        </ul>
        <div className={style.right}>
          <p className={style.subtitle}>{t("checkoutPage.coupon.title")}</p>
          <ul className={style.coupon}>
            <li>
              <p>{cart.length + t("checkoutPage.coupon.list.line1")}</p>
              <p>${itemPrice}</p>
            </li>
            <li>
              <p>{t("checkoutPage.coupon.list.line3")}</p>
              <p>{delivery}</p>
            </li>
            <li>
              <p>
                <b>{t("checkoutPage.coupon.list.line4")}</b>
              </p>
              <p>
                <b>${total}</b>
              </p>
            </li>
            {!promoStory && (
              <div className={style.promo}>
                <input
                  className={style.promoInput}
                  type="text"
                  value={promo}
                  onChange={(e) => {
                    setPromo(e.target.value);
                  }}
                  placeholder={t("checkoutPage.coupon.promo.placeholder")}
                />
                <button
                  className={style.promoApply}
                  onClick={(e) => {
                    let code = promoCode.find((code) => code == promo);
                    if (code) {
                      setTotal((itemPrice / 100) * 90);
                      e.target.disabled = true;
                      localStorage.setItem("PromoCode", true);
                    }
                  }}
                >
                  {t("checkoutPage.coupon.promo.button1")}
                </button>
              </div>
            )}
          </ul>
          <ul className={style.list}>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image[0]} />${item.price} - {item.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default BuyPage;
