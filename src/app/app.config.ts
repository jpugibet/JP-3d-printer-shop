import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, inject, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { AnalyticsService } from './core/services/analytics.service';
import { TidioService } from './core/services/tidio.service';
import { environment } from '../environments/environment';

// Función para inicializar Google Analytics y Google Tag Manager
export function initializeAnalytics(analyticsService: AnalyticsService) {
    return () => {
        // Inicializar Google Analytics
        if (environment.googleAnalyticsId) {
            analyticsService.initialize(environment.googleAnalyticsId);
        }
        
        // Inicializar Google Tag Manager
        if ((environment as any).googleTagManagerId) {
            analyticsService.initializeGTM((environment as any).googleTagManagerId);
        }
    };
}

// Función para inicializar Tidio
export function initializeTidio(tidioService: TidioService) {
    return () => {
        if ((environment as any).tidioProjectId) {
            tidioService.initialize((environment as any).tidioProjectId);
        }
    };
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),
        provideAnimations(),
        {
            provide: APP_INITIALIZER,
            useFactory: initializeAnalytics,
            deps: [AnalyticsService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializeTidio,
            deps: [TidioService],
            multi: true
        },
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