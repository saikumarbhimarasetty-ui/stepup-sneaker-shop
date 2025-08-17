import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: 'sneakers' | 'leather' | 'casual';
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="product-card glass border-0 overflow-hidden group cursor-pointer">
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({product.rating})
            </span>
          </div>
          
          <h3 className="font-poppins font-semibold text-lg text-card-foreground mb-2">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="font-poppins font-bold text-2xl text-accent">
              ${product.price}
            </span>
            
            <Button
              onClick={() => onAddToCart(product)}
              className="glow-on-hover bg-primary hover:bg-accent text-primary-foreground"
              size="sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;