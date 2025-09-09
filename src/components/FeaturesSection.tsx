import { Bell, Smartphone, MapPin, Clock, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Alertas Instantâneos",
    description: "Receba notificações no WhatsApp assim que novos leilões de imóveis da Caixa forem publicados."
  },
  {
    icon: MapPin,
    title: "Foco em BH",
    description: "Monitoramos especificamente leilões nas cidades da região metropolitana de Belo Horizonte."
  },
  {
    icon: DollarSign,
    title: "Melhores Oportunidades",
    description: "Filtramos os imóveis com maior potencial de investimento e melhores preços."
  },
  {
    icon: Clock,
    title: "24h por dia",
    description: "Nosso sistema funciona ininterruptamente, garantindo que você não perca nenhuma oportunidade."
  },
  {
    icon: Smartphone,
    title: "Direto no WhatsApp",
    description: "Tudo no aplicativo que você já usa. Simples, prático e sem complicações."
  },
  {
    icon: Shield,
    title: "Informações Confiáveis",
    description: "Dados verificados diretamente do site oficial da Caixa Econômica Federal."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que escolher nosso serviço?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos a solução mais completa para quem quer investir em imóveis de leilão com praticidade e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};