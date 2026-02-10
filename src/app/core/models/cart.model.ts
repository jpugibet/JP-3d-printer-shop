import { Product } from './product.model';

export interface CartItem {
    productId: string;
    product: Product;
    quantity: number;
    price: number;
}

export interface Cart {
    items: CartItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
}