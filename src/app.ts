// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import loginRouter from "./routes/login";
import protectedRouter from "./routes/protected";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000;
const secretKey = "littleSecret";

console.log("secretKey", secretKey);

dotenv.config();

app.use(bodyParser.json());
app.use("/api", loginRouter);
app.use("/api", protectedRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
