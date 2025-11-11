import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Clock } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";

export const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5531996908287?text=Olá! Gostaria de saber mais sobre o serviço de automação de leilões de imóveis.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Leilões da Caixa • Belo Horizonte</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Receba
            <span className="bg-gradient-to-r from-whatsapp to-whatsapp-light bg-clip-text text-transparent"> Alertas </span>
            de Imóveis em Leilão no
            <span className="block">WhatsApp</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Monitore casas em leilão da Caixa Econômica Federal e receba alertas de atualizações de preços automaticamente! Assinatura Anual <span className="font-bold text-whatsapp-light">R$ 9,99</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-4 h-auto"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Começar Agora no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/40 text-primary-foreground hover:bg-white/20 bg-white/10"
            >
              <Clock className="h-5 w-5 mr-2" />
              Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Imóveis Monitorados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Monitoramento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80">Cidades de BH</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
