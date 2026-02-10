export declare class ProductsService {
    private products;
    findAll(): {
        id: string;
        name: string;
        description: string;
        price: number;
        technology: string;
        stock: number;
        images: string[];
    }[];
    findOne(id: string): {
        id: string;
        name: string;
        description: string;
        price: number;
        technology: string;
        stock: number;
        images: string[];
    };
}
