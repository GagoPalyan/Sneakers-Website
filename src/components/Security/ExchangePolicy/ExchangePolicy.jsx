import { useTranslation } from "react-i18next";
import style from "./ExchangePolicy.module.css";

function ExchangePolicy() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <p className={style.title}>{t("security.exchangePolicy.title")}</p>
      <p className={style.about}>{t("security.exchangePolicy.about")}</p>

      <p className={style.about}>{t("security.exchangePolicy.caption1")}</p>
      <p>{t("security.exchangePolicy.text1")}</p>
      <p>{t("security.exchangePolicy.text2")}</p>

      <p className={style.about}> {t("security.exchangePolicy.caption2")}</p>
      <p>{t("security.exchangePolicy.text3")}</p>
      <p>{t("security.exchangePolicy.text4")}</p>
      <p>{t("security.exchangePolicy.text5")}</p>

      <p className={style.about}> {t("security.exchangePolicy.caption3")}</p>
      <p>{t("security.exchangePolicy.text6")}</p>
      <p>{t("security.exchangePolicy.text7")}</p>
      <p>{t("security.exchangePolicy.text8")}</p>

      <p className={style.about}>{t("security.exchangePolicy.caption4")}</p>
      <p>{t("security.exchangePolicy.text9")}</p>
      <p>{t("security.exchangePolicy.text10")}</p>

      <p className={style.about}>{t("security.exchangePolicy.caption5")}</p>
      <p>{t("security.exchangePolicy.text11")}</p>
      <p>{t("security.exchangePolicy.text12")}</p>

      <p className={style.capture}>{t("security.exchangePolicy.text13")}</p>
    </main>
  );
}

export default ExchangePolicy;
