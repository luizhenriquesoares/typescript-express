/* dependencies-------------------------------------------------------------- */
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as chalk from 'chalk';
import * as bluebird from 'bluebird';
import * as bodyParser from 'body-parser';

/* ENV ---------------------------------------------------------------------- */
dotenv.load({ path: '.env' });
const port: string = process.env.PORT;

/* app config --------------------------------------------------------------- */
const app = express();

/* loader controller --------------------------------------------------------- */

import { SimpleInjector } from './Insfrastructure/CrossCutting/DI/SimpleInjector';
import { InversifyExpressServer } from 'inversify-express-utils';

import './Controllers/RestaurantController';

/* bootstrap ---------------------------------------------------------------- */
module.exports = app;

const connect = (): Promise<void> => {
    (mongoose as any).Promise = bluebird;
    return mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, { useNewUrlParser: true }).then(
        () => {console.log('MongoDB Connection UP'); },
      ).catch(err => {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
      });
};

const listen = (connect: any): void => {
    const server = new InversifyExpressServer(SimpleInjector);
    server.setConfig((App) => {
        App.use(bodyParser.urlencoded({ extended: true }));
        App.use(bodyParser.json());
      });
    const runtime: any = server.build();
    runtime.listen(port, () => {
        typeof connect === 'function' ? connect() : null;
        console.log('%s Express server listening on port %d in %s mode.', chalk.default.bgGreen('✓'), port, app.get('env'));
    });
};

listen(connect);
