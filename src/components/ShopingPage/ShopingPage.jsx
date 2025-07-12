import { useEffect, useState } from "react";
import FilterBar from "./FilterBar/FilterBar";
import style from "./ShopingPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  changeSearch,
  selectFilter,
  selectSearch,
} from "../../features/products/productsSlice";
import Cart from "../../sharedComponents/cart/Cart";
import { searchFunc } from "../../utils/search";
import { useTranslation } from "react-i18next";

function ShopingPage({ page, filterList }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const search = useSelector(selectSearch);
  const filter = useSelector(selectFilter);

  const [list, setList] = useState(page);
  const [active, setActive] = useState(0);
  const [filterBar, setFilterBar] = useState(false);
  const [visibleItems, setVisibleItems] = useState(12);

  useEffect(() => {
    setList(page);
    setFilterBar(false);
    dispatch(changeSearch(""));
    setList(searchFunc("", filter, page));
  }, [page]);

  useEffect(() => {
    filter != ""
      ? setList(
          page.filter(
            (obj) => obj.category.toUpperCase() == filter.toUpperCase()
          )
        )
      : setList(page);
    setVisibleItems(12);
  }, [filter]);

  useEffect(() => {
    setActive(0);
    dispatch(changeFilter(""));
    dispatch(changeSearch(""));
  }, [filterList]);

  useEffect(() => {
    setList(searchFunc(search, filter, page));
  }, [search]);

  return (
    <main className={style.main}>
      <section className={style.titleBar}>
        <label className={style.search}>
          <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
            ></path>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => dispatch(changeSearch(e.target.value))}
          />
        </label>
        <button
          onClick={() => setFilterBar(!filterBar)}
          className={style.button}
        >
          {t("sneakersPage.filter")}
          <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M21 8.25H10m-5.25 0H3"
            ></path>
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            ></path>
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M3 15.75h10.75m5 0H21"
            ></path>
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            ></path>
          </svg>
        </button>
      </section>
      <section className={style.content}>
        {filterBar && (
          <FilterBar
            active={active}
            setActive={setActive}
            filterList={filterList}
            setFilterBar={setFilterBar}
          />
        )}
        <section className={style.products}>
          {list.slice(0, visibleItems).map((item) => (
            <Cart key={item.id} item={item} />
          ))}
        </section>
        {visibleItems < list.length && (
          <button
            className={style.more}
            onClick={() => setVisibleItems((prev) => prev + 12)}
          >
            {t("sneakersPage.more")}
          </button>
        )}
      </section>
    </main>
  );
}

export default ShopingPage;
