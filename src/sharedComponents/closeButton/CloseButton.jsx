import style from "./closeButton.module.css";

function CloseButton({ func }) {
  return (
    <button onClick={() => func(false)} className={style.close}>
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
        <path
          d="M21.4147 20L20.0005 21.4142L30.6069 32.0207L20 42.6276L21.4142 44.0418L32.0211 33.4349L42.6279 44.0416L44.0421 42.6274L33.4353 32.0207L44.0416 21.4144L42.6274 20.0002L32.0211 30.6064L21.4147 20Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export default CloseButton;
