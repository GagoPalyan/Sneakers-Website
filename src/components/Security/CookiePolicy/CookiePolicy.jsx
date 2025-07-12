import { useTranslation } from "react-i18next";
import style from "./CookiePolicy.module.css";

function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <p className={style.title}>{t("security.cookiePolicy.title")}</p>
      <p className={style.about}>{t("security.cookiePolicy.text1")}</p>

      <p className={style.about}>{t("security.cookiePolicy.caption1")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text2")}</p>

      <p className={style.about}> {t("security.cookiePolicy.caption2")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text3")}</p>

      <p>{t("security.cookiePolicy.text4")}</p>
      <p>{t("security.cookiePolicy.text5")}</p>
      <p>{t("security.cookiePolicy.text6")}</p>
      <p>{t("security.cookiePolicy.text7")}</p>
      <p>{t("security.cookiePolicy.text8")}</p>

      <p className={style.about}>{t("security.cookiePolicy.caption3")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text9")}</p>

      <p>{t("security.cookiePolicy.text10")}</p>
      <p>{t("security.cookiePolicy.text11")}</p>
      <p>{t("security.cookiePolicy.text12")}</p>
      <p>{t("security.cookiePolicy.text13")}</p>
      <p>{t("security.cookiePolicy.text14")}</p>

      <p className={style.about}>{t("security.cookiePolicy.caption4")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text15")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text16")}</p>

      <p>{t("security.cookiePolicy.text17")}</p>
      <p>{t("security.cookiePolicy.text18")}</p>
      <p>{t("security.cookiePolicy.text19")}</p>
      <p>{t("security.cookiePolicy.text20")}</p>
      <p>{t("security.cookiePolicy.text21")}</p>

      <p className={style.about}>{t("security.cookiePolicy.caption5")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text22")}</p>

      <p className={style.about}>{t("security.cookiePolicy.caption6")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text23")}</p>

      <p className={style.about}>{t("security.cookiePolicy.caption7")}</p>
      <p className={style.capture}>{t("security.cookiePolicy.text24")}</p>

      <p className={style.about}>{t("security.cookiePolicy.text25")}</p>
      <p className={style.about}>{t("security.cookiePolicy.text26")}</p>
    </main>
  );
}

export default CookiePolicy;
