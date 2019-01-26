import * as express from 'express';
import * as passport from 'passport';
const Router = express.Router();

// Import router group
import './express-group-router';

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* controllers -------------------------------------------------------------- */
import * as testController from '../controllers/test.controller';
/* -------------------------------------------------------------------------- *\
 *  Exposes routes
\* -------------------------------------------------------------------------- */

module.exports = (app: any, passport: any) => {

    Router.group('/api', (Router: any) => {
        console.log(Router);
        /* Test  ------------------------------------------------- */
        Router.get('/test', testController.ping);
    });
};
