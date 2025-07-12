import { Link } from "react-router-dom";
import Cart from "../../../sharedComponents/cart/Cart";
import { bestSellers } from "../../../utils/productList";
import style from "./HomeContent4.module.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

function HomeContent4() {
  const { t } = useTranslation();

  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -270 : 270,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={style.content}>
      <p className={style.title}>{t("home.content4.title")}</p>
      <div className={style.buttonBox}>
        <button className={style.scrollButton} onClick={() => scroll("left")}>
          ←
        </button>
        <button className={style.scrollButton} onClick={() => scroll("right")}>
          →
        </button>
      </div>
      <div className={style.bestSellers} ref={scrollContainerRef}>
        {bestSellers.map((item) => (
          <div key={item.id} className={style.cart}>
            <Link to={`/sneakers-page/${item.id}`} key={item.id}>
              <img src={item.image[0]} />
            </Link>
            <div className={style.info}>
              <h3 className={style.categoryPrice}>{item.name}</h3>
              <h2 className={style.price}>${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeContent4;
