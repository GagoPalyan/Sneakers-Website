import CloseButton from "../closeButton/CloseButton";
import style from "./Popup.module.css";

function Popup({ showLangScreen, children }) {
  return (
    <section onClick={() => showLangScreen(false)} className={style.background}>
      <div onClick={(e) => e.stopPropagation()} className={style.popup}>
        <div className={style.closeButton}>
          <CloseButton func={showLangScreen} />
        </div>
        {children}
      </div>
    </section>
  );
}

export default Popup;
