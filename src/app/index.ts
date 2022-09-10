import express from 'express';
import errorMIddleware from '../middlewares/errorMIddleware';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use(errorMIddleware);

export default app;
