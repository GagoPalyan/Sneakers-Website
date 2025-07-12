import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import style from "./HomeContent1.module.css";
import carouselItemList from "../../../utils/carouselItemList";
import Button from "../../../sharedComponents/button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/profile/profileSlice";

function HomeContent1() {
  const { t } = useTranslation();
  const user = useSelector(selectUser);

  return (
    <section className={style.section}>
      <Carousel controls={false}>
        {carouselItemList.map((item) => {
          return user && item.id == 1 ? null : (
            <Carousel.Item key={item.id}>
              <img
                loading="lazy"
                className="d-block w-100 h-100"
                src={item.img}
                alt={t(item.title)}
              />
              <Carousel.Caption>
                <div className={style.textBox}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                  {item.button && (
                    <Button path={item.path} text={t(item.button)} />
                  )}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default HomeContent1;
