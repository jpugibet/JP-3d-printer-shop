import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [CommonModule, ProductListComponent, ProductFilterComponent],
    template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">3D Printers Catalog</h1>
      
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Sidebar Filters -->
        <aside class="w-full md:w-1/4">
          <app-product-filter></app-product-filter>
        </aside>

        <!-- Product Grid -->
        <main class="w-full md:w-3/4">
          <app-product-list></app-product-list>
        </main>
      </div>
    </div>
  `
})
export class CatalogComponent { }
