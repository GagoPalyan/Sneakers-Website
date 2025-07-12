import style from "./LangButton.module.css";
import React from "react";
import { useTranslation } from "react-i18next";

function LangButton({ language, setlanguage, showLangScreen }) {
  const { t, i18n } = useTranslation();

  const changeLanguages = (lang) => {
    setlanguage(lang);
    i18n.changeLanguage(lang);
    showLangScreen(false);
  };
  return (
    <button
      onClick={() => {
        changeLanguages(language.value);
      }}
      className={style.button}
    >
      {language.flag}
      {language.name}
    </button>
  );
}

export default LangButton;
