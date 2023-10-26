import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByUsername } from "../db/Users";
// import dotenv from "dotenv";

const router = express.Router();
// dotenv.config();

const secretKey = "littleSecret";

router.post("/login", (req, res) => {
  console.log("running login");
  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (!user) {
    return res.status(401).json({ message: "Authentication failed 1" });
  }

  if (password === user.password) {
    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Authentication failed 2" });
});

export default router;
