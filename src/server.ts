import expressConfig from './config';

const { PORT } = process.env;

const app = expressConfig;

app.listen(PORT, () =>
  console.log(`Server up\nLink: http://localhost:${PORT}`)
);
