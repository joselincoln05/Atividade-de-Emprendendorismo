import { Leaf, Heart, Hammer } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Hammer,
      title: 'Artesanato Autêntico',
      description: 'Cada peça é feita à mão com técnicas tradicionais, respeitando a natureza da madeira.',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Utilizamos madeira de fontes responsáveis e processos ecologicamente conscientes.',
    },
    {
      icon: Heart,
      title: 'Qualidade Premium',
      description: 'Selecionamos apenas as melhores madeiras e dedicamos tempo ao acabamento perfeito.',
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            Sobre Nossa Loja
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
            Somos apaixonados por madeira e artesanato. Desde 2015, criamos peças únicas que combinam tradição, qualidade e design contemporâneo. Cada item que sai de nossa oficina carrega a dedicação de quem realmente ama o que faz.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
                  {value.title}
                </h3>
                <p className="text-foreground/70" style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
