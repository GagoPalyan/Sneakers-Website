import { useTranslation } from "react-i18next";
import Button from "../../sharedComponents/button/Button";
import { HOME_PAGE } from "../../utils/paths";
import style from "./404NotFound.module.css";

function NotFound() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <p className={style.title}>{t("404.text")}</p>
      <Button path={HOME_PAGE} text={t("404.button")} />
    </main>
  );
}

export default NotFound;
