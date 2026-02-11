import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CatalogService } from '../../services/catalog.service';
import { CartService } from '../../../../core/services/cart.service';
import { ToastService } from '../../../../core/services/toast.service';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';
import { Product } from '../../../../core/models/models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, SkeletonComponent, TranslateModule],
  template: `
    @if (catalogService.loading()) {
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (item of [1,2,3,4,5,6]; track item) {
          <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
            <app-skeleton height="200px" className="w-full"></app-skeleton>
            <div class="p-5">
              <app-skeleton height="24px" width="70%" className="mb-2"></app-skeleton>
              <app-skeleton height="16px" width="100%" className="mb-4"></app-skeleton>
              <div class="flex justify-between items-center mt-4">
                <app-skeleton height="32px" width="80px"></app-skeleton>
                <app-skeleton height="36px" width="100px"></app-skeleton>
              </div>
            </div>
          </div>
        }
      </div>
    } @else {
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        @for (product of catalogService.products(); track product.id) {
          <div class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col h-full">
            <div class="relative h-56 bg-slate-100 overflow-hidden">
               <img [src]="product.images[0]" [alt]="product.name" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    (error)="handleImageError($event)">
               <div class="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-700 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                 {{ product.technology }}
               </div>
               @if (product.stock < 5) {
                 <div class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                   {{ 'CATALOG.LOW_STOCK' | translate }}
                 </div>
               }
            </div>
            
            <div class="p-5 flex flex-col flex-grow">
              <h3 class="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{{ getProductName(product) }}</h3>
              <p class="text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">{{ getProductDescription(product) }}</p>
              
              <div class="flex items-end justify-between mt-auto">
                <div class="flex flex-col">
                  <span class="text-xs text-slate-400 font-medium">{{ 'COMMON.PRICE' | translate }}</span>
                  <span class="text-2xl font-bold text-slate-900">\${{ product.price }}</span>
                </div>
                
                <div class="flex gap-2">
                  <a [routerLink]="['/catalog', product.id]" 
                     class="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors text-sm">
                    {{ 'CATALOG.DETAILS' | translate }}
                  </a>
                  <button (click)="addToCart(product)" 
                          class="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md hover:shadow-lg text-sm flex items-center gap-1">
                    <span>{{ 'COMMON.ADD_TO_CART' | translate }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        } @empty {
          <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-400 bg-white rounded-xl border border-slate-100 border-dashed">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p class="text-lg font-medium">{{ 'CATALOG.NO_PRODUCTS' | translate }}</p>
          </div>
        }
      </div>
    }
  `
})
export class ProductListComponent implements OnInit {
  catalogService = inject(CatalogService);
  cartService = inject(CartService);
  toastService = inject(ToastService);
  translateService = inject(TranslateService);

  ngOnInit() {
    this.catalogService.getProducts().subscribe();
  }

  getProductName(product: Product): string {
    const currentLang = this.translateService.currentLang;
    return currentLang === 'es' && product.nameEs ? product.nameEs : product.name;
  }

  getProductDescription(product: Product): string {
    const currentLang = this.translateService.currentLang;
    return currentLang === 'es' && product.descriptionEs ? product.descriptionEs : product.description;
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
    this.toastService.show(`Added \${product.name} to cart`, 'success');
  }

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x400?text=No+Image';
  }
}
