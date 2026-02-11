"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./products/entities/product.entity");
const dotenv = require("dotenv");
dotenv.config();
async function resetDatabase() {
    const dataSource = new typeorm_1.DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [product_entity_1.Product],
        synchronize: true,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    try {
        await dataSource.initialize();
        console.log('Database connected.');
        const repository = dataSource.getRepository(product_entity_1.Product);
        await repository.clear();
        console.log('Product table cleared.');
        await dataSource.destroy();
        console.log('Database connection closed.');
    }
    catch (error) {
        console.error('Error resetting database:', error);
        process.exit(1);
    }
}
resetDatabase();
//# sourceMappingURL=reset-db.js.map