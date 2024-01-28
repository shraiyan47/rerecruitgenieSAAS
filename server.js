import 'dotenv/config';
import app from './app.js'
import runDbMigrations from './db/migrations/index.js';
import mountRoutes from './routes/index.js'

async function start() {
  mountRoutes(app)
  await runDbMigrations();
  
  const port = process.env.SERVER_PORT || 5000;
  app.listen(port, () => {
    console.log(`Running on port ${port} `);
    console.log(`DB INFO => HOST TYPE: ${process.env.DB_HOST_TYPE}, HOST: ${(process.env.DB_HOST_TYPE === 'prod')?process.env.HOST:process.env.DB_LOCALHOST}, DB: ${process.env.DB_DATABASE}`)
  });
}

start();