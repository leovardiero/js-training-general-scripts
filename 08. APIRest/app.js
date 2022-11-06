import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoute from './src/routes/UserRoutes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/user', userRoute);
  }
}

export default new App().app;
