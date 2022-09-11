import { NextFunction, Request, Response } from 'express';
import restaurantService from '../service/restaurantService';

const createRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, openingHours } = req.query;
    const { file } = req;

    await restaurantService.createRestaurant({ 
      name: String(name),
      openingHours: String(openingHours),
      imageName: file?.filename
    });

    return res.status(201).json({ message: 'restaurant Created' });
  } catch (error) {
    next(error);
  }
};

const getAllRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allRestaurant = await restaurantService.getAllRestaurant();
    return res.status(200).json(allRestaurant);
  } catch (error) {
    next(error);
  }
}

export default {
  createRestaurant,
  getAllRestaurant,
};
