import { IRestaurantInfo } from "../@types";
import readFile from "./readFile";
import deleteFile from "./deleteFile";

import restaurantModel from "../models/restaurantModel";

const createRestaurant = async ({ name, openingHours, imageName }: IRestaurantInfo) => {
  const fileBase64 = readFile(String(imageName));
  await restaurantModel.createRestaurant({ name, openingHours, imageBlob: fileBase64 });
  deleteFile(String(imageName));
}

const getAllRestaurant = async () => {
  const [allRestaurant] = await restaurantModel.getAllRestaurant();
  return allRestaurant;
}

export default {
  createRestaurant,
  getAllRestaurant
}