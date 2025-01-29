import express from "express";
import {
  login,
  logout,
  signup,
  passwordreset,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

router.post("/password-reset", passwordreset);

export default router;
