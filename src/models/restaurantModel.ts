import { IRestaurantInfo } from "../@types";
import connection from "../database";
import RestaurantSql from "../queries/restaurant";

const createRestaurant = async ({ name, openingHours, imageBlob }: IRestaurantInfo) => {
  const sql = RestaurantSql.createRestaurantSql;

  await connection.execute(sql, [name, openingHours, imageBlob]);
}

export default {
  createRestaurant
}