import { useTranslation } from "react-i18next";
import style from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <p className={style.title}>{t("security.privacyPolicy.title")}</p>
      <p className={style.about}>{t("security.privacyPolicy.about1")}</p>

      <p className={style.capture}>{t("security.privacyPolicy.capture1")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list1.1")}</li>
        <li>{t("security.privacyPolicy.list1.2")}</li>
        <li>{t("security.privacyPolicy.list1.3")}</li>
      </ul>

      <p className={style.about}> {t("security.privacyPolicy.about2")}</p>
      <p className={style.capture}>{t("security.privacyPolicy.capture2")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list2.1")}</li>
        <li>{t("security.privacyPolicy.list2.2")}</li>
        <li>{t("security.privacyPolicy.list2.3")}</li>
        <li>{t("security.privacyPolicy.list2.4")}</li>
        <li>{t("security.privacyPolicy.list2.5")}</li>
        <li>{t("security.privacyPolicy.list2.6")}</li>
        <li>{t("security.privacyPolicy.list2.7")}</li>
        <li>{t("security.privacyPolicy.list2.8")}</li>
      </ul>

      <p className={style.capture}>{t("security.privacyPolicy.capture3")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list3.1")}</li>
        <li>{t("security.privacyPolicy.list3.2")}</li>
        <li>{t("security.privacyPolicy.list3.3")}</li>
        <li>{t("security.privacyPolicy.list3.4")}</li>
      </ul>

      <p className={style.capture}>{t("security.privacyPolicy.capture4")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list4.1")}</li>
        <li>{t("security.privacyPolicy.list4.2")}</li>
        <li>{t("security.privacyPolicy.list4.3")}</li>
      </ul>

      <p className={style.capture}>{t("security.privacyPolicy.capture5")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list5.1")}</li>
        <li>{t("security.privacyPolicy.list5.2")}</li>
      </ul>

      <p className={style.capture}>{t("security.privacyPolicy.capture6")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list6.1")}</li>
        <li>{t("security.privacyPolicy.list6.2")}</li>
        <li>{t("security.privacyPolicy.list6.3")}</li>
      </ul>

      <p className={style.capture}>{t("security.privacyPolicy.capture7")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list7.1")}</li>
        <li>{t("security.privacyPolicy.list7.2")}</li>
        <li>{t("security.privacyPolicy.list7.3")}</li>
        <li>{t("security.privacyPolicy.list7.4")}</li>
        <li>{t("security.privacyPolicy.list7.5")}</li>
        <li>{t("security.privacyPolicy.list7.6")}</li>
        <li>{t("security.privacyPolicy.list7.7")}</li>
      </ul>

      <p className={style.capture}>{t("security.privacyPolicy.capture8")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list8.1")}</li>
        <li>{t("security.privacyPolicy.list8.2")}</li>
      </ul>

      <p className={style.capture}>{t("security.privacyPolicy.capture9")}</p>
      <ul>
        <li>{t("security.privacyPolicy.list9.1")}</li>
        <li>{t("security.privacyPolicy.list9.2")}</li>
      </ul>
    </main>
  );
}

export default PrivacyPolicy;
