import { useTranslation } from "react-i18next";
import style from "./DeliveryPolicy.module.css";

function DeliveryPolicy() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <p className={style.title}>{t("security.deliveryPolicy.title")}</p>
      <p className={style.about}>{t("security.deliveryPolicy.about")}</p>

      <p className={style.about}>{t("security.deliveryPolicy.caption1")}</p>
      <p>{t("security.deliveryPolicy.text1")}</p>
      <p>{t("security.deliveryPolicy.text2")}</p>
      <p>{t("security.deliveryPolicy.text3")}</p>

      <p className={style.about}> {t("security.deliveryPolicy.caption2")}</p>
      <p>{t("security.deliveryPolicy.text4")}</p>
      <p>{t("security.deliveryPolicy.text5")}</p>

      <p className={style.about}> {t("security.deliveryPolicy.caption3")}</p>
      <p>{t("security.deliveryPolicy.text6")}</p>
      <p>{t("security.deliveryPolicy.text7")}</p>

      <p className={style.about}>{t("security.deliveryPolicy.caption4")}</p>
      <p>{t("security.deliveryPolicy.text8")}</p>

      <p className={style.about}>{t("security.deliveryPolicy.caption5")}</p>
      <p>{t("security.deliveryPolicy.text9")}</p>
      <p>{t("security.deliveryPolicy.text10")}</p>
    </main>
  );
}

export default DeliveryPolicy;
