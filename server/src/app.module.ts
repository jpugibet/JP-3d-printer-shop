import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [Product],
            synchronize: true,
            ssl: process.env.NODE_ENV === 'production' ? {
                rejectUnauthorized: false,
            } : false,
            logging: process.env.NODE_ENV !== 'production' ? ['error', 'warn'] : ['error'],
            extra: {
                connectionTimeoutMillis: 10000,
            },
        }),
        ProductsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
