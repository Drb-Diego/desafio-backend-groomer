import { Router } from 'express';
import restaurantController from '../controllers/restaurantController';
import upload from '../config/multerConfig';

const routes = Router();

routes.post(
  '/restaurant/createRestaurant',
  upload.single('image'),
  restaurantController.createRestaurant
);

routes.get(
  '/restaurant/getAllRestaurant',
  restaurantController.getAllRestaurant
);

export default routes;
