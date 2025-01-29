import connect from "./models/index.js";
import express from "express";
import authRouter from "./routes/Auth.js";

const app = express();
app.use(express.json()); // apllication/json 으로 파싱

const port = 5000;

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`${port} port is running...`);
});

connect();
