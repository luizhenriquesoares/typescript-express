/* dependencies-------------------------------------------------------------- */
import fs from 'fs';
import * as express from 'express';
import * as dotenv from 'dotenv';
import chalk from 'chalk';

/* ENV ---------------------------------------------------------------------- */
dotenv.load({ path: '.env' });
const port: string = process.env.PORT;

/* app config --------------------------------------------------------------- */
const app = express();

/* bootstrap ---------------------------------------------------------------- */
module.exports = app;

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), port, app.get('env'));
});
