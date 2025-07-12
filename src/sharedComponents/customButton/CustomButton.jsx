import style from "./CustomButton.module.css";

function CustomButton({ text }) {
  return <button className={style.button}>{text}</button>;
}

export default CustomButton;
