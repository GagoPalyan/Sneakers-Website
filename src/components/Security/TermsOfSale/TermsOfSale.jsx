import { useTranslation } from "react-i18next";
import style from "./TermsOfSale.module.css";

function TermsOfSale() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <p className={style.title}>{t("security.termsOfSale.title")}</p>
      <p className={style.about}>{t("security.termsOfSale.about")}</p>

      <p className={style.about}>{t("security.termsOfSale.caption1")}</p>
      <p>{t("security.termsOfSale.text1")}</p>
      <p>{t("security.termsOfSale.text2")}</p>

      <p className={style.about}> {t("security.termsOfSale.caption2")}</p>
      <p>{t("security.termsOfSale.text3")}</p>
      <p>{t("security.termsOfSale.text4")}</p>

      <p className={style.about}> {t("security.termsOfSale.caption3")}</p>
      <p>{t("security.termsOfSale.text5")}</p>
      <p>{t("security.termsOfSale.text6")}</p>
      <p>{t("security.termsOfSale.text7")}</p>

      <p className={style.about}>{t("security.termsOfSale.caption4")}</p>
      <p>{t("security.termsOfSale.text8")}</p>
      <p>{t("security.termsOfSale.text9")}</p>
      <p>{t("security.termsOfSale.text10")}</p>

      <p className={style.about}>{t("security.termsOfSale.caption5")}</p>
      <p>{t("security.termsOfSale.text11")}</p>
      <p>{t("security.termsOfSale.text12")}</p>
      <p>{t("security.termsOfSale.text13")}</p>
      <p>{t("security.termsOfSale.text14")}</p>

      <p className={style.about}>{t("security.termsOfSale.caption6")}</p>
      <p>{t("security.termsOfSale.text15")}</p>
      <p>{t("security.termsOfSale.text16")}</p>

      <p className={style.about}> {t("security.termsOfSale.caption7")}</p>
      <p>{t("security.termsOfSale.text17")}</p>

      <p className={style.about}> {t("security.termsOfSale.caption8")}</p>
      <p>{t("security.termsOfSale.text18")}</p>
      <p>{t("security.termsOfSale.text19")}</p>

      <p className={style.about}>{t("security.termsOfSale.caption9")}</p>
      <p>{t("security.termsOfSale.text20")}</p>

      <p className={style.about}>{t("security.termsOfSale.caption10")}</p>
      <p>{t("security.termsOfSale.text21")}</p>
      <p>{t("security.termsOfSale.text22")}</p>

      <p className={style.about}>{t("security.termsOfSale.caption11")}</p>
      <p>{t("security.termsOfSale.text23")}</p>

      <p className={style.capture}>{t("security.termsOfSale.text24")}</p>
      <p className={style.capture}>{t("security.termsOfSale.text25")}</p>
    </main>
  );
}

export default TermsOfSale;
