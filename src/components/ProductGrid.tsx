import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            Nossa Coleção
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
            Cada peça é única e confeccionada com atenção aos detalhes. Madeira selecionada, acabamento artesanal e muito amor em cada criação.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={
                index === 0 || index === 3
                  ? 'md:col-span-2 md:row-span-2'
                  : ''
              }
            >
              <ProductCard {...product} featured={index === 0 || index === 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
