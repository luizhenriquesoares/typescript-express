import * as express from 'express';
import * as passport from 'passport';
const Router = express.Router();

// Import router group
import '../utils/express-group-router';

/* controllers -------------------------------------------------------------- */
import * as testController from '../controllers/test.controller';
/* -------------------------------------------------------------------------- *\
 *  Exposes routes
\* -------------------------------------------------------------------------- */

module.exports = function(app: any, passport: any) {

    Router.group('/api', (Router: any) => {
        console.log(Router);
        /* Test  ------------------------------------------------- */
        Router.get('/test', testController.ping);
    });
}
