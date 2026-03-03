import { ShoppingCart } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="text-2xl font-bold text-primary" style={{fontFamily: "'Playfair Display', serif"}}>
            🪵 Madeira Rústica
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#produtos" className="text-foreground hover:text-primary transition-colors text-sm" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
            Produtos
          </Link>
          <Link href="#sobre" className="text-foreground hover:text-primary transition-colors text-sm" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
            Sobre
          </Link>
          <Link href="#contato" className="text-foreground hover:text-primary transition-colors text-sm" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
            Contato
          </Link>
        </nav>

        {/* Cart Icon */}
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <ShoppingCart className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </header>
  );
}
