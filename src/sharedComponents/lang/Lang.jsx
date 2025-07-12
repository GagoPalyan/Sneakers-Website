import style from "./Lang.module.css";
import Popup from "../popup/Popup";
import languageList from "../../utils/LanguageList";
import LangButton from "../langButton/LangButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Lang() {
  const [langScreen, showLangScreen] = useState(false);
  const [language, setlanguage] = useState("en");

  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("i18nextLng") != "en-US") {
      setlanguage(localStorage.getItem("i18nextLng"));
    }
  }, []);

  const open = () => showLangScreen(true);

  return (
    <>
      {langScreen && (
        <Popup showLangScreen={showLangScreen}>
          <p className={style.title}>{t("languageMenu.title")}</p>
          <div className={style.selectLang}>
            {languageList.map((lang) => (
              <LangButton
                key={lang.value}
                language={lang}
                setlanguage={setlanguage}
                showLangScreen={showLangScreen}
              />
            ))}
          </div>
        </Popup>
      )}
      <button className={style.lang} onClick={open}>
        {languageList.find((lang) => lang.value == language).flag}
      </button>
    </>
  );
}

export default Lang;
