import { Injectable, OnModuleInit } from '@nestjs/common';
import { ProductsService } from './products.service';

@Injectable()
export class SeedService implements OnModuleInit {
    constructor(private readonly productsService: ProductsService) { }

    async onModuleInit() {
        const products = await this.productsService.findAll();
        if (products.length === 0) {
            console.log('Seeding products...');
            await this.productsService.create({
                name: 'Ender 3 V2',
                description: 'Reliable FDM printer for beginners. Features a silent motherboard and glass bed.',
                price: 250,
                technology: 'FDM',
                stock: 15,
                images: ['https://m.media-amazon.com/images/I/61pBvlYyvLL._AC_SL1500_.jpg']
            });
            await this.productsService.create({
                name: 'Prusa i3 MK3S+',
                description: 'Top tier FDM printer. known for its reliability and print quality.',
                price: 799,
                technology: 'FDM',
                stock: 5,
                images: ['https://www.prusa3d.com/content/images/product/default/228.jpg']
            });
            await this.productsService.create({
                name: 'Anycubic Photon Mono X',
                description: 'High resolution SLA printer for detailed models.',
                price: 450,
                technology: 'SLA',
                stock: 8,
                images: ['https://m.media-amazon.com/images/I/61O+2qgqIIL._AC_SL1000_.jpg']
            });
            console.log('Seeding complete.');
        }
    }
}
