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
      
    return this.app;
  }
}