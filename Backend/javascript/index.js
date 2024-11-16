import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import { ErrorHandler } from "./errors/globalError.js";
import router from "./routes/authRoutes.js";
import config from "./config.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(cors());
app.get("/", (_, res) => {
    res.send({
        health: "Good",
        msg: "welcome to BookIn Ease ",
    });
});
app.use("/api", router);
app.use("/public", express.static("public"));
app.use(ErrorHandler);
const PORT = config.PORT;
mongoose
    .connect(config.DB_URL)
    .then(() => {
    console.log("DataBase connected successfully");
    app.listen(PORT, () => {
        console.log(`Server Listening at the Port ${PORT}`);
    });
})
    .catch((err) => console.log(`Error: ${err}`));
