import readFile from "./readFile";
import deleteFile from "./deleteFile";
import { IRestaurantInfo } from "../@types";
import restaurantModel from "../models/restaurantModel";

const createRestaurant = async ({ name, openingHours, imageName }: IRestaurantInfo) => {
  const fileBase64 = readFile(String(imageName));
  await restaurantModel.createRestaurant({ name, openingHours, imageBlob: fileBase64 });
  deleteFile(String(imageName));
}

export default {
  createRestaurant
}