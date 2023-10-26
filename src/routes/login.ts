import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByUsername } from "../db/Users";

const router = express.Router();

router.post("/login", (req, res) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  console.log("running login 123", secretKey);
  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (!user) {
    return res.status(401).json({ message: "Authentication failed 1" });
  }
  if (secretKey) {
    if (password === user.password) {
      const token = jwt.sign({ username: user.username }, secretKey, {
        expiresIn: "1h",
      });
      return res.status(200).json({ token });
    }
  }

  return res.status(401).json({ message: "Authentication failed 2" });
});

export default router;
