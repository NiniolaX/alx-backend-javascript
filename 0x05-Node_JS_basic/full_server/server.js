import express from 'express';
import routes from './routes/index';

const app = express();
const port = 1245;

// Use routes defined in index.js
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
