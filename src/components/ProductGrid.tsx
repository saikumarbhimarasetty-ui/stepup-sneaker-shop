import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ProductCard, { Product } from './ProductCard';

// Import product images
import airflexImage from '@/assets/airflex-sneakers.jpg';
import urbanLeatherImage from '@/assets/urban-leather.jpg';
import classicWhiteImage from '@/assets/classic-white.jpg';
import runningProImage from '@/assets/running-pro.jpg';
import premiumLoafersImage from '@/assets/premium-loafers.jpg';

const products: Product[] = [
  {
    id: '1',
    name: 'AirFlex Sneakers',
    price: 89,
    image: airflexImage,
    rating: 4.5,
    category: 'sneakers'
  },
  {
    id: '2',
    name: 'Urban Leather Shoes',
    price: 120,
    image: urbanLeatherImage,
    rating: 4.8,
    category: 'leather'
  },
  {
    id: '3',
    name: 'Classic White Sneakers',
    price: 75,
    image: classicWhiteImage,
    rating: 4.3,
    category: 'sneakers'
  },
  {
    id: '4',
    name: 'Running Pro Shoes',
    price: 95,
    image: runningProImage,
    rating: 4.6,
    category: 'sneakers'
  },
  {
    id: '5',
    name: 'Premium Loafers',
    price: 150,
    image: premiumLoafersImage,
    rating: 4.9,
    category: 'leather'
  }
];

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'sneakers', name: 'Sneakers' },
    { id: 'leather', name: 'Leather' },
    { id: 'casual', name: 'Casual' }
  ];

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
            Featured Products
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of sneakers, leather shoes, and casual footwear
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 fade-in">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-accent hover:bg-brand-red-dark" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-lg text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;