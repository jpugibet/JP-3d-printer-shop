import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-filter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 class="font-semibold text-lg mb-4">Filters</h3>
      
      <!-- Categories -->
      <div class="mb-6">
        <h4 class="text-sm font-medium text-gray-700 mb-2">Technology</h4>
        <div class="space-y-2">
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="rounded text-blue-600 focus:ring-blue-500">
            <span class="text-sm text-gray-600">FDM</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="checkbox" class="rounded text-blue-600 focus:ring-blue-500">
            <span class="text-sm text-gray-600">SLA</span>
          </label>
           <label class="flex items-center space-x-2">
            <input type="checkbox" class="rounded text-blue-600 focus:ring-blue-500">
            <span class="text-sm text-gray-600">SLS</span>
          </label>
        </div>
      </div>

      <!-- Price Range -->
      <div class="mb-6">
        <h4 class="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
        <div class="flex items-center space-x-2">
          <input type="number" placeholder="Min" class="w-20 p-2 border rounded text-sm">
          <span>-</span>
          <input type="number" placeholder="Max" class="w-20 p-2 border rounded text-sm">
        </div>
      </div>

       <button class="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors text-sm">
        Apply Filters
      </button>
    </div>
  `
})
export class ProductFilterComponent { }
