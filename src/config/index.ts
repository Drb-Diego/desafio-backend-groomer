import express from 'express';
import errorMIddleware from '../controllers/errorMIddleware';
import routes from '../routes';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(errorMIddleware);

export default app;
