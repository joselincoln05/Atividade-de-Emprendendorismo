import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388082139/DtENi9TzU2Cno4vrgcXj79/hero-banner-efsN3i5PEqcLi3jPC2eLg4.webp"
          alt="Peças de madeira rústica"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
            Artesanato em Madeira Rústica
          </h1>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
            Peças únicas e autênticas, feitas à mão com madeira de qualidade. Cada item conta uma história de tradição e dedicação artesanal.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            style={{fontFamily: "'Source Sans Pro', sans-serif"}}
          >
            Explorar Coleção
          </Button>
        </div>
      </div>
    </section>
  );
}
