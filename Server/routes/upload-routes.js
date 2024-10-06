import express from "express";
import {
  ImageKitAuthenticator,
  UploadFileHandler,
} from "../controllers/Upload-Controller.js";

const router = express.Router();

router.get("/auth", ImageKitAuthenticator);

router.post("/", UploadFileHandler);

export default router;
