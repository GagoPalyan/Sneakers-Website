import { useTranslation } from "react-i18next";
import style from "./LogIn.module.css";
import { useForm } from "react-hook-form";
import { passwordValidation } from "../../../utils/validation";
import CustomButton from "../../../sharedComponents/customButton/CustomButton";
import { login } from "../../../utils/account";
import { useDispatch } from "react-redux";
import { setProfile } from "../../../features/profile/profileSlice";
import { useState } from "react";
import { HOME_PAGE } from "../../../utils/paths";

function LogIn({ account }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const [error, setError] = useState(false);

  const accept = (data) => {
    login(data.password, account);
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setProfile(user));
      setError(false);
      window.location = HOME_PAGE;
    } else {
      setError(true);
    }
  };

  return (
    <form className={style.logInBox} onSubmit={handleSubmit(accept)}>
      <p className={style.description}>{t("signIn.logIn.description")}</p>
      <p className={style.email}>{account.email}</p>
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
        <p
          style={error ? { display: "block" } : { display: "none" }}
          className={style.textError}
        >
          {t("signIn.logIn.tryAgain")}
        </p>
      </div>
      <CustomButton text={t("signIn.logIn.button")} />
    </form>
  );
}

export default LogIn;
