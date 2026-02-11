import { Injectable, OnModuleInit } from '@nestjs/common';
import { ProductsService } from './products.service';

@Injectable()
export class SeedService implements OnModuleInit {
    constructor(private readonly productsService: ProductsService) { }

    async onModuleInit() {
        const products = await this.productsService.findAll();
        if (products.length === 0) {
            console.log('Seeding products...');

            const seedProducts = [
                {
                    name: 'Creality Ender 3 V2',
                    description: 'Reliable FDM printer for beginners. Features a silent motherboard and glass bed.',
                    nameEs: 'Creality Ender 3 V2',
                    descriptionEs: 'Impresora FDM confiable para principiantes. Cuenta con placa silenciosa y cama de vidrio.',
                    price: 250,
                    technology: 'FDM',
                    stock: 15,
                    images: ['https://images.pexels.com/photos/35595049/pexels-photo-35595049.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1&fit=crop'] // Generic FDM
                },
                {
                    name: 'Prusa i3 MK3S+',
                    description: 'Top tier FDM printer known for its reliability, auto-leveling, and silent operation.',
                    nameEs: 'Prusa i3 MK3S+',
                    descriptionEs: 'Impresora FDM de primera calidad conocida por su confiabilidad, nivelación automática y operación silenciosa.',
                    price: 799,
                    technology: 'FDM',
                    stock: 10,
                    images: ['https://images.pexels.com/photos/30275792/pexels-photo-30275792.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1&fit=crop'] // Generic Prusa-style
                },
                {
                    name: 'Anycubic Photon Mono X',
                    description: 'High resolution SLA printer for detailed models with a large build volume.',
                    nameEs: 'Anycubic Photon Mono X',
                    descriptionEs: 'Impresora SLA de alta resolución para modelos detallados con gran volumen de construcción.',
                    price: 450,
                    technology: 'SLA',
                    stock: 8,
                    images: ['https://images.unsplash.com/photo-1603974739154-7b055aeec101?auto=format&fit=crop&q=80&w=800&h=600'] // Generic SLA/Resin
                },
                {
                    name: 'Elegoo Mars 3',
                    description: 'Compact SLA printer with 4K resolution, perfect for miniatures and jewelry.',
                    nameEs: 'Elegoo Mars 3',
                    descriptionEs: 'Impresora SLA compacta con resolución 4K, perfecta para miniaturas y joyería.',
                    price: 300,
                    technology: 'SLA',
                    stock: 20,
                    images: ['https://images.unsplash.com/photo-1549563316-5384a923453e?auto=format&fit=crop&q=80&w=800&h=600'] // Generic Resin
                },
                {
                    name: 'Creality CR-10 Smart',
                    description: 'Large format FDM printer with built-in Wi-Fi and auto-leveling.',
                    nameEs: 'Creality CR-10 Smart',
                    descriptionEs: 'Impresora FDM de gran formato con Wi-Fi integrado y nivelación automática.',
                    price: 499,
                    technology: 'FDM',
                    stock: 5,
                    images: ['https://images.unsplash.com/photo-1694898827967-1fb49302d5c9?auto=format&fit=crop&q=80&w=800&h=600'] // Large FDM
                },
                {
                    name: 'Voron 2.4 Kit',
                    description: 'High-performance CoreXY DIY kit for enthusiasts seeking speed and quality.',
                    nameEs: 'Voron 2.4 Kit',
                    descriptionEs: 'Kit DIY CoreXY de alto rendimiento para entusiastas que buscan velocidad y calidad.',
                    price: 1200,
                    technology: 'FDM',
                    stock: 3,
                    images: ['https://images.unsplash.com/photo-1631016041959-0ed99b85fea7?auto=format&fit=crop&q=80&w=800&h=600'] // Technical/CoreXY style
                },
                {
                    name: 'Bambu Lab X1 Carbon',
                    description: 'AI-powered high-speed FDM printer with multi-color capabilities.',
                    nameEs: 'Bambu Lab X1 Carbon',
                    descriptionEs: 'Impresora FDM de alta velocidad con IA y capacidades multicolor.',
                    price: 1499,
                    technology: 'FDM',
                    stock: 2,
                    images: ['https://images.unsplash.com/photo-1730860436877-1a577d32d815?auto=format&fit=crop&q=80&w=800&h=600'] // High tech / Generic Enclosed
                },
                {
                    name: 'Flashforge Adventurer 3',
                    description: 'Enclosed FDM printer, safe for schools and beginners. Compact design.',
                    nameEs: 'Flashforge Adventurer 3',
                    descriptionEs: 'Impresora FDM cerrada, segura para escuelas y principiantes. Diseño compacto.',
                    price: 350,
                    technology: 'FDM',
                    stock: 12,
                    images: ['https://images.unsplash.com/photo-1723141559301-b0f7735d497e?auto=format&fit=crop&q=80&w=800&h=600'] // Enclosed FDM
                },
                {
                    name: 'Ultimaker S5',
                    description: 'Professional dual-extrusion FDM printer for industrial applications.',
                    nameEs: 'Ultimaker S5',
                    descriptionEs: 'Impresora FDM profesional de doble extrusión para aplicaciones industriales.',
                    price: 5995,
                    technology: 'FDM',
                    stock: 1,
                    images: ['https://plus.unsplash.com/premium_photo-1716396589647-926b6fef248f?auto=format&fit=crop&q=80&w=800&h=600'] // Professional Lab Look
                },
                {
                    name: 'Formlabs Form 3+',
                    description: 'Industrial-grade LFS (SLA) printer for flawless surface finish.',
                    nameEs: 'Formlabs Form 3+',
                    descriptionEs: 'Impresora LFS (SLA) de grado industrial para acabado superficial impecable.',
                    price: 3499,
                    technology: 'SLA',
                    stock: 4,
                    images: ['https://images.unsplash.com/photo-1508277331340-15dae38b3d1e?auto=format&fit=crop&q=80&w=800&h=600'] // Resin print action
                },
                {
                    name: 'Phrozen Sonic Mini 8K',
                    description: 'Ultra-high resolution SLA printer with 22µm precision.',
                    nameEs: 'Phrozen Sonic Mini 8K',
                    descriptionEs: 'Impresora SLA de resolución ultra alta con precisión de 22µm.',
                    price: 599,
                    technology: 'SLA',
                    stock: 7,
                    images: ['https://plus.unsplash.com/premium_photo-1714747877421-07042c33dbdb?auto=format&fit=crop&q=80&w=800&h=600'] // Resin Tech
                },
                {
                    name: 'Artillery Sidewinder X2',
                    description: 'Direct drive FDM printer with fast heating bed and clean cable management.',
                    nameEs: 'Artillery Sidewinder X2',
                    descriptionEs: 'Impresora FDM de extrusión directa con cama de calentamiento rápido y gestión de cables limpia.',
                    price: 400,
                    technology: 'FDM',
                    stock: 11,
                    images: ['https://plus.unsplash.com/premium_photo-1716396588913-a975496b3bd1?auto=format&fit=crop&q=80&w=800&h=600'] // FDM Printing
                },
                {
                    name: 'Snapmaker 2.0 A350',
                    description: '3-in-1 Modular machine: 3D Printer, Laser Cutter, and CNC Carver.',
                    nameEs: 'Snapmaker 2.0 A350',
                    descriptionEs: 'Máquina modular 3 en 1: Impresora 3D, Cortadora Láser y Tallador CNC.',
                    price: 1799,
                    technology: 'Hybrid',
                    stock: 3,
                    images: ['https://images.unsplash.com/photo-1767498051838-a08e30d1cde7?auto=format&fit=crop&q=80&w=800&h=600'] // CNC/Maker look
                },
                {
                    name: 'Prusa Mini+',
                    description: 'Compact workhorse from Prusa Research. Great for print farms.',
                    nameEs: 'Prusa Mini+',
                    descriptionEs: 'Caballo de batalla compacto de Prusa Research. Ideal para granjas de impresión.',
                    price: 399,
                    technology: 'FDM',
                    stock: 15,
                    images: ['https://plus.unsplash.com/premium_photo-1664299583399-cc28feeb8a0e?auto=format&fit=crop&q=80&w=800&h=600'] // Small FDM
                },
                {
                    name: 'Anycubic Vyper',
                    description: 'FDM printer with auto-leveling and a PEI magnetic spring steel build plate.',
                    nameEs: 'Anycubic Vyper',
                    descriptionEs: 'Impresora FDM con nivelación automática y placa de construcción PEI magnética de acero.',
                    price: 359,
                    technology: 'FDM',
                    stock: 9,
                    images: ['https://images.unsplash.com/photo-1756723903184-32fed816ea5d?auto=format&fit=crop&q=80&w=800&h=600'] // FDM Detail
                },
                {
                    name: 'Elegoo Saturn 2',
                    description: '8K Monochrome LCD SLA printer with a large build volume.',
                    nameEs: 'Elegoo Saturn 2',
                    descriptionEs: 'Impresora SLA con pantalla LCD monocroma 8K y gran volumen de construcción.',
                    price: 550,
                    technology: 'SLA',
                    stock: 6,
                    images: ['https://plus.unsplash.com/premium_photo-1715228482186-c9f07e975f22?auto=format&fit=crop&q=80&w=800&h=600'] // Resin Detail
                },
                {
                    name: 'Creality Ender 5 Plus',
                    description: 'Cube frame FDM printer with a massive build volume for large projects.',
                    nameEs: 'Creality Ender 5 Plus',
                    descriptionEs: 'Impresora FDM con marco cúbico y volumen de construcción masivo para proyectos grandes.',
                    price: 579,
                    technology: 'FDM',
                    stock: 4,
                    images: ['https://plus.unsplash.com/premium_photo-1680037568241-5499309fb6c6?auto=format&fit=crop&q=80&w=800&h=600'] // Box frame style
                },
                {
                    name: 'Monoprice Voxel',
                    description: 'User-friendly, fully enclosed FDM printer. Rebrand of Flashforge Adventurer.',
                    nameEs: 'Monoprice Voxel',
                    descriptionEs: 'Impresora FDM completamente cerrada y fácil de usar. Versión de Flashforge Adventurer.',
                    price: 269,
                    technology: 'FDM',
                    stock: 10,
                    images: ['https://images.unsplash.com/photo-1623015707081-688ee9c91c2f?auto=format&fit=crop&q=80&w=800&h=600'] // Desktop printer
                },
                {
                    name: 'LulzBot Mini 2',
                    description: 'Open-source, rugged FDM printer made for reliability and versatile materials.',
                    nameEs: 'LulzBot Mini 2',
                    descriptionEs: 'Impresora FDM de código abierto y robusta, diseñada para confiabilidad y materiales versátiles.',
                    price: 1500,
                    technology: 'FDM',
                    stock: 2,
                    images: ['https://plus.unsplash.com/premium_photo-1714675572532-3153b016ac48?auto=format&fit=crop&q=80&w=800&h=600'] // Open hardware style
                },
                {
                    name: 'Raise3D Pro3',
                    description: 'Professional dual-extruder printer with enclosed chamber and HEPA filter.',
                    nameEs: 'Raise3D Pro3',
                    descriptionEs: 'Impresora profesional de doble extrusor con cámara cerrada y filtro HEPA.',
                    price: 4000,
                    technology: 'FDM',
                    stock: 1,
                    images: ['https://images.unsplash.com/photo-1539264374208-58df3521ddd9?auto=format&fit=crop&q=80&w=800&h=600'] // Industrial
                }
            ];

            for (const product of seedProducts) {
                await this.productsService.create(product);
            }

            console.log('Seeding complete.');
        }
    }
}
