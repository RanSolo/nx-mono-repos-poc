import * as express from 'express';
const app = express();

require("./app/startup/cors").default(app);
require('./app/startup/db').default();
require('./app/startup/routes').default(app);
require('./app/startup/validation').default();

const router = express.Router();

router.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
export default router
