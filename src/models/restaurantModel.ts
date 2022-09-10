import { IRestaurantInfo } from "../@types";
import connection from "../database";
import createRestaurantSql from "../queries/restaurant/createRestaurantSql";

const createRestaurant = async ({ name, openingHours, imageBlob }: IRestaurantInfo) => {
  const sql = createRestaurantSql;

  await connection.execute(sql, [name, openingHours, imageBlob]);
}

export default {
  createRestaurant
}