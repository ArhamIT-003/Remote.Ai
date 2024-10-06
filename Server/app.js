import express from "express";
import dotenv from "dotenv";
import UploadRoute from "./routes/upload-routes.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.UI_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/upload", UploadRoute);

app.listen(PORT, () => {
  console.log(`Port successfully running on ${PORT}`);
});
