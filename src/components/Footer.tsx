import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-whatsapp">
              Leilões BH
            </h3>
            <p className="text-background/80 mb-4">
              Automatização inteligente para leilões de imóveis da Caixa Econômica Federal na região de Belo Horizonte.
            </p>
            <div className="flex items-center gap-2 text-background/80">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: (31) 9690-8287</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Cidades Atendidas</h4>
            <ul className="space-y-2 text-background/80">
              <li>Belo Horizonte</li>
              <li>Contagem</li>
              <li>Lagoa Santa</li>
              <li>Nova Lima</li>
              <li>Pedro Leopoldo</li>
              <li>Raposos</li>
              <li>Ribeirão das Neves</li>
              <li>Santa Luzia</li>
              <li>Sete Lagoas</li>
              <li>Vespasiano</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre o Serviço</h4>
            <ul className="space-y-2 text-background/80">
              <li>Como funciona</li>
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
              <li>Suporte</li>
            </ul>
          </div>
        </div>

        <hr className="border-background/20 my-8" />
        
        <div className="text-center text-background/60">
          <p>&copy; 2024 Leilões BH. Serviço independente de automação - não afiliado à Caixa Econômica Federal.</p>
        </div>
      </div>
    </footer>
  );
};