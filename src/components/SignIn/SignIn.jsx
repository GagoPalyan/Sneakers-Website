import { useTranslation } from "react-i18next";
import style from "./SignIn.module.css";
import { useForm } from "react-hook-form";
import { emailValidation } from "../../utils/validation";
import { useState } from "react";
import Checkbox from "../../sharedComponents/checkbox/Checkbox";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
import CustomButton from "../../sharedComponents/customButton/CustomButton";
import { HOME_PAGE, PRIVACY_POLICY, TERMS_OF_USE } from "../../utils/paths";
import { emailScan } from "../../utils/account";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/profile/profileSlice";

function SignIn() {
  const user = useSelector(selectUser);
  if (user) {
    window.location = HOME_PAGE;
  }
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const accept = async (data) => {
    const account = await emailScan(data.email);
    account
      ? setPage(<LogIn account={account} />)
      : setPage(<SignUp email={data.email} />);
  };

  const [page, setPage] = useState("");

  return (
    <main className={style.main}>
      {page}

      <form
        style={page ? { display: "none" } : { display: "flex" }}
        className={style.signInBox}
        onSubmit={handleSubmit(accept)}
      >
        <p className={style.description}>{t("signIn.step1.description")}</p>
        <p className={style.about}>{t("signIn.step1.about")}</p>
        <div className={style.emails}>
          <svg viewBox="0 0 512 512" height="25" width="25">
            <g fill="none">
              <path
                d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
                fill="#4285f4"
              />
              <path
                d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z"
                fill="#34a853"
              />
              <path
                d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z"
                fill="#fbbc05"
              />
              <path
                d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
                fill="#ea4335"
              />
              <path d="M20 20h472v472H20V20z" />
            </g>
          </svg>
          <svg width="25" height="25" viewBox="0 0 30 30" fill="none">
            <path
              d="M19.5122 15C19.5122 17.4881 17.4881 19.5122 15 19.5122C12.5119 19.5122 10.4878 17.4881 10.4878 15C10.4878 12.5119 12.5119 10.4878 15 10.4878C17.4881 10.4878 19.5122 12.5119 19.5122 15ZM15 0C6.72938 0 0 6.72938 0 15C0 23.2706 6.72938 30 15 30C18.03 30 20.9522 29.0981 23.4497 27.3909L23.4928 27.3609L21.4716 25.0116L21.4378 25.0341C19.515 26.2706 17.2884 26.925 15 26.925C8.42438 26.925 3.075 21.5756 3.075 15C3.075 8.42438 8.42438 3.075 15 3.075C21.5756 3.075 26.925 8.42438 26.925 15C26.925 15.8522 26.8303 16.7147 26.6438 17.5631C26.2669 19.1109 25.1831 19.5853 24.3694 19.5225C23.5509 19.4559 22.5938 18.8728 22.5872 17.4459V16.3584V15C22.5872 10.8159 19.1841 7.41281 15 7.41281C10.8159 7.41281 7.41281 10.8159 7.41281 15C7.41281 19.1841 10.8159 22.5872 15 22.5872C17.0325 22.5872 18.9384 21.7922 20.3756 20.3475C21.2109 21.6478 22.5731 22.4634 24.1228 22.5872C24.2559 22.5984 24.3919 22.6041 24.5269 22.6041C25.6172 22.6041 26.6991 22.2394 27.5709 21.5766C28.47 20.8941 29.1413 19.9069 29.5125 18.7209C29.5716 18.5297 29.6803 18.0909 29.6813 18.0881L29.6841 18.0722C29.9025 17.1206 30 16.1719 30 15C30 6.72938 23.2706 0 15 0"
              fill="#0077FF"
            />
          </svg>
          <svg height="25" width="25" viewBox="0 0 291.319 291.319">
            <path
              fill="#720E9E"
              d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659   S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"
            />
            <path
              fill="#FFFFFF"
              d="M212.353,114.98l0.155-0.027l4.825-5.371l-0.237-0.018l0.51-0.801h-67.595l2.604,9.249h18.444   l-31.044,28.722c-6.336-9.24-21.184-30.479-31.544-46.411h19.254v-6.555l0.264-1.884l-0.264-0.036v-0.765H54.631v9.24H77.49   c8.876,7.328,47.358,54.049,48.76,58.51c0.564,4.179,1.366,28.841-0.291,30.698c-1.994,2.868-22.814,1.32-26.483,1.593   l-0.137,9.058c6.7,0.2,26.801-0.009,33.584-0.009c13.364,0,36.77-0.346,40.065-0.082l0.41-8.576l-26.901-0.401   c-0.564-3.887-1.183-28.422-0.619-31.098c2.54-7.765,43.816-39.902,48.059-41.112l3.997-0.901h12.472   C210.405,118.002,212.353,114.98,212.353,114.98z M202.266,179.079l11.689,0.892l13.628-49.979   c-2.276-0.082-22.95-1.93-25.636-2.431L202.266,179.079z M200.245,187.091l0.064,12.208l5.917,0.492l6.391,0.446l1.875-11.944   l-6.737-0.31C207.756,187.983,200.245,187.091,200.245,187.091z"
            />
          </svg>
          <svg
            fill="#000000"
            height="25"
            width="25"
            viewBox="0 0 22.773 22.773"
          >
            <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
            <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
          </svg>
        </div>
        <div className={style.inputBox}>
          <input
            style={errors.email?.message && { borderColor: "red" }}
            className={style.input}
            placeholder={t("signIn.step1.placeholder")}
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
        <label className={style.rememberMe}>
          <Checkbox />
          <p>{t("signIn.step1.rememberMe")}</p>
        </label>
        <CustomButton text={t("signIn.step1.button")} />
        <p className={style.about}>
          {t("signIn.step1.byContinue1")}{" "}
          <NavLink to={PRIVACY_POLICY}>{t("signIn.step1.link1")}</NavLink>{" "}
          {t("signIn.step1.byContinue2")}{" "}
          <NavLink to={TERMS_OF_USE}>{t("signIn.step1.link2")}.</NavLink>
        </p>
      </form>
    </main>
  );
}

export default SignIn;
