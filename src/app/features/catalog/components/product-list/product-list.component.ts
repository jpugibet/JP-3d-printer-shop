import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    @if (catalogService.loading()) {
      <div class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    } @else {
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of catalogService.products(); track product.id) {
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="relative h-48 bg-gray-200">
              <img [src]="product.images[0]" [alt]="product.name" class="w-full h-full object-cover">
              <span class="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                {{ product.technology }}
              </span>
            </div>
            
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-800 mb-2 truncate">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
              
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-gray-900">\${{ product.price }}</span>
                <a [routerLink]="['/catalog', product.id]" 
                   class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                  View Details
                </a>
              </div>
            </div>
          </div>
        } @empty {
          <div class="col-span-full text-center py-12 text-gray-500">
            No products found matching your criteria.
          </div>
        }
      </div>
    }
  `
})
export class ProductListComponent implements OnInit {
    catalogService = inject(CatalogService);

    ngOnInit() {
        this.catalogService.getProducts().subscribe();
    }
}
