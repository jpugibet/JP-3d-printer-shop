// cart.model.ts

type CartItem = {
    productReference: string;
    quantity: number;
    price: number;
    subtotal: number;
    tax: number;
    shipping: number;
};

interface Cart {
    items: CartItem[];
    total: number;
}