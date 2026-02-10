import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">User Profile</h1>
      <div class="bg-white p-6 rounded-lg shadow">
        <p>Profile details will appear here.</p>
        <div class="mt-4">
            <h2 class="text-xl font-semibold mb-2">Order History</h2>
            <p class="text-gray-600">No orders found.</p>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent { }
