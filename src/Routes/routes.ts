import * as express from 'express';
import * as passport from 'passport';

const Router = express.Router();
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
import * as restaurantController from '../Controllers/RestaurantController';
/* -------------------------------------------------------------------------- *\
 *  Exposes routes
\* -------------------------------------------------------------------------- */

module.exports = (app: any) => {
        /* Test  ------------------------------------------------- */
        Router.get('/api/v1/restaurant', restaurantController.ping);

        app.use(Router);
};
