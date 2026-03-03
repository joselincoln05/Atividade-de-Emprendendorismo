import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  featured = false,
}: ProductCardProps) {
  return (
    <div
      className={`group bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-64 md:h-80 lg:h-96">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
          {name}
        </h3>
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
          {description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary" style={{fontFamily: "'Playfair Display', serif"}}>
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
