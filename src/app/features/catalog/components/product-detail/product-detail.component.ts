import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../../../core/models/models';
import { CartService } from '../../../../core/services/cart.service';
import { ToastService } from '../../../../core/services/toast.service';
import { AnalyticsService } from '../../../../core/services/analytics.service';
import { SkeletonComponent } from '../../../../shared/components/skeleton/skeleton.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SkeletonComponent, TranslateModule],
  template: `
    <div class="container mx-auto px-4 py-8 animate-fade-in">
      <a routerLink="/catalog" class="text-slate-500 hover:text-blue-600 mb-6 inline-flex items-center transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ 'PRODUCT_DETAIL.BACK_TO_CATALOG' | translate }}
      </a>

      @if (loading()) {
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div class="md:flex">
             <div class="md:w-1/2 p-8 bg-slate-50">
               <app-skeleton height="400px" className="rounded-xl mb-4"></app-skeleton>
               <div class="grid grid-cols-4 gap-2">
                 <app-skeleton height="80px" className="rounded-lg"></app-skeleton>
                 <app-skeleton height="80px" className="rounded-lg"></app-skeleton>
                 <app-skeleton height="80px" className="rounded-lg"></app-skeleton>
                 <app-skeleton height="80px" className="rounded-lg"></app-skeleton>
               </div>
             </div>
             <div class="md:w-1/2 p-8">
               <app-skeleton height="24px" width="100px" className="mb-2"></app-skeleton>
               <app-skeleton height="40px" width="70%" className="mb-4"></app-skeleton>
               <app-skeleton height="20px" width="40%" className="mb-6"></app-skeleton>
               <app-skeleton height="100px" className="mb-6"></app-skeleton>
               <app-skeleton height="60px" className="mb-8"></app-skeleton>
               <div class="flex gap-4">
                 <app-skeleton height="50px" width="50%"></app-skeleton>
                 <app-skeleton height="50px" width="50%"></app-skeleton>
               </div>
             </div>
          </div>
        </div>
      } @else if (product()) {
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div class="md:flex">
            <!-- Image Gallery -->
            <div class="md:w-1/2 p-8 bg-slate-50">
              <div class="relative group">
                <img [src]="selectedImage() || product()?.images?.[0]" [alt]="product()?.name" 
                     class="w-full h-auto rounded-xl shadow-sm mb-4 object-cover border border-slate-200 bg-white transition-transform duration-300"
                     (error)="handleImageError($event)">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-3 py-1 text-xs font-bold text-slate-700 shadow-sm border border-slate-100">
                  {{ product()?.technology }}
                </div>
              </div>
              
              @if (product()?.images && (product()?.images?.length || 0) > 1) {
                <div class="grid grid-cols-4 gap-4 mt-4">
                   @for (img of product()?.images; track img) {
                      <button (click)="selectedImage.set(img)" 
                              class="relative rounded-lg overflow-hidden border-2 transition-all focus:outline-none"
                              [class.border-blue-500]="selectedImage() === img || (!selectedImage() && img === product()?.images?.[0])"
                              [class.border-transparent]="selectedImage() !== img && (selectedImage() || img !== product()?.images?.[0])">
                        <img [src]="img" class="w-full h-20 object-cover hover:opacity-90 transition-opacity" (error)="handleImageError($event)">
                      </button>
                   }
                </div>
              }
            </div>

            <!-- Product Info -->
            <div class="md:w-1/2 p-8 lg:p-12">
              <div class="uppercase tracking-wide text-xs font-bold text-blue-600 mb-2">{{ product()?.brand || 'Generic' }}</div>
              <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{{ getProductName() }}</h1>
              
              <div class="flex items-center mb-6">
                 <div class="flex text-yellow-400 text-lg">
                    ★★★★☆
                 </div>
                 <span class="text-slate-400 text-sm ml-2 font-medium">• {{ product()?.reviewsCount || 0 }} {{ 'PRODUCT_DETAIL.REVIEWS' | translate }}</span>
              </div>

              <p class="text-slate-600 mb-8 leading-relaxed text-lg">{{ getProductDescription() }}</p>

              <div class="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                <h3 class="text-sm font-semibold text-slate-900 uppercase mb-4 tracking-wider">{{ 'PRODUCT_DETAIL.SPECIFICATIONS' | translate }}</h3>
                <div class="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div class="flex flex-col">
                      <span class="text-slate-500 mb-1">{{ 'PRODUCT_DETAIL.TECHNOLOGY' | translate }}</span>
                      <span class="font-medium text-slate-900">{{ product()?.technology }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-slate-500 mb-1">{{ 'PRODUCT_DETAIL.BUILD_VOLUME' | translate }}</span>
                      <span class="font-medium text-slate-900">{{ product()?.volume || 'N/A' }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-slate-500 mb-1">{{ 'PRODUCT_DETAIL.RESOLUTION' | translate }}</span>
                      <span class="font-medium text-slate-900">{{ product()?.resolution || 'N/A' }}</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-slate-500 mb-1">{{ 'PRODUCT_DETAIL.STOCK_STATUS' | translate }}</span>
                      <span class="font-medium" [class.text-green-600]="(product()?.stock || 0) > 0" [class.text-red-600]="(product()?.stock || 0) === 0">
                        {{ (product()?.stock || 0) > 0 ? (product()?.stock + ' units') : ('COMMON.OUT_OF_STOCK' | translate) }}
                      </span>
                    </div>
                </div>
              </div>

              <div class="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                <div class="flex flex-col">
                   <span class="text-sm text-slate-500 font-medium mb-1">{{ 'COMMON.PRICE' | translate }}</span>
                   <span class="text-4xl font-bold text-slate-900">\${{ product()?.price }}</span>
                </div>
              </div>

              <div class="flex gap-4">
                <button (click)="addToCart()"
                        class="flex-1 bg-blue-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-blue-700 active:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5"
                        [disabled]="(product()?.stock || 0) === 0">
                  {{ (product()?.stock || 0) > 0 ? ('COMMON.ADD_TO_CART' | translate) : ('COMMON.OUT_OF_STOCK' | translate) }}
                </button>
                <button class="px-6 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      } @else {
        <div class="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h2>
            <p class="text-slate-500 mb-6">The product you are looking for does not exist or has been removed.</p>
            <a routerLink="/catalog" class="text-blue-600 hover:text-blue-800 font-medium hover:underline">{{ 'PRODUCT_DETAIL.BACK_TO_CATALOG' | translate }}</a>
        </div>
      }
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private catalogService = inject(CatalogService);
  private cartService = inject(CartService);
  private toastService = inject(ToastService);
  private translateService = inject(TranslateService);
  private analyticsService = inject(AnalyticsService);

  product = signal<Product | null>(null);
  selectedImage = signal<string | null>(null);
  loading = signal<boolean>(true);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loading.set(true);
      this.catalogService.getProductById(id).subscribe({
        next: (p) => {
          this.product.set(p);
          this.loading.set(false);
          
          // Track product view en Google Analytics
          this.analyticsService.trackProductView(
            p.id.toString(),
            p.name,
            p.category,
            p.price
          );
        },
        error: () => this.loading.set(false)
      });
    }
  }

  getProductName(): string {
    const p = this.product();
    if (!p) return '';
    const currentLang = this.translateService.currentLang;
    return currentLang === 'es' && p.nameEs ? p.nameEs : p.name;
  }

  getProductDescription(): string {
    const p = this.product();
    if (!p) return '';
    const currentLang = this.translateService.currentLang;
    return currentLang === 'es' && p.descriptionEs ? p.descriptionEs : p.description;
  }

  addToCart() {
    const p = this.product();
    if (p) {
      this.cartService.addItem(p);
      this.toastService.show(`Added ${p.name} to cart`, 'success');
      
      // Track add to cart en Google Analytics
      this.analyticsService.trackAddToCart(
        p.id.toString(),
        p.name,
        p.price,
        1 // cantidad
      );
    }
  }

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x400?text=No+Image';
  }
}
