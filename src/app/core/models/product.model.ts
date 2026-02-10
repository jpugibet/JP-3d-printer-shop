export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  brand: string;
  technology: 'FDM' | 'SLA' | 'SLS';
  buildVolume: {
    x: number;
    y: number;
    z: number;
    unit: 'mm' | 'cm';
  };
  resolution: number;
  images: string[];
  mainImage: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockQuantity: number;
  specifications: Record<string, any>;
  features: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFilter {
  priceMin?: number;
  priceMax?: number;
  brands?: string[];
  technologies?: ('FDM' | 'SLA' | 'SLS')[];
  inStockOnly?: boolean;
  minRating?: number;
  searchTerm?: string;
}