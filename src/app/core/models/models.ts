export interface Product {
    id: string;
    name: string;
    description: string;
    nameEs?: string;
    descriptionEs?: string;
    price: number;
    images: string[];
    category?: string;
    technology: 'FDM' | 'SLA' | 'SLS' | 'Hybrid';
    volume?: string;
    resolution?: string;
    brand?: string;
    stock: number;
    rating?: number;
    reviewsCount?: number;
    features?: string[];
}

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: 'user' | 'admin';
    avatar?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
