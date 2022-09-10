import expressConfig from './app';

const { PORT } = process.env;

const app = expressConfig;

app.listen(PORT, () =>
  console.log(`Server up\nLink: http://localhost:${PORT}`)
);
