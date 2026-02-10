import { Injectable, inject, signal } from '@angular/core';
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
    loading = signal<boolean>(false);

    getProducts(filters?: any): Observable<Product[]> {
        this.loading.set(true);
        // Convert filters to HttpParams if needed
        return this.api.get<Product[]>('products', filters).pipe(
            tap(products => {
                this.products.set(products);
                this.loading.set(false);
            })
        );
    }

    getProductById(id: string): Observable<Product> {
        return this.api.get<Product>(`products/${id}`);
    }
}
