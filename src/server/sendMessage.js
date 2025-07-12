export const sendMessage = async (data) => {
  const TELEGRAM_API = "set here your api";
  const CHAT_ID = "set here chat id";

  const message = `
  Buyer info: 
      name: ${data.name}
      lastname: ${data.lastname}
      email: ${data.email}
      country: ${data.country}
      city: ${data.city}
      addreas: ${data.addreas}
      postalCode: ${data.postalCode}
      phoneNumber: ${data.phoneNumber}
      lastNumbersOfCard: ${data.cardNumber.slice(-4)}
    `;

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
