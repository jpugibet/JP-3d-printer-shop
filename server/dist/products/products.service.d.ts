import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    create(product: Partial<Product>): Promise<Product>;
    remove(id: string): Promise<void>;
}
