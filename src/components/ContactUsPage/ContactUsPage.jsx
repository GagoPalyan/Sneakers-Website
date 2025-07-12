import { useTranslation } from "react-i18next";
import style from "./ContactUsPage.module.css";
import { useForm } from "react-hook-form";
import { emailValidation } from "../../utils/validation";
import CustomButton from "../../sharedComponents/customButton/CustomButton";

function ContactUsPage() {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <main className={style.main}>
      <section className={style.content}>
        <p className={style.title}>{t("contactUsPage.title")}</p>
        <div className={style.contactBox}>
          <form className={style.form}>
            <p className={style.boxTitle}>{t("contactUsPage.form.title")}</p>
            <input
              style={errors.email?.message && { borderColor: "red" }}
              className={style.input}
              placeholder={t("signIn.step1.placeholder")}
              type="text"
              {...register("email", emailValidation)}
            />
            <textarea placeholder={t("contactUsPage.form.textarea")}></textarea>
            <CustomButton text={t("contactUsPage.form.button")} />
          </form>
          <div className={style.info}>
            <p className={style.boxTitle}>{t("contactUsPage.info.title")}</p>
            <p className={style.text}>{t("contactUsPage.info.about.line1")}</p>
            <p className={style.text}>{t("contactUsPage.info.about.line2")}</p>
            <p className={style.subTitle}>
              {t("contactUsPage.info.subtitle1")}
            </p>
            <p className={style.text}>{t("contactUsPage.info.text1.line1")}</p>
            <p className={style.text}>{t("contactUsPage.info.text1.line2")}</p>
            <p className={style.text}>{t("contactUsPage.info.text1.line3")}</p>
            <p className={style.subTitle}>
              {t("contactUsPage.info.subtitle2")}
            </p>
            <p className={style.text}>{t("contactUsPage.info.text2.line1")}</p>
            <p className={style.text}>{t("contactUsPage.info.text2.line2")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUsPage;
