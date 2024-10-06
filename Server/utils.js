import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

// Create an instance of the ImageKit client
export const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});
