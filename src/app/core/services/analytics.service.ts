import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Declaración de gtag para TypeScript
declare let gtag: Function;

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    private router = inject(Router);
    private initialized = false;

    /**
     * Inicializa Google Analytics y configura el tracking de navegación
     */
    initialize(measurementId: string): void {
        if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
            console.warn('⚠️ Google Analytics no configurado. Agrega tu Measurement ID en environment.ts');
            return;
        }

        if (this.initialized) {
            return;
        }

        // Cargar el script de Google Analytics
        this.loadGtagScript(measurementId);

        // Configurar tracking de navegación
        this.trackPageViews();

        this.initialized = true;
        console.log('✅ Google Analytics inicializado:', measurementId);
    }

    /**
     * Carga el script de gtag.js dinámicamente
     */
    private loadGtagScript(measurementId: string): void {
        // Script de gtag.js
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(gtagScript);

        // Inicialización de gtag
        const script = document.createElement('script');
        script.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
                'send_page_view': false, // Manejamos page views manualmente
                'anonymize_ip': true
            });
        `;
        document.head.appendChild(script);
    }

    /**
     * Configura el tracking automático de cambios de página
     */
    private trackPageViews(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                this.trackPageView(event.urlAfterRedirects);
            });
    }

    /**
     * Envía un evento de page view a Google Analytics
     */
    trackPageView(url: string): void {
        if (!this.initialized || typeof gtag === 'undefined') {
            return;
        }

        gtag('event', 'page_view', {
            page_path: url
        });
    }

    /**
     * Envía un evento personalizado a Google Analytics
     * 
     * @example
     * analyticsService.trackEvent('purchase', { 
     *   transaction_id: '12345',
     *   value: 299.99,
     *   currency: 'USD'
     * });
     */
    trackEvent(eventName: string, eventParams: any = {}): void {
        if (!this.initialized || typeof gtag === 'undefined') {
            return;
        }

        gtag('event', eventName, eventParams);
    }

    /**
     * Tracking de productos vistos
     */
    trackProductView(productId: string, productName: string, category: string, price: number): void {
        this.trackEvent('view_item', {
            items: [{
                item_id: productId,
                item_name: productName,
                item_category: category,
                price: price
            }]
        });
    }

    /**
     * Tracking de productos agregados al carrito
     */
    trackAddToCart(productId: string, productName: string, price: number, quantity: number): void {
        this.trackEvent('add_to_cart', {
            currency: 'USD',
            value: price * quantity,
            items: [{
                item_id: productId,
                item_name: productName,
                price: price,
                quantity: quantity
            }]
        });
    }

    /**
     * Tracking de inicio de checkout
     */
    trackBeginCheckout(value: number, items: any[]): void {
        this.trackEvent('begin_checkout', {
            currency: 'USD',
            value: value,
            items: items
        });
    }

    /**
     * Tracking de compras completadas
     */
    trackPurchase(transactionId: string, value: number, items: any[]): void {
        this.trackEvent('purchase', {
            transaction_id: transactionId,
            currency: 'USD',
            value: value,
            items: items
        });
    }

    /**
     * Tracking de búsquedas
     */
    trackSearch(searchTerm: string): void {
        this.trackEvent('search', {
            search_term: searchTerm
        });
    }
}
