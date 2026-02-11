import { DataSource } from 'typeorm';
import { Product } from './products/entities/product.entity';
import * as dotenv from 'dotenv';

dotenv.config();

async function resetDatabase() {
    const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [Product],
        synchronize: true,
        ssl: {
            rejectUnauthorized: false,
        },
    });

    try {
        await dataSource.initialize();
        console.log('Database connected.');

        const repository = dataSource.getRepository(Product);
        await repository.clear(); // Clears all entries from the product table
        console.log('Product table cleared.');

        await dataSource.destroy();
        console.log('Database connection closed.');
    } catch (error) {
        console.error('Error resetting database:', error);
        process.exit(1);
    }
}

resetDatabase();
