import { useEffect, useState } from "react";
import style from "./BurgerMenu.module.css";
import CloseButton from "../closeButton/CloseButton";
import Logo from "../logo/Logo";
import routes from "../../utils/routes";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import languageList from "../../utils/LanguageList";
import LangButton from "../langButton/LangButton";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setProfile } from "../../features/profile/profileSlice";
import {
  CONTACT_US_PAGE,
  PRIVACY_POLICY,
  SIGNIN_PAGE,
  TERMS_OF_USE,
} from "../../utils/paths";
import { logOut } from "../../utils/account";

function BurgerMenu() {
  const { t } = useTranslation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [langScreen, showLangScreen] = useState(false);
  const [language, setlanguage] = useState("en");

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") != "en-US") {
      setlanguage(localStorage.getItem("i18nextLng"));
    }
  }, []);

  const logout = () => {
    logOut();
    dispatch(setProfile(null));
  };

  return (
    <>
      <button className={style.burgerMenu} onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none">
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M21 5.25H3M21 12H3m18 6.75H3"
          ></path>
        </svg>
      </button>
      {open && (
        <section onClick={() => setOpen(false)} className={style.background}>
          <div onClick={(e) => e.stopPropagation()} className={style.menu}>
            <div className={style.head}>
              <Logo />
              <CloseButton func={setOpen} />
            </div>
            <div className={style.body}>
              <div className={style.shopPages}>
                {routes.shopPages.map((page) => (
                  <NavLink
                    className={style.link}
                    to={page.path}
                    key={page.id}
                    onClick={() => setOpen(false)}
                  >
                    {t(page.name)}
                  </NavLink>
                ))}
              </div>
              <div className={style.profile}>
                {user ? (
                  <>
                    <p>
                      {user.name} {user.lastname}
                    </p>
                    <p>{user.email}</p>
                    <button onClick={logout}>
                      {t("header.topBar.logOut")}
                    </button>
                  </>
                ) : (
                  <NavLink to={SIGNIN_PAGE} onClick={() => setOpen(false)}>
                    {t("header.topBar.signIn")}
                  </NavLink>
                )}
              </div>
              <div className={style.pages}>
                <NavLink to={CONTACT_US_PAGE} onClick={() => setOpen(false)}>
                  {t("contactUsPage.title")}
                </NavLink>
                <NavLink to={TERMS_OF_USE} onClick={() => setOpen(false)}>
                  {t("signIn.step1.link1")}
                </NavLink>
                <NavLink to={PRIVACY_POLICY} onClick={() => setOpen(false)}>
                  {t("signIn.step1.link2")}
                </NavLink>
              </div>
            </div>
            <div className={style.languages}>
              {languageList.map((lang) => (
                <LangButton
                  key={lang.value}
                  language={lang}
                  setlanguage={setlanguage}
                  showLangScreen={showLangScreen}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default BurgerMenu;
