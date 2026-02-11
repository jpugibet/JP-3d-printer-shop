import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">{{ 'CHECKOUT.TITLE' | translate }}</h1>
      
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Checkout Form -->
        <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow">
          <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
            <h2 class="text-xl font-semibold mb-4">{{ 'CHECKOUT.SHIPPING_INFO' | translate }}</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-gray-700 mb-2">{{ 'CHECKOUT.FULL_NAME' | translate }} (First)</label>
                <input formControlName="firstName" type="text" class="w-full border rounded p-2">
              </div>
              <div>
                <label class="block text-gray-700 mb-2">{{ 'CHECKOUT.FULL_NAME' | translate }} (Last)</label>
                <input formControlName="lastName" type="text" class="w-full border rounded p-2">
              </div>
            </div>

            <div class="mb-4">
               <label class="block text-gray-700 mb-2">{{ 'CHECKOUT.ADDRESS' | translate }}</label>
               <input formControlName="address" type="text" class="w-full border rounded p-2">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
               <div>
                  <label class="block text-gray-700 mb-2">{{ 'CHECKOUT.CITY' | translate }}</label>
                  <input formControlName="city" type="text" class="w-full border rounded p-2">
               </div>
               <div>
                  <label class="block text-gray-700 mb-2">State</label>
                  <input formControlName="state" type="text" class="w-full border rounded p-2">
               </div>
               <div>
                  <label class="block text-gray-700 mb-2">{{ 'CHECKOUT.ZIP_CODE' | translate }}</label>
                  <input formControlName="zip" type="text" class="w-full border rounded p-2">
               </div>
            </div>

            <h2 class="text-xl font-semibold mb-4">Payment</h2>
            <div class="p-4 border rounded bg-gray-50 mb-6">
                Payment integration will be implemented here (Stripe/PayPal).
            </div>

            <button type="submit" [disabled]="checkoutForm.invalid || cartService.cartItems().length === 0" 
                    class="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400">
                {{ 'CHECKOUT.PLACE_ORDER' | translate }}
            </button>
          </form>
        </div>

        <!-- Order Summary -->
        <div class="lg:w-1/3">
           <div class="bg-white rounded-lg shadow p-6">
              <h2 class="text-xl font-bold mb-4">{{ 'CART.SUMMARY' | translate }}</h2>
              @for (item of cartService.cartItems(); track item.product.id) {
                  <div class="flex justify-between mb-2 text-sm">
                      <span>{{ item.product.name }} (x{{ item.quantity }})</span>
                      <span>\${{ item.product.price * item.quantity }}</span>
                  </div>
              }
              <div class="border-t my-4"></div>
              <div class="flex justify-between text-xl font-bold">
                  <span>{{ 'CART.TOTAL' | translate }}</span>
                  <span>\${{ cartService.subtotal() }}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  `
})
export class CheckoutComponent {
  fb = inject(FormBuilder);
  cartService = inject(CartService);
  router = inject(Router);

  checkoutForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required]
  });

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log('Order submitted', this.checkoutForm.value);
      // Here we would call the API to create the order
      this.cartService.clearCart();
      alert('Order placed successfully!');
      this.router.navigate(['/']);
    }
  }
}
