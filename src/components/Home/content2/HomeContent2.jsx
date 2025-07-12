import Button from "../../../sharedComponents/button/Button";
import { ADIDAS_PAGE, NIKE_PAGE } from "../../../utils/paths";
import style from "./HomeContent2.module.css";
import { useTranslation } from "react-i18next";

function HomeContent1() {
  const { t } = useTranslation();

  return (
    <section className={style.section}>
      <h1>{t("home.content2.title")}</h1>
      <section className={style.chouseYourSide}>
        <div className={style.sides}>
          <Button path={ADIDAS_PAGE} text={t("home.content2.button")} />
        </div>
        <div className={style.sides}>
          <Button path={NIKE_PAGE} text={t("home.content2.button")} />
        </div>
      </section>
    </section>
  );
}

export default HomeContent1;
