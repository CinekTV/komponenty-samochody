import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { CarServiceService } from './car-service.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    CarServiceService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
