import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateJWTToken } from "../utils/generateJWTToken.js";
import generateRandomNum from "../utils/generateRandomNum.js";
import { smtpTransport } from "../config/email.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "모든 필드는 작성되어져야 됩니다." });
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ message: "이미 존재하는 유저입니다." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationToken();
    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24시간
    });
    await user.save();
    generateJWTToken(res, user._id);

    res.status(201).json({
      success: true,
      message: "유저가 성공적으로 생성되었습니다",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};

export const passwordreset = async (req, res) => {
  const num = generateRandomNum(111111, 999999);
  const { email } = req.body;
  const mailOptions = {
    from: "plan_admin@naver.com",
    to: email,
    subject: "세우미 인증 관련 메일입니다.",
    html: "<h1>인증번호를 입력해주세요 \n\n\n\n\n\n\n\n\n</h1>" + num,
  };
  smtpTransport.sendMail(mailOptions, (err, response) => {
    console.log("response", response);
    if (err) {
      res.json({ ok: false, msg: "메일전송실패", err });
      smtpTransport.close();
      return;
    } else {
      res.json({ ok: true, msg: "메일전송성공", authNum: num });
      smtpTransport.close();
      return;
    }
  });
};
