import style from "./ReviewCard.module.css";

function ReviewCard({ obj }) {
  return (
    <div className={style.content}>
      <p className={style.name}>
        {obj.name} {obj.lastName}
      </p>
      <p className={style.infoText}>{obj.stars}★</p>
      <p className={style.comment}>{obj.comment}</p>
      <p className={style.infoText}>{obj.data}</p>
    </div>
  );
}

export default ReviewCard;
