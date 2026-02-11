import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),
        provideAnimations(),
        {
            provide: TRANSLATE_HTTP_LOADER_CONFIG,
            useValue: {
                prefix: './assets/i18n/',
                suffix: '.json'
            }
        },
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useClass: TranslateHttpLoader
                },
                fallbackLang: 'en'
            })
        )
    ]
};