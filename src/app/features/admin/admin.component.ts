import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink],
    template: `
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white flex flex-col">
        <div class="p-4 text-xl font-bold bg-gray-900">Admin Panel</div>
        <nav class="flex-1 p-4 space-y-2">
          <a routerLink="dashboard" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Dashboard</a>
          <a routerLink="products" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Products</a>
          <a routerLink="orders" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Orders</a>
          <a routerLink="users" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">Users</a>
        </nav>
        <div class="p-4 border-t border-gray-700">
          <a routerLink="/" class="block py-2 px-4 rounded hover:bg-gray-700 transition-colors text-gray-400 text-sm">Back to Store</a>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto p-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AdminComponent { }
