import { MessageCircle, Search, Bell, HandshakeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Envie uma mensagem",
    description: "Clique no botão e envie uma mensagem no WhatsApp para se cadastrar"
  },
  {
    number: "02", 
    icon: Search,
    title: "Definimos suas preferências",
    description: "Conte-nos que tipo de imóvel você procura e em quais cidades"
  },
  {
    number: "03",
    icon: Bell,
    title: "Receba alertas automáticos",
    description: "Nosso sistema monitora 24h e envia as melhores oportunidades"
  },
  {
    number: "04",
    icon: HandshakeIcon,
    title: "Faça seu lance",
    description: "Acesse o link do leilão e participe com todas as informações necessárias"
  }
];

export const HowItWorksSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531996908287?text=Olá! Gostaria de saber como funciona o serviço de alertas.", "_blank");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos simples você começará a receber as melhores oportunidades de investimento
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-button">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};