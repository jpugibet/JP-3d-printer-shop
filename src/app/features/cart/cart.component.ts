import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

      @if (cartService.cartItems().length === 0) {
        <div class="text-center py-12 bg-gray-50 rounded-lg">
          <p class="text-gray-600 mb-4">Your cart is empty.</p>
          <a routerLink="/catalog" class="text-blue-600 hover:text-blue-800 font-semibold">Start Shopping</a>
        </div>
      } @else {
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Cart Items -->
          <div class="lg:w-2/3">
            <div class="bg-white rounded-lg shadow overflow-hidden">
              @for (item of cartService.cartItems(); track item.product.id) {
                <div class="flex items-center p-4 border-b last:border-b-0">
                  <img [src]="item.product.images[0]" [alt]="item.product.name" class="w-20 h-20 object-cover rounded">
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold text-lg">{{ item.product.name }}</h3>
                    <p class="text-gray-500 text-sm">\${{ item.product.price }}</p>
                  </div>
                  <div class="flex items-center space-x-4">
                     <div class="flex items-center border rounded">
                        <button (click)="cartService.updateQuantity(item.product.id, item.quantity - 1)" class="px-3 py-1 hover:bg-gray-100">-</button>
                        <span class="px-3 py-1 border-l border-r">{{ item.quantity }}</span>
                        <button (click)="cartService.updateQuantity(item.product.id, item.quantity + 1)" class="px-3 py-1 hover:bg-gray-100">+</button>
                     </div>
                     <button (click)="cartService.removeFromCart(item.product.id)" class="text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                     </button>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Summary -->
          <div class="lg:w-1/3">
            <div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-xl font-bold mb-4">Order Summary</h2>
              <div class="flex justify-between mb-2">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-semibold">\${{ cartService.subtotal() }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-gray-600">Shipping</span>
                <span class="font-semibold">Calculated at checkout</span>
              </div>
              <div class="border-t my-4"></div>
              <div class="flex justify-between mb-6">
                <span class="text-xl font-bold">Total</span>
                <span class="text-xl font-bold">\${{ cartService.subtotal() }}</span>
              </div>
              <button routerLink="/checkout" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class CartComponent {
    cartService = inject(CartService);
}
