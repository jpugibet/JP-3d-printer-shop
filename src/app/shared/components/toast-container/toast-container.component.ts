import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <div 
        *ngFor="let toast of toastService.toasts()"
        class="min-w-[300px] p-4 rounded-lg shadow-lg text-white transition-all transform animate-fade-in"
        [ngClass]="{
          'bg-green-500': toast.type === 'success',
          'bg-red-500': toast.type === 'error',
          'bg-blue-500': toast.type === 'info'
        }"
      >
        <div class="flex justify-between items-center">
          <span>{{ toast.message }}</span>
          <button (click)="toastService.remove(toast.id)" class="ml-4 hover:text-gray-200">✕</button>
        </div>
      </div>
    </div>
  `
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
}
