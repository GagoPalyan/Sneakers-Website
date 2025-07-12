import { NavLink } from "react-router-dom";
import Lang from "../../sharedComponents/lang/Lang";
import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import Logo from "../../sharedComponents/logo/Logo";
import NavBar from "./navBar/NavBar";
import UserTools from "./userTools/UserTools";
import { CONTACT_US_PAGE, SIGNIN_PAGE } from "../../utils/paths";
import Media from "react-media";
import BurgerMenu from "../../sharedComponents/burgerMenu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setProfile } from "../../features/profile/profileSlice";
import { logOut } from "../../utils/account";

function Header() {
  const { t } = useTranslation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logout = () => {
    logOut();
    dispatch(setProfile(null));
  };

  const desktop = (
    <header className={style.header}>
      <section className={style.topBar}>
        <Lang />
        <nav className={style.topBarPages}>
          <NavLink to={CONTACT_US_PAGE}>{t("header.topBar.contactUs")}</NavLink>
          {user ? (
            <button onClick={logout}>{t("header.topBar.logOut")}</button>
          ) : (
            <NavLink to={SIGNIN_PAGE}>{t("header.topBar.signIn")}</NavLink>
          )}
        </nav>
      </section>
      <section className={style.navBar}>
        <Logo />
        <NavBar />
        <UserTools />
      </section>
    </header>
  );

  const mobile = (
    <header className={style.mobile}>
      <Logo />
      <div className={style.navBar}>
        <UserTools />
        <BurgerMenu />
      </div>
    </header>
  );

  return (
    <Media query={"(max-width: 768px)"}>
      {(matchers) => (!matchers ? desktop : mobile)}
    </Media>
  );
}

export default Header;
