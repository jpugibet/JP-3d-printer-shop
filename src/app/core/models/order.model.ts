import { Address } from './user.model';

export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    status: OrderStatus;
    shippingAddress: Address;
    billingAddress: Address;
    paymentMethod: PaymentMethod;
    trackingNumber?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    subtotal: number;
}

export type OrderStatus =
    | 'pending'
    | 'processing'
    | 'shipped'
    | 'delivered'
    | 'cancelled'
    | 'refunded';

export interface PaymentMethod {
    type: 'credit_card' | 'paypal' | 'bank_transfer';
    last4?: string;
    brand?: string;
}