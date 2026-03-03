import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
              Madeira Rústica
            </h3>
            <p className="text-white/80 text-sm" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
              Artesanato em madeira de qualidade, feito com paixão e dedicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm text-white/80" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@madeirarustca.com" className="hover:text-white transition-colors">
                  contato@madeirarustca.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-sm text-white/60 text-center" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
            © 2025 Madeira Rústica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
