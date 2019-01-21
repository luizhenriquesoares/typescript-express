import * as express from 'express';

express.application.group = express.Router.group = function(arg1, arg2) {
    let fn, path;
    if (arg2 === undefined) {
        path = '/';
        fn = arg1;
    } else {
        path = arg1;
        fn = arg2;
    }
    const router = express.Router();
    fn(router);
    this.use(path, router);
    return router;
};