import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as errorHandler from 'errorhandler';
import * as path from 'path';

module.exports = (app: any, passport: any) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(errorHandler());
};
