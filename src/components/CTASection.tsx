import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const benefits = [
  "Alertas de atualizações de preços em tempo real",
  "Monitoramento 24/7 de imóveis em leilão",
  "Cobertura de 10+ cidades da Grande BH", 
  "Informações diretas da Caixa Econômica",
  "Assinatura de 1 ano por apenas R$ 9,99",
  "Suporte personalizado via WhatsApp"
];

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531996908287?text=Olá! Gostaria de assinar o serviço de alertas de leilões por R$ 9,99.", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Pronto para Receber Alertas de Preços?
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90">
            Monitore imóveis em leilão da Caixa e seja alertado sobre mudanças de preços automaticamente.
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
                <div className="text-4xl font-bold text-primary-foreground mb-2">R$ 9,99</div>
                <div className="text-primary-foreground/80">Assinatura 1 ano</div>
                <div className="text-primary-foreground/80">Apenas R$ 0,83/mês</div>
              </div>
              
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full text-lg px-8 py-4 h-auto"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Assinar por R$ 19,99
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
