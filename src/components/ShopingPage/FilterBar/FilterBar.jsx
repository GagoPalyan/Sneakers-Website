import { useDispatch } from "react-redux";
import style from "./FilterBar.module.css";
import {
  changeFilter,
  changeSearch,
} from "../../../features/products/productsSlice";
import CloseButton from "../../../sharedComponents/closeButton/CloseButton";
import { useTranslation } from "react-i18next";

function FilterBar({ active, setActive, filterList, setFilterBar }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleFilterChange = (item) => {
    setActive(item);
    dispatch(changeFilter(item.name));
    dispatch(changeSearch(""));
    setFilterBar(false);
  };

  return (
    <div className={style.mainBox}>
      <div className={style.title}>
        <p>{t("sneakersPage.filter")}</p>
        <CloseButton func={setFilterBar} />
      </div>
      <ul className={style.filterBar}>
        <li
          style={{
            backgroundColor: 0 == active ? "black" : null,
            color: 0 == active ? "white" : null,
          }}
          onClick={() => {
            dispatch(changeFilter(""));
            dispatch(changeSearch(""));
            setActive(0);
            setFilterBar(false);
          }}
          className={style.button}
        >
          All
        </li>
        {filterList.map((item) => {
          return (
            <li
              style={{
                backgroundColor: item.id == active.id ? "black" : null,
                color: item.id == active.id ? "white" : null,
              }}
              onClick={() => handleFilterChange(item)}
              key={item.id}
              className={style.button}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterBar;
