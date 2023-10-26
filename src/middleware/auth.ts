import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
// import dotenv from "dotenv";

const authMiddleware: express.RequestHandler = (req, res, next) => {
  // dotenv.config();

  const secretKey = process.env.JWT_SECRET_KEY || "littleSecret";
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  try {
    const decoded: JwtPayload = jwt.verify(token, secretKey) as JwtPayload;
    console.log("decoded: ", decoded.username);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default authMiddleware;
