import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
