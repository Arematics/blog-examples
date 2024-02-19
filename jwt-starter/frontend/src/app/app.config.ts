import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideOAuthClient} from "angular-oauth2-oidc";
import {HttpClientModule} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideOAuthClient({
      resourceServer: {
        allowedUrls: ['http://localhost:9001'],
        sendAccessToken: true
      }
    })
  ]
};
