import { Link, NavLink } from "react-router-dom";
import style from "./Footer.module.css";
import { PRIVACY_POLICY, TERMS_OF_USE } from "../../utils/paths";
import { useTranslation } from "react-i18next";
import Logo from "../../sharedComponents/logo/Logo";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <nav className={style.security}>
        <NavLink to={PRIVACY_POLICY}>{t("signIn.step1.link1")}</NavLink>{" "}
        <NavLink to={TERMS_OF_USE}>{t("signIn.step1.link2")}</NavLink>
      </nav>
      <Logo />
      <p>{t("footer")}</p>
    </footer>
  );
}

export default Footer;
