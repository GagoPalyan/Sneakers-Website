import { useTranslation } from "react-i18next";
import style from "./DeliveryOptions.module.css";
import { useForm } from "react-hook-form";
import {
  addreasValidation,
  cityValidation,
  countryValidation,
  emailValidation,
  nameValidation,
  phoneNumberValidation,
  postalCodeValidation,
} from "../../../utils/validation";
import CustomButton from "../../../sharedComponents/customButton/CustomButton";
import { NavLink } from "react-router-dom";
import {
  COOKIE_POLICY,
  DELIVERY_POLICY,
  PRIVACY_POLICY,
  RETURN_AND_EXCHANGE_POLICY,
  TERMS_OF_SALE,
  TERMS_OF_USE,
} from "../../../utils/paths";

function DeliveryOptions({ setChapter, setData }) {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const chapter1 = (obj) => {
    setChapter("Payment");
    setData(obj);
  };

  return (
    <form className={style.content} onSubmit={handleSubmit(chapter1)}>
      <div className={style.inputBox}>
        <input
          style={errors.email?.message && { borderColor: "red" }}
          className={style.input}
          placeholder={t("checkoutPage.chapter.deliveryOptions.email")}
          type="text"
          {...register("email", emailValidation)}
        />
        <svg
          className={style.error}
          style={errors.email?.message && { display: "block" }}
          height="20"
          width="20"
          viewBox="0 0 378.303 378.303"
        >
          <polygon
            fill="#FF3501"
            points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
          />
        </svg>
      </div>
      <div className={style.inputRowBox}>
        <div className={style.inputBox}>
          <input
            style={errors.name?.message && { borderColor: "red" }}
            className={style.input}
            placeholder={t("checkoutPage.chapter.deliveryOptions.name")}
            type="text"
            {...register("name", nameValidation)}
          />
          <svg
            className={style.error}
            style={errors.name?.message && { display: "block" }}
            height="20"
            width="20"
            viewBox="0 0 378.303 378.303"
          >
            <polygon
              fill="#FF3501"
              points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
            />
          </svg>
        </div>
        <div className={style.inputBox}>
          <input
            style={errors.lastname?.message && { borderColor: "red" }}
            className={style.input}
            placeholder={t("checkoutPage.chapter.deliveryOptions.lastName")}
            type="text"
            {...register("lastname", nameValidation)}
          />
          <svg
            className={style.error}
            style={errors.lastname?.message && { display: "block" }}
            height="20"
            width="20"
            viewBox="0 0 378.303 378.303"
          >
            <polygon
              fill="#FF3501"
              points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
            />
          </svg>
        </div>
      </div>
      <div className={style.inputBox}>
        <select
          defaultValue=""
          style={errors.country?.message && { borderColor: "red" }}
          {...register("country", countryValidation)}
        >
          <option value="" disabled>
            {t("checkoutPage.chapter.deliveryOptions.country")}
          </option>
          <option value="Spain">Spain</option>
          <option value="German">German</option>
          <option value="Italy">Italy</option>
          <option value="England">England</option>
          <option value="Sweden">Sweden</option>
          <option value="France">France</option>
        </select>
      </div>
      <div className={style.inputRowBox2}>
        <div className={style.inputBox}>
          <input
            style={errors.addreas?.message && { borderColor: "red" }}
            className={style.input}
            placeholder={t("checkoutPage.chapter.deliveryOptions.addreas")}
            type="text"
            {...register("addreas", addreasValidation)}
          />
          <svg
            className={style.error}
            style={errors.addreas?.message && { display: "block" }}
            height="20"
            width="20"
            viewBox="0 0 378.303 378.303"
          >
            <polygon
              fill="#FF3501"
              points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
            />
          </svg>
        </div>
        <div className={style.inputBox}>
          <input
            style={errors.city?.message && { borderColor: "red" }}
            className={style.input}
            placeholder={t("checkoutPage.chapter.deliveryOptions.city")}
            type="text"
            {...register("city", cityValidation)}
          />
          <svg
            className={style.error}
            style={errors.city?.message && { display: "block" }}
            height="20"
            width="20"
            viewBox="0 0 378.303 378.303"
          >
            <polygon
              fill="#FF3501"
              points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
            />
          </svg>
        </div>
        <div className={style.inputBox}>
          <input
            style={errors.postalCode?.message && { borderColor: "red" }}
            className={style.input}
            placeholder={t("checkoutPage.chapter.deliveryOptions.postalCode")}
            type="text"
            {...register("postalCode", postalCodeValidation)}
          />
          <svg
            className={style.error}
            style={errors.postalCode?.message && { display: "block" }}
            height="20"
            width="20"
            viewBox="0 0 378.303 378.303"
          >
            <polygon
              fill="#FF3501"
              points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
            />
          </svg>
        </div>
      </div>
      <div className={style.inputRowBox}>
        <div className={style.inputBox}>
          <input
            style={errors.phoneNumber?.message && { borderColor: "red" }}
            className={style.input}
            placeholder={t("checkoutPage.chapter.deliveryOptions.phoneNumber")}
            type="text"
            {...register("phoneNumber", phoneNumberValidation)}
          />
          <svg
            className={style.error}
            style={errors.phoneNumber?.message && { display: "block" }}
            height="20"
            width="20"
            viewBox="0 0 378.303 378.303"
          >
            <polygon
              fill="#FF3501"
              points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
            />
          </svg>
        </div>
      </div>
      <label className={style.checkBox}>
        <input
          type="checkbox"
          className={style.rememberMeButton}
          {...register("checkbox2", {
            required: "I agree to sneaker's Privacy Policy and Terms of Use.",
          })}
        />
        <p
          className={style.about}
          style={errors.checkbox2?.message && { color: "red" }}
        >
          {t("signIn.signUp.checkBox2.byContinue1")}
          <NavLink to={PRIVACY_POLICY}>
            {t("checkoutPage.chapter.deliveryOptions.link1")}
          </NavLink>{" "}
          <NavLink to={TERMS_OF_USE}>
            {t("checkoutPage.chapter.deliveryOptions.link2")}
          </NavLink>
          {", "}
          <NavLink to={DELIVERY_POLICY}>
            {t("checkoutPage.chapter.deliveryOptions.link5")}
          </NavLink>
          {", "}
          <NavLink to={COOKIE_POLICY}>
            {t("checkoutPage.chapter.deliveryOptions.link3")}
          </NavLink>{" "}
          <NavLink to={RETURN_AND_EXCHANGE_POLICY}>
            {t("checkoutPage.chapter.deliveryOptions.link4")}
          </NavLink>{" "}
          {t("signIn.signUp.checkBox2.byContinue2")}{" "}
          <NavLink to={TERMS_OF_SALE}>
            {t("checkoutPage.chapter.deliveryOptions.link6")}
          </NavLink>{" "}
        </p>
      </label>
      <div className={style.accept}>
        <CustomButton text={t("checkoutPage.chapter.deliveryOptions.button")} />
      </div>
    </form>
  );
}

export default DeliveryOptions;
