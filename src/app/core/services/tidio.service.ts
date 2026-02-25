import { Injectable } from '@angular/core';

// Declarar tipos para Tidio
declare let tidioChatApi: any;
declare global {
    interface Window {
        tidioChatApi?: any;
    }
}

@Injectable({
    providedIn: 'root'
})
export class TidioService {
    private initialized = false;

    /**
     * Inicializa Tidio Chat Widget
     * @param projectId - El ID del proyecto de Tidio
     */
    initialize(projectId: string): void {
        if (!projectId) {
            console.warn('⚠️ Tidio no configurado. Agrega tu Project ID en environment.ts');
            return;
        }

        if (this.initialized) {
            return;
        }

        this.loadTidioScript(projectId);
        this.initialized = true;
        console.log('✅ Tidio inicializado:', projectId);
    }

    /**
     * Carga el script de Tidio dinámicamente
     */
    private loadTidioScript(projectId: string): void {
        const script = document.createElement('script');
        script.src = `https://code.tidio.co/${projectId}.js`;
        script.async = true;
        document.head.appendChild(script);
    }

    /**
     * Abre el chat de Tidio
     */
    openChat(): void {
        if (window.tidioChatApi) {
            window.tidioChatApi.open();
        }
    }

    /**
     * Cierra el chat de Tidio
     */
    closeChat(): void {
        if (window.tidioChatApi) {
            window.tidioChatApi.close();
        }
    }

    /**
     * Muestra una notificación en Tidio
     * @param message - El mensaje a mostrar
     */
    showNotification(message: string): void {
        if (window.tidioChatApi) {
            window.tidioChatApi.shoNotification(message);
        }
    }

    /**
     * Establece variables personalizadas en Tidio
     * @param variables - Objeto con las variables personalizadas
     */
    setCustomVariables(variables: { [key: string]: any }): void {
        if (window.tidioChatApi) {
            window.tidioChatApi.setCustomVariables(variables);
        }
    }

    /**
     * Identifica al visitante
     * @param visitorId - ID único del visitante
     */
    setVisitorId(visitorId: string): void {
        if (window.tidioChatApi) {
            window.tidioChatApi.setVisitorId(visitorId);
        }
    }

    /**
     * Establece el nombre del visitante
     * @param name - Nombre del visitante
     * @param email - Email del visitante (opcional)
     */
    setVisitorInfo(name: string, email?: string): void {
        if (window.tidioChatApi) {
            window.tidioChatApi.setVisitorName(name);
            if (email) {
                window.tidioChatApi.setVisitorEmail(email);
            }
        }
    }

    /**
     * Verifica si Tidio está inicializado
     */
    isInitialized(): boolean {
        return this.initialized && !!window.tidioChatApi;
    }
}
