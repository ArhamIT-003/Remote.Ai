import { imagekit } from "../utils.js";

export const ImageKitAuthenticator = async (req, res) => {
  let result = imagekit.getAuthenticationParameters();
  res.send(result);
};

export const UploadFileHandler = async (req, res) => {};
