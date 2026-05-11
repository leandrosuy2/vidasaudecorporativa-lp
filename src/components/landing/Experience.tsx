import { Bed, Utensils, Users, Sparkles, Mountain } from "lucide-react";
import experienceImg from "@/assets/experience.jpg";

const items = [
  { icon: Bed, title: "Hospedagem premium", text: "Suítes exclusivas em meio à serra, com conforto e privacidade." },
  { icon: Utensils, title: "Gastronomia consciente", text: "Menu funcional assinado por chef especializado em alta performance." },
  { icon: Users, title: "Networking de alto nível", text: "Conexões reais com líderes, empreendedores e profissionais selecionados." },
  { icon: Sparkles, title: "Mentorias 1:1", text: "Sessões individuais com facilitadores referência em desenvolvimento humano." },
  { icon: Mountain, title: "Atividades imersivas", text: "Trilhas, meditação, círculos e práticas corporais que mexem com você." },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-28 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-cta font-semibold uppercase tracking-[0.25em] text-xs">A experiência</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
            Cada detalhe pensado para a sua transformação.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-elegant min-h-[420px]">
            <img
              src={experienceImg}
              alt="Jantar elegante ao pôr do sol em retiro premium"
              loading="lazy"
              width={1400}
              height={900}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-display text-2xl font-bold">Um cenário que convida ao reencontro.</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {items.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:-translate-y-1 hover:shadow-card transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-gradient-green text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
