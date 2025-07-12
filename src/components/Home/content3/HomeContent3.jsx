import style from "./HomeContent3.module.css";
import photo from "../../../assets/Home/content3.webp";
import { useTranslation } from "react-i18next";
import { MEN_PAGE, WOMEN_PAGE } from "../../../utils/paths";
import { NavLink } from "react-router-dom";

function HomeContent3() {
  const { t } = useTranslation();

  return (
    <section className={style.content}>
      <div className={style.textBox}>
        <p className={style.title}>{t("home.content3.text.title1")}</p>
        <p className={style.title}>{t("home.content3.text.title2")}</p>
        <p className={style.title}>{t("home.content3.text.title3")}</p>
        <p className={style.about}>{t("home.content3.text.about")}</p>
        <div className={style.buttons}>
          <NavLink to={MEN_PAGE}>{t("home.content3.men")}</NavLink>
          <NavLink to={WOMEN_PAGE}>{t("home.content3.women")}</NavLink>
        </div>
      </div>
      <img className={style.photo} src={photo} />
    </section>
  );
}

export default HomeContent3;
