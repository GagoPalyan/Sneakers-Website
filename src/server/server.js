const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-message", async (req, res) => {
  const { info } = req.body;

  if (!info) {
    return res.status(400).send("Нет информации для отправки");
  }

  try {
    await sendTelegramMessage(info);
    res.status(200).send("Сообщение отправлено в Telegram");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при отправке сообщения");
  }
});
