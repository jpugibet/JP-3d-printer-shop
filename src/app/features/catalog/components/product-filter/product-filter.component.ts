import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

export interface ProductFilters {
  technologies: string[];
  minPrice?: number;
  maxPrice?: number;
}

@Component({
    selector: 'app-product-filter',
    standalone: true,
    imports: [CommonModule, TranslateModule, FormsModule],
    template: `
    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 class="font-semibold text-lg mb-4">{{ 'CATALOG.FILTERS' | translate }}</h3>
      
      <!-- Categories -->
      <div class="mb-6">
        <h4 class="text-sm font-medium text-gray-700 mb-2">{{ 'CATALOG.TECHNOLOGY' | translate }}</h4>
        <div class="space-y-2">
          <label class="flex items-center space-x-2">
            <input type="checkbox" [(ngModel)]="filters.fdm" (change)="onFilterChange()" class="rounded text-blue-600 focus:ring-blue-500">
            <span class="text-sm text-gray-600">FDM</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="checkbox" [(ngModel)]="filters.sla" (change)="onFilterChange()" class="rounded text-blue-600 focus:ring-blue-500">
            <span class="text-sm text-gray-600">SLA</span>
          </label>
           <label class="flex items-center space-x-2">
            <input type="checkbox" [(ngModel)]="filters.sls" (change)="onFilterChange()" class="rounded text-blue-600 focus:ring-blue-500">
            <span class="text-sm text-gray-600">SLS</span>
          </label>
        </div>
      </div>

      <!-- Price Range -->
      <div class="mb-6">
        <h4 class="text-sm font-medium text-gray-700 mb-2">{{ 'CATALOG.PRICE_RANGE' | translate }}</h4>
        <div class="flex items-center space-x-2">
          <input type="number" [(ngModel)]="filters.minPrice" [placeholder]="'CATALOG.MIN' | translate" class="w-20 p-2 border rounded text-sm">
          <span>-</span>
          <input type="number" [(ngModel)]="filters.maxPrice" [placeholder]="'CATALOG.MAX' | translate" class="w-20 p-2 border rounded text-sm">
        </div>
      </div>

       <button (click)="applyFilters()" class="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors text-sm">
        {{ 'CATALOG.APPLY_FILTERS' | translate }}
      </button>
      
      @if (hasActiveFilters()) {
        <button (click)="clearFilters()" class="w-full mt-2 bg-white text-gray-700 border border-gray-300 py-2 rounded hover:bg-gray-50 transition-colors text-sm">
          {{ 'CATALOG.CLEAR_FILTERS' | translate }}
        </button>
      }
    </div>
  `
})
export class ProductFilterComponent {
  @Output() filtersChanged = new EventEmitter<ProductFilters>();
  
  filters = {
    fdm: false,
    sla: false,
    sls: false,
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined
  };

  onFilterChange() {
    // Auto-apply on checkbox change
    this.applyFilters();
  }

  applyFilters() {
    const technologies: string[] = [];
    if (this.filters.fdm) technologies.push('FDM');
    if (this.filters.sla) technologies.push('SLA');
    if (this.filters.sls) technologies.push('SLS');

    this.filtersChanged.emit({
      technologies,
      minPrice: this.filters.minPrice,
      maxPrice: this.filters.maxPrice
    });
  }

  clearFilters() {
    this.filters = {
      fdm: false,
      sla: false,
      sls: false,
      minPrice: undefined,
      maxPrice: undefined
    };
    this.applyFilters();
  }

  hasActiveFilters(): boolean {
    return this.filters.fdm || this.filters.sla || this.filters.sls || 
           this.filters.minPrice !== undefined || this.filters.maxPrice !== undefined;
  }
}
