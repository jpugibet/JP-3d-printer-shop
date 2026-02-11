import { Injectable, inject, signal, computed } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Product } from '../../../core/models/models';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    private api = inject(ApiService);

    // Signal to hold the current list of products
    products = signal<Product[]>([]);
    private allProducts = signal<Product[]>([]); // Store all products for client-side filtering
    private filteredProducts = signal<Product[]>([]); // Products after filters
    loading = signal<boolean>(false);
    
    // Pagination
    currentPage = signal<number>(1);
    itemsPerPage = signal<number>(6);
    
    // Computed values for pagination
    totalPages = computed(() => Math.ceil(this.filteredProducts().length / this.itemsPerPage()));
    paginatedProducts = computed(() => {
        const start = (this.currentPage() - 1) * this.itemsPerPage();
        const end = start + this.itemsPerPage();
        return this.filteredProducts().slice(start, end);
    });

    getProducts(filters?: any): Observable<Product[]> {
        this.loading.set(true);
        return this.api.get<Product[]>('products', filters).pipe(
            tap(products => {
                this.allProducts.set(products);
                this.filteredProducts.set(products);
                this.products.set(this.paginatedProducts());
                this.currentPage.set(1);
                this.loading.set(false);
            })
        );
    }

    getProductById(id: string): Observable<Product> {
        return this.api.get<Product>(`products/${id}`);
    }

    applyFilters(filters: { technologies: string[], minPrice?: number, maxPrice?: number }) {
        let filtered = [...this.allProducts()];

        // Filter by technology
        if (filters.technologies.length > 0) {
            filtered = filtered.filter(product => 
                filters.technologies.includes(product.technology)
            );
        }

        // Filter by price range
        if (filters.minPrice !== undefined && filters.minPrice !== null) {
            filtered = filtered.filter(product => 
                product.price >= filters.minPrice!
            );
        }

        if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
            filtered = filtered.filter(product => 
                product.price <= filters.maxPrice!
            );
        }

        this.filteredProducts.set(filtered);
        this.currentPage.set(1); // Reset to first page
        this.products.set(this.paginatedProducts());
    }
    
    setPage(page: number) {
        if (page >= 1 && page <= this.totalPages()) {
            this.currentPage.set(page);
            this.products.set(this.paginatedProducts());
        }
    }
    
    nextPage() {
        this.setPage(this.currentPage() + 1);
    }
    
    previousPage() {
        this.setPage(this.currentPage() - 1);
    }
}
