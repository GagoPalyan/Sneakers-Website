import { useTranslation } from "react-i18next";
import style from "./TermsOfUse.module.css";

function TermsOfUse() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <p className={style.title}>{t("security.termsOfUse.title")}</p>
      <p className={style.capture}>{t("security.termsOfUse.subtitle1")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture1")}</p>
      <p className={style.capture}>{t("security.termsOfUse.subtitle2")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture2")}</p>

      <ul>
        <p className={style.about}>{t("security.termsOfUse.list1.title1")}.</p>
        <li>{t("security.termsOfUse.list1.text1")}</li>
        <p className={style.about}>{t("security.termsOfUse.list1.title2")}</p>
        <li>{t("security.termsOfUse.list1.text2")}</li>
        <p className={style.about}>{t("security.termsOfUse.list1.title3")}</p>
        <li>{t("security.termsOfUse.list1.text3")}</li>
      </ul>

      <p className={style.capture}>{t("security.termsOfUse.subtitle3")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture3")}</p>

      <p className={style.text}>{t("security.termsOfUse.capture4")}</p>

      <ul>
        <li>{t("security.termsOfUse.list2.text1")}</li>
        <li>{t("security.termsOfUse.list2.text2")}</li>
      </ul>

      <p className={style.text}>{t("security.termsOfUse.capture5")}</p>

      <p className={style.capture}>{t("security.termsOfUse.subtitle4")}</p>
      <p className={style.about}>{t("security.termsOfUse.about5")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture6")} </p>

      <p className={style.capture}>{t("security.termsOfUse.subtitle5")}</p>
      <p className={style.about}>{t("security.termsOfUse.about5")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture7")}</p>

      <p className={style.about}>{t("security.termsOfUse.about6")}</p>
      <ul>
        <li>{t("security.termsOfUse.list3.text1")}</li>
        <li>{t("security.termsOfUse.list3.text2")}</li>
        <li>{t("security.termsOfUse.list3.text3")}</li>
        <li>{t("security.termsOfUse.list3.text4")}</li>
      </ul>

      <p className={style.capture}>{t("security.termsOfUse.subtitle6")}</p>
      <p className={style.about}>{t("security.termsOfUse.about7")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture8")} </p>
      <p className={style.about}>{t("security.termsOfUse.about8")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture9")}</p>

      <p className={style.about}>{t("security.termsOfUse.about9")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture10")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture11")}</p>

      <p className={style.about}>{t("security.termsOfUse.about10")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture12")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture13")}</p>

      <p className={style.capture}>{t("security.termsOfUse.subtitle7")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture14")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture15")}</p>

      <p className={style.capture}>{t("security.termsOfUse.subtitle8")}</p>
      <p className={style.text}>{t("security.termsOfUse.capture16")}</p>
      <p className={style.text}>
        {t("security.termsOfUse.capture17")}
        <a href="http://ec.europa.eu/odr">ec.europa.eu/odr</a>.
      </p>
    </main>
  );
}

export default TermsOfUse;
