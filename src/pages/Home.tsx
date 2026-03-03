import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import Footer from '@/components/Footer';

/**
 * Rustic Wood Shop - Home Page
 * Design Philosophy: Organic Contemporary Artisanship
 * 
 * Paleta: tons de madeira (caramelo, chocolate, mel), branco quente, cinza natural, verde musgo
 * Tipografia: Playfair Display (títulos), Source Sans Pro (corpo)
 * Layout: Grid assimétrico com muito espaço em branco
 * Animações: Transições suaves (300-500ms), hover effects delicados
 */

export default function Home() {
  // Sample products data
  const products = [
    {
      id: '1',
      name: 'Tábua de Corte Artesanal',
      description: 'Tábua de madeira maciça com alça, perfeita para cozinha rústica',
      price: 89.90,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/featured-products-UWjt7N6vHz3mg6UeLtnfGM.webp',
      featured: true,
    },
    {
      id: '2',
      name: 'Coaster de Madeira Natural',
      description: 'Conjunto de 4 coasters com anel de madeira natural',
      price: 45.00,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/hero-banner-efsN3i5PEqcLi3jPC2eLg4.webp',
    },
    {
      id: '3',
      name: 'Caixa Decorativa Rústica',
      description: 'Pequena caixa de madeira com fechadura vintage',
      price: 65.00,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/featured-products-UWjt7N6vHz3mg6UeLtnfGM.webp',
    },
    {
      id: '4',
      name: 'Tigela de Madeira Maciça',
      description: 'Tigela artesanal em madeira natural, ideal para frutas',
      price: 75.00,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/product-showcase-Ey8AutMWXmubPiBA4bACNP.webp',
      featured: true,
    },
    {
      id: '5',
      name: 'Colher de Madeira Entalhada',
      description: 'Colher grande para cozinha com acabamento natural',
      price: 35.00,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/hero-banner-efsN3i5PEqcLi3jPC2eLg4.webp',
    },
    {
      id: '6',
      name: 'Suporte para Plantas',
      description: 'Suporte de madeira rústica para vasos pequenos',
      price: 55.00,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/featured-products-UWjt7N6vHz3mg6UeLtnfGM.webp',
    },
    {
      id: '7',
      name: 'Bandeja Retangular',
      description: 'Bandeja de madeira para servir café e chá',
      price: 95.00,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/product-showcase-Ey8AutMWXmubPiBA4bACNP.webp',
    },
    {
      id: '8',
      name: 'Jogo de Talheres de Madeira',
      description: 'Conjunto com garfo, faca e colher em madeira natural',
      price: 48.00,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/hero-banner-efsN3i5PEqcLi3jPC2eLg4.webp',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid products={products} />
      <About />
      <Footer />
    </div>
  );
}
