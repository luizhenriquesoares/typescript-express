/* dependencies-------------------------------------------------------------- */
import * as fs from 'fs';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as chalk from 'chalk';
import * as bluebird from 'bluebird';

/* ENV ---------------------------------------------------------------------- */
dotenv.load({ path: '.env' });
const port: string = process.env.PORT;

/* Models init -------------------------------------------------------------- */
const models = path.join(__dirname, 'models');

fs.readdirSync(models)
  .filter(file => file.search(/^[^\.].*\.js$/))
  .forEach(file => require(path.join(models, file)));

/* app config --------------------------------------------------------------- */
const app = express();

/* bootstrap ---------------------------------------------------------------- */
module.exports = app;

const connect = () => {
    (mongoose as any).Promise = bluebird;
    return mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI, {useMongoClient: true}).then(
        () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
      ).catch(err => {
        // tslint:disable-next-line:no-console
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
      });
};

const listen = () => {
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), port, app.get('env'));
    });
};

connect();
listen();
