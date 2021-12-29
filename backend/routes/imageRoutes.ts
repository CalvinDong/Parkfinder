import {CommonRoutesConfig} from '../common/common.routes.config';
import ImageController from '../controllers/imageController';
import express from 'express';

export class ImageRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'QueryRoutes');
    }

    configureRoutes() {
      this.app.route(`/getAbout`)
      .get(ImageController.aboutImage)
      
    return this.app;
  }
}