import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../../../core/models/models';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="container mx-auto px-4 py-8">
      <a routerLink="/catalog" class="text-blue-600 hover:text-blue-800 mb-4 inline-block">&larr; Back to Catalog</a>

      @if (product()) {
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="md:flex">
            <!-- Image Gallery -->
            <div class="md:w-1/2 p-8 bg-gray-50">
              <img [src]="product()?.images?.[0]" [alt]="product()?.name" class="w-full h-auto rounded-lg shadow-md mb-4">
              <div class="grid grid-cols-4 gap-2">
                 @for (img of product()?.images; track img) {
                    <img [src]="img" class="w-full h-20 object-cover rounded cursor-pointer border hover:border-blue-500">
                 }
              </div>
            </div>

            <!-- Product Info -->
            <div class="md:w-1/2 p-8">
              <div class="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">{{ product()?.brand }}</div>
              <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ product()?.name }}</h1>
              
              <div class="flex items-center mb-4">
                 <div class="flex text-yellow-400">
                    <!-- Star Rating Placeholder -->
                    ★★★★☆
                 </div>
                 <span class="text-gray-500 text-sm ml-2">({{ product()?.reviewsCount }} reviews)</span>
              </div>

              <p class="text-gray-600 mb-6 leading-relaxed">{{ product()?.description }}</p>

              <div class="border-t border-b border-gray-200 py-4 mb-6">
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div><span class="font-semibold">Technology:</span> {{ product()?.technology }}</div>
                    <div><span class="font-semibold">Volume:</span> {{ product()?.volume }}</div>
                    <div><span class="font-semibold">Resolution:</span> {{ product()?.resolution }}</div>
                    <div><span class="font-semibold">Stock:</span> {{ product()?.stock }} units</div>
                </div>
              </div>

              <div class="flex items-center justify-between mb-8">
                <span class="text-4xl font-bold text-gray-900">\${{ product()?.price }}</span>
              </div>

              <div class="flex space-x-4">
                <button class="flex-1 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add to Cart
                </button>
                <button class="flex-1 bg-white border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      } @else {
        <div class="text-center py-12">
            Loading product details...
        </div>
      }
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private catalogService = inject(CatalogService);

    product = signal<Product | null>(null);

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.catalogService.getProductById(id).subscribe(p => this.product.set(p));
        }
    }
}
