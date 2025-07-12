import { useParams } from "react-router-dom";
import style from "./SneakersPage.module.css";
import { sneakersList } from "../../utils/productList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  addFavorite,
  removeCart,
  removeFavorite,
  selectCart,
  selectFavorite,
  updateCart,
} from "../../features/products/productsSlice";
import { useTranslation } from "react-i18next";
import MiniCart from "./miniCart/MiniCart";
import { reviewList } from "../../utils/review";
import ReviewCard from "../../sharedComponents/reviewCard/ReviewCard";

function SneakersPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);
  const favList = useSelector(selectFavorite);
  const product = sneakersList.find((obj) => obj.id == id);

  const [img, setImg] = useState(product.image[0]);
  useEffect(() => setImg(product.image[0]), [id]);

  const [size, setSize] = useState(39);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    let currentPrd = cartList.find((obj) => obj.id == product.id);
    if (currentPrd) {
      setCurrentProduct(currentPrd);
      setSize(currentPrd.size);
    }
  }, [product, cartList]);

  useEffect(() => {
    if (Object.keys(currentProduct).length > 0) {
      dispatch(updateCart([currentProduct.id, size]));
    }
  }, [size]);

  return (
    <main className={style.main}>
      <section className={style.content}>
        <div className={style.imagesBox}>
          <img className={style.mainImg} src={img} />
          <div className={style.imagesList}>
            {product.image.map((img, index) => (
              <img
                onMouseEnter={() => setImg(img)}
                onClick={() => setImg(img)}
                src={img}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className={style.sneakersInfo}>
          <h2 className={style.name}>{product.name}</h2>
          <p className={style.infoText}>${product.price}</p>
          <p className={style.infoText}>
            {product.category} {product.color}
          </p>
          <p className={style.sizeInfo}> {t("sneakersPage.size")}</p>
          <div className={style.size}>
            <button disabled={size <= 35} onClick={() => setSize(size - 0.5)}>
              -
            </button>
            <p>{size}</p>
            <button disabled={size >= 52.5} onClick={() => setSize(size + 0.5)}>
              +
            </button>
          </div>

          <div className={style.buttons}>
            {cartList.find((item) => product.id == item.id) ? (
              <button
                className={style.add}
                onClick={() => {
                  dispatch(removeCart(product.id));
                }}
              >
                {t("sneakersPage.removeCart")}
              </button>
            ) : (
              <button
                className={style.add}
                onClick={() => {
                  dispatch(addCart({ ...product, size }));
                }}
              >
                {t("sneakersPage.addCart")}
              </button>
            )}
            {favList.find((item) => product.id == item.id) ? (
              <button
                className={style.favorite}
                onClick={() => {
                  dispatch(removeFavorite(product.id));
                }}
              >
                {t("sneakersPage.removeFavorite")}
              </button>
            ) : (
              <button
                className={style.favorite}
                onClick={() => {
                  dispatch(addFavorite(product));
                }}
              >
                {t("sneakersPage.addFavorite")}
              </button>
            )}
          </div>

          <p className={style.infoText}>{t("sneakersPage.colors")}</p>
          <div className={style.colors}>
            {sneakersList
              .filter((item) => item.category == product.category)
              .map((item) => (
                <MiniCart key={item.id} sneakers={item} />
              ))}
          </div>

          <div className={style.about}>
            <details className={style.table}>
              <summary className={style.infoText}>
                {t("sneakersPage.about.title1")}
              </summary>
              <table>
                <thead>
                  <tr>
                    <th>Heel-toe</th>
                    <th>22.1 cm</th>
                    <th>22.5 cm</th>
                    <th>22.9 cm</th>
                    <th>23.3 cm</th>
                    <th>23.8 cm</th>
                    <th>24.2 cm</th>
                    <th>24.6 cm</th>
                    <th>25 cm</th>
                    <th>25.5 cm</th>
                    <th>25.9 cm</th>
                    <th>26.3 cm</th>
                    <th>26.7 cm</th>
                    <th>27.1 cm</th>
                    <th>27.6 cm</th>
                    <th>28 cm</th>
                    <th>28.4 cm</th>
                    <th>28.8 cm</th>
                    <th>29.3 cm</th>
                    <th>29.7 cm</th>
                    <th>30.1 cm</th>
                    <th>30.5 cm</th>
                    <th>31 cm</th>
                    <th>31.4 cm</th>
                    <th>31.8 cm</th>
                    <th>32.6 cm</th>
                    <th>33.5 cm</th>
                    <th>34.3 cm</th>
                    <th>35.2 cm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>US - Men</th>
                    <td>4</td>
                    <td>4.5</td>
                    <td>5</td>
                    <td>5.5</td>
                    <td>6</td>
                    <td>6.5</td>
                    <td>7</td>
                    <td>7.5</td>
                    <td>8</td>
                    <td>8.5</td>
                    <td>9</td>
                    <td>9.5</td>
                    <td>10</td>
                    <td>10.5</td>
                    <td>11</td>
                    <td>11.5</td>
                    <td>12</td>
                    <td>12.5</td>
                    <td>13</td>
                    <td>13.5</td>
                    <td>14</td>
                    <td>14.5</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th>US - Women</th>
                    <td>5</td>
                    <td>5.5</td>
                    <td>6</td>
                    <td>6.5</td>
                    <td>7</td>
                    <td>7.5</td>
                    <td>8</td>
                    <td>8.5</td>
                    <td>9</td>
                    <td>9.5</td>
                    <td>10</td>
                    <td>10.5</td>
                    <td>11</td>
                    <td>11.5</td>
                    <td>12</td>
                    <td>12.5</td>
                    <td>13</td>
                    <td>13.5</td>
                    <td>14</td>
                    <td>14.5</td>
                    <td>15</td>
                    <td>15.5</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <th>EU</th>
                    <td>36</td>
                    <td>36 2/3</td>
                    <td>37 1/3</td>
                    <td>38</td>
                    <td>38 2/3</td>
                    <td>39 1/3</td>
                    <td>40</td>
                    <td>40 2/3</td>
                    <td>41 1/3</td>
                    <td>42</td>
                    <td>42 2/3</td>
                    <td>43 1/3</td>
                    <td>44</td>
                    <td>44 2/3</td>
                    <td>45 1/3</td>
                    <td>46</td>
                    <td>46 2/3</td>
                    <td>47 1/3</td>
                    <td>48</td>
                    <td>48 2/3</td>
                    <td>49 1/3</td>
                    <td>50</td>
                    <td>50 2/3</td>
                    <td>51 1/3</td>
                    <td>52 2/3</td>
                    <td>53 1/3</td>
                    <td>54 2/3</td>
                    <td>55 2/3</td>
                  </tr>
                  <tr>
                    <th>UK</th>
                    <td>3.5</td>
                    <td>4</td>
                    <td>4.5</td>
                    <td>5</td>
                    <td>5.5</td>
                    <td>6</td>
                    <td>6.5</td>
                    <td>7</td>
                    <td>7.5</td>
                    <td>8</td>
                    <td>8.5</td>
                    <td>9</td>
                    <td>9.5</td>
                    <td>10</td>
                    <td>10.5</td>
                    <td>11</td>
                    <td>11.5</td>
                    <td>12</td>
                    <td>12.5</td>
                    <td>13</td>
                    <td>13.5</td>
                    <td>14</td>
                    <td>14.5</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <th>JP</th>
                    <td>220</td>
                    <td>225</td>
                    <td>230</td>
                    <td>235</td>
                    <td>240</td>
                    <td>245</td>
                    <td>250</td>
                    <td>255</td>
                    <td>260</td>
                    <td>265</td>
                    <td>270</td>
                    <td>275</td>
                    <td>280</td>
                    <td>285</td>
                    <td>290</td>
                    <td>295</td>
                    <td>300</td>
                    <td>305</td>
                    <td>310</td>
                    <td>315</td>
                    <td>320</td>
                    <td>325</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                </tbody>
              </table>
            </details>
            <details>
              <summary className={style.infoText}>
                {t("sneakersPage.about.title2")}
              </summary>
              {reviewList
                .find((item) => item.id == id)
                .comments.map((item) => (
                  <ReviewCard key={item.id} obj={item} />
                ))}
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SneakersPage;
