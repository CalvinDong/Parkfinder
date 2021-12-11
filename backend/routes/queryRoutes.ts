import {CommonRoutesConfig} from '../common/common.routes.config';
import QueryController from '../controllers/queryController';
import express from 'express';

export class QueryRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'QueryRoutes');
    }

    configureRoutes() {
      this.app.route(`/queries`)
      .get(QueryController.listAllParks)
      this.app.route(`/testFile`)
      .post(QueryController.testFile)
      this.app.route(`/testFile/:id`)
      .get(QueryController.getFile)
      
    return this.app;
  }
}