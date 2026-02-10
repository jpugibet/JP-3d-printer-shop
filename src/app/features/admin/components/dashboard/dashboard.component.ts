import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h1 class="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
        <h3 class="text-gray-500 text-sm font-uppercase">Total Sales</h3>
        <p class="text-3xl font-bold text-gray-800">\${{ 25430 | number }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
        <h3 class="text-gray-500 text-sm font-uppercase">Orders</h3>
        <p class="text-3xl font-bold text-gray-800">45</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
        <h3 class="text-gray-500 text-sm font-uppercase">Products</h3>
        <p class="text-3xl font-bold text-gray-800">120</p>
      </div>
       <div class="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
        <h3 class="text-gray-500 text-sm font-uppercase">Users</h3>
        <p class="text-3xl font-bold text-gray-800">340</p>
      </div>
    </div>

    <!-- Graphical representation placeholder -->
    <div class="bg-white p-6 rounded-lg shadow h-96 flex items-center justify-center text-gray-400">
        [Sales Chart Visualization Placeholder]
    </div>
  `
})
export class DashboardComponent { }
