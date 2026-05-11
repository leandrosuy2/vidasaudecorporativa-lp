import { Brain, Crown, Zap, Compass, HeartPulse, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Inteligência emocional", text: "Reconheça e gerencie emoções com clareza e maturidade." },
  { icon: Crown, title: "Liderança autêntica", text: "Inspire pessoas pela presença, não pela posição." },
  { icon: Zap, title: "Produtividade real", text: "Faça mais e melhor — sem sacrificar quem você é." },
  { icon: Compass, title: "Propósito de vida", text: "Encontre uma direção clara para seus próximos 10 anos." },
  { icon: HeartPulse, title: "Saúde mental", text: "Reduza ansiedade e construa um estado interno de calma ativa." },
  { icon: TrendingUp, title: "Alta performance", text: "Hábitos sustentáveis para resultados consistentes." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-cta font-semibold uppercase tracking-[0.25em] text-xs">O que você leva</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
            Seis transformações <span className="text-gradient-green">que ficam para a vida.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative bg-card rounded-3xl p-8 border border-border overflow-hidden hover:shadow-elegant transition-all duration-500"
            >
              <div className="absolute top-0 right-0 size-32 bg-gradient-green opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-500" />
              <div className="size-14 rounded-2xl bg-primary text-white flex items-center justify-center group-hover:bg-gradient-green transition-colors">
                <Icon className="size-7" />
              </div>
              <h3 className="mt-6 font-display font-bold text-xl text-primary">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
