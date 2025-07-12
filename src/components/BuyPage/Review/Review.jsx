import { Link } from "react-router-dom";
import style from "./Review.module.css";
import { CONTACT_US_PAGE } from "../../../utils/paths";
import { useTranslation } from "react-i18next";

function Review() {
  const { t } = useTranslation();

  return (
    <div className={style.content}>
      <p className={style.title}>
        {t("checkoutPage.chapter.orderReview.subtitle")}
      </p>
      <p className={style.info}>
        {t("checkoutPage.chapter.orderReview.info1")}
      </p>
      <p className={style.info}>
        {t("checkoutPage.chapter.orderReview.info2")}
      </p>
      <Link className={style.link} to={CONTACT_US_PAGE}>
        {t("checkoutPage.chapter.orderReview.link")}
      </Link>
      <p className={style.info}>
        {t("checkoutPage.chapter.orderReview.info3")}
      </p>
    </div>
  );
}

export default Review;
