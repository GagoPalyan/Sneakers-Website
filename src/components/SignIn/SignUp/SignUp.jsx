import { useTranslation } from "react-i18next";
import style from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import { nameValidation, passwordValidation } from "../../../utils/validation";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../sharedComponents/customButton/CustomButton";
import { createUser } from "../../../utils/account";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../features/profile/profileSlice";
import { PRIVACY_POLICY, TERMS_OF_USE } from "../../../utils/paths";

function SignUp({ email }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const accept = (data) => {
    const user = createUser({ ...data, email });
    user && dispatch(setProfile(user));
  };

  return (
    <form className={style.signUpBox} onSubmit={handleSubmit(accept)}>
      <p className={style.description}>{t("signIn.signUp.description")}</p>
      <div className={style.inputBox}>
        <input
          style={errors.name?.message && { borderColor: "red" }}
          className={style.input}
          placeholder={t("signIn.signUp.namePlaceholder")}
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
          placeholder={t("signIn.signUp.lastnamePlaceholder")}
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
      <div className={style.inputBox}>
        <input
          style={errors.password?.message && { borderColor: "red" }}
          className={style.input}
          placeholder={t("signIn.signUp.passwordPlaceholder")}
          type="password"
          {...register("password", passwordValidation)}
        />
        <svg
          className={style.error}
          style={errors.password?.message && { display: "block" }}
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
      <label className={style.checkBox}>
        <input
          type="checkbox"
          className={style.rememberMeButton}
          {...register("checkbox1", {
            required: "I'm 16+ years old. ",
          })}
        />
        <p
          className={style.about}
          style={errors.checkbox1?.message && { color: "red" }}
        >
          {t("signIn.signUp.checkBox1")}
        </p>
      </label>
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
            {t("signIn.signUp.checkBox2.link1")}
          </NavLink>{" "}
          {t("signIn.signUp.checkBox2.byContinue2")}{" "}
          <NavLink to={TERMS_OF_USE}>
            {t("signIn.signUp.checkBox2.link2")}
          </NavLink>
        </p>
      </label>
      <CustomButton text={t("signIn.signUp.button")} />
    </form>
  );
}

export default SignUp;
