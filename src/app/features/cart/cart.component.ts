import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../core/services/cart.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <div class="container mx-auto px-4 py-8 animate-fade-in">
      <h1 class="text-3xl font-bold mb-8 text-slate-900 border-b pb-4">{{ 'CART.TITLE' | translate }}</h1>

      @if (cartService.cartItems().length === 0) {
        <div class="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
          <div class="bg-slate-50 p-6 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p class="text-xl font-medium text-slate-700 mb-2">{{ 'CART.EMPTY' | translate }}</p>
          <a routerLink="/catalog" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">{{ 'CART.CONTINUE_SHOPPING' | translate }}</a>
        </div>
      } @else {
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Cart Items -->
          <div class="lg:w-2/3">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div class="p-6 border-b border-slate-100 bg-slate-50/50">
                <h2 class="font-semibold text-slate-700">Items ({{ cartService.cartItems().length }})</h2>
              </div>
              <ul class="divide-y divide-slate-100">
                @for (item of cartService.cartItems(); track item.product.id) {
                  <li class="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-slate-50/50 transition-colors">
                    <img [src]="item.product.images[0]" [alt]="item.product.name" class="w-24 h-24 object-cover rounded-xl border border-slate-200">
                    
                    <div class="flex-1 text-center sm:text-left">
                      <h3 class="font-bold text-lg text-slate-900 mb-1">{{ item.product.name }}</h3>
                      <p class="text-slate-500 text-sm mb-2">{{ item.product.technology }} • {{ item.product.brand || 'Generic' }}</p>
                      <div class="font-bold text-slate-900">\${{ item.product.price }}</div>
                    </div>
                    
                    <div class="flex items-center gap-6">
                       <div class="flex items-center border border-slate-200 rounded-lg bg-white shadow-sm">
                          <button (click)="updateQuantity(item.product.id, item.quantity - 1)" 
                                  class="px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors rounded-l-lg"
                                  [disabled]="item.quantity <= 1">
                            -
                          </button>
                          <span class="px-3 py-2 font-medium text-slate-700 min-w-[2.5rem] text-center border-l border-r border-slate-100">{{ item.quantity }}</span>
                          <button (click)="updateQuantity(item.product.id, item.quantity + 1)" 
                                  class="px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors rounded-r-lg">
                            +
                          </button>
                       </div>
                       
                       <button (click)="removeFromCart(item.product.id)" 
                               class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                               title="Remove item">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                       </button>
                    </div>
                  </li>
                }
              </ul>
            </div>
          </div>

          <!-- Summary -->
          <div class="lg:w-1/3">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sticky top-24">
              <h2 class="text-xl font-bold mb-6 text-slate-900">{{ 'CART.SUMMARY' | translate }}</h2>
              
              <div class="space-y-4 mb-6">
                <div class="flex justify-between text-slate-600">
                  <span>{{ 'CART.SUBTOTAL' | translate }}</span>
                  <span class="font-medium text-slate-900">\${{ cartService.subtotal() }}</span>
                </div>
                <div class="flex justify-between text-slate-600">
                  <span>{{ 'CART.SHIPPING' | translate }}</span>
                  <span class="font-medium text-slate-900">\${{ cartService.subtotal() > 1000 ? ('CART.FREE' | translate) : '50.00' }}</span>
                </div>
                <div class="flex justify-between text-slate-600">
                  <span>{{ 'CART.TAX' | translate }} (8%)</span>
                  <span class="font-medium text-slate-900">\${{ (cartService.subtotal() * 0.08).toFixed(2) }}</span>
                </div>
              </div>
              
              <div class="border-t border-slate-100 pt-6 mb-8">
                <div class="flex justify-between items-end">
                  <span class="text-lg font-bold text-slate-800">{{ 'CART.TOTAL' | translate }}</span>
                  <span class="text-3xl font-bold text-slate-900">\${{ (cartService.subtotal() * 1.08 + (cartService.subtotal() > 1000 ? 0 : 50)).toFixed(2) }}</span>
                </div>
              </div>
              
              <button routerLink="/checkout" class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 active:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
                {{ 'CART.CHECKOUT' | translate }}
              </button>
              
              <div class="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Checkout via Stripe
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class CartComponent {
  cartService = inject(CartService);
  toastService = inject(ToastService);

  updateQuantity(productId: string, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId);
    this.toastService.show('Item removed from cart', 'info');
  }
}
