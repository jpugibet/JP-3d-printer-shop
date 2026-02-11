import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterComponent, ProductFilters } from './components/product-filter/product-filter.component';
import { CatalogService } from './services/catalog.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [CommonModule, ProductListComponent, ProductFilterComponent, TranslateModule],
    template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">{{ 'CATALOG.TITLE' | translate }}</h1>
      
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Sidebar Filters -->
        <aside class="w-full md:w-1/4">
          <app-product-filter (filtersChanged)="onFiltersChanged($event)"></app-product-filter>
        </aside>

        <!-- Product Grid with Pagination -->
        <main class="w-full md:w-3/4">
          <app-product-list></app-product-list>
          
          <!-- Pagination Controls -->
          @if (catalogService.totalPages() > 1) {
            <div class="mt-8 flex items-center justify-center gap-2">
              <button 
                (click)="catalogService.previousPage()" 
                [disabled]="catalogService.currentPage() === 1"
                class="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                {{ 'CATALOG.PREVIOUS' | translate }}
              </button>
              
              <div class="flex gap-1">
                @for (page of getPageNumbers(); track page) {
                  @if (page === '...') {
                    <span class="px-3 py-2 text-slate-400">...</span>
                  } @else {
                    <button 
                      (click)="catalogService.setPage(+page)"
                      [class.bg-blue-600]="catalogService.currentPage() === page"
                      [class.text-white]="catalogService.currentPage() === page"
                      [class.bg-white]="catalogService.currentPage() !== page"
                      [class.text-slate-700]="catalogService.currentPage() !== page"
                      class="min-w-[40px] px-3 py-2 rounded-lg border border-slate-300 font-medium hover:bg-blue-50 transition-colors">
                      {{ page }}
                    </button>
                  }
                }
              </div>
              
              <button 
                (click)="catalogService.nextPage()" 
                [disabled]="catalogService.currentPage() === catalogService.totalPages()"
                class="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                {{ 'CATALOG.NEXT' | translate }}
              </button>
            </div>
            
            <div class="mt-4 text-center text-sm text-slate-500">
              {{ 'CATALOG.PAGE' | translate }} {{ catalogService.currentPage() }} {{ 'CATALOG.OF' | translate }} {{ catalogService.totalPages() }}
            </div>
          }
        </main>
      </div>
    </div>
  `
})
export class CatalogComponent {
  catalogService = inject(CatalogService);

  onFiltersChanged(filters: ProductFilters) {
    this.catalogService.applyFilters(filters);
  }
  
  getPageNumbers(): (number | string)[] {
    const total = this.catalogService.totalPages();
    const current = this.catalogService.currentPage();
    const pages: (number | string)[] = [];
    
    if (total <= 7) {
      // Show all pages if 7 or less
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (current > 3) {
        pages.push('...');
      }
      
      // Show pages around current
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (current < total - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(total);
    }
    
    return pages;
  }
}
