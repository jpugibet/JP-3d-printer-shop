import { Injectable, signal } from '@angular/core';

export interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toasts = signal<Toast[]>([]);
    private idCounter = 0;

    show(message: string, type: 'success' | 'error' | 'info' = 'info') {
        const id = this.idCounter++;
        this.toasts.update(toasts => [...toasts, { id, message, type }]);

        setTimeout(() => {
            this.remove(id);
        }, 3000);
    }

    remove(id: number) {
        this.toasts.update(toasts => toasts.filter(t => t.id !== id));
    }
}
