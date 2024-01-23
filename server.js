import 'dotenv/config';
import app from './app.js'
import runDbMigrations from './db/migrations/index.js';
import mountRoutes from './routes/index.js'

async function start() {
  mountRoutes(app)
  await runDbMigrations();
  
  const port = process.env.SERVER_PORT || 5000;
  app.listen(port, () => {
    console.log(`😎😇 Running on port ${port} 😇😎`);
  });
}

start();