import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((result) => {
      console.log("Mongodb에 연결 완료하였습니다.");
    })
    .catch((err) => {
      console.log("error ", err);
    });
};

export default connect;
