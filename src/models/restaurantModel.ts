import { IRestaurantInfo } from "../@types";
import connection from "../database";
import restaurantSql from "../queries/restaurant";

const createRestaurant = async ({ name, openingHours, imageBlob }: IRestaurantInfo) => {
  const sql = restaurantSql.createRestaurantSql;

  await connection.execute(sql, [name, openingHours, imageBlob]);
}

const getAllRestaurant = async () => connection.execute(restaurantSql.getAllRestaurant);

export default {
  createRestaurant,
  getAllRestaurant
}