import express from "express";
import cors from "cors";
import expressws from "express-ws";

const port = 3000;
const { app, getWss } = expressws(express());

app.use(cors());

const chat: { id: string; chat: string }[] = [];

app.get("/chats", (req, res) => {
  res.status(200).json(chat);
});
app.ws("/", (ws) => {
  ws.on("message", (message: string) => {
    chat.push(JSON.parse(message));
    getWss().clients.forEach((client) => {
      client.send(message);
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
