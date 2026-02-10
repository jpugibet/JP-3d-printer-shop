"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
            {
                id: '1',
                name: 'Ender 3 V2',
                description: 'Reliable FDM printer for beginners.',
                price: 250,
                technology: 'FDM',
                stock: 15,
                images: ['https://example.com/ender3.jpg']
            },
            {
                id: '2',
                name: 'Prusa i3 MK3S+',
                description: 'Top tier FDM printer.',
                price: 799,
                technology: 'FDM',
                stock: 5,
                images: ['https://example.com/prusa.jpg']
            }
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        return this.products.find(p => p.id === id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map