import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const benefits = [
  "Alertas instantâneos no WhatsApp",
  "Monitoramento 24/7 dos leilões",
  "Foco na região de Belo Horizonte", 
  "Informações diretas da Caixa",
  "Sem mensalidades ou taxas",
  "Suporte personalizado"
];

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531999999999?text=Quero começar a receber alertas de leilões de imóveis agora!", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Pronto para encontrar seu próximo investimento?
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90">
            Junte-se a centenas de investidores que já usam nosso serviço para encontrar as melhores oportunidades em leilões de imóveis.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-primary-foreground">
                O que você recebe:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="h-5 w-5 text-whatsapp flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary-foreground mb-2">GRÁTIS</div>
                <div className="text-primary-foreground/80">Sem mensalidades</div>
                <div className="text-primary-foreground/80">Sem compromisso</div>
              </div>
              
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full text-lg px-8 py-4 h-auto"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Quero Receber Alertas
              </Button>
              
              <p className="text-sm text-primary-foreground/70 mt-4 text-center">
                Clique e seja direcionado para o WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};