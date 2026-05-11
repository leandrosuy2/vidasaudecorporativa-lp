import { CheckCircle2 } from "lucide-react";

const pains = [
  "Sente que está estagnado profissionalmente apesar de tanto esforço?",
  "Deseja melhorar relacionamentos pessoais e construir conexões reais?",
  "Quer evoluir financeiramente sem sacrificar sua saúde mental?",
  "Sente uma desconexão entre o que faz e o que realmente importa?",
  "Busca mais clareza, propósito e equilíbrio no dia a dia?",
  "Está pronto para parar de adiar a sua melhor versão?",
];

export function Pains() {
  return (
    <section id="identificacao" className="py-28 bg-gradient-deep text-white relative overflow-hidden grain">
      <div className="absolute -top-40 -right-40 size-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-cta/20 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent-bright font-semibold uppercase tracking-[0.25em] text-xs">Você se identifica?</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-display font-bold leading-tight">
            Talvez o problema não seja <span className="text-gradient-green">você</span>.
            <br />
            Seja o seu <span className="italic text-white/80">ambiente</span>.
          </h2>
          <p className="mt-6 text-white/70 text-lg">
            Marque mentalmente quantas dessas frases ressoam com você agora.
          </p>
        </div>

        <ul className="mt-14 grid md:grid-cols-2 gap-4">
          {pains.map((p) => (
            <li
              key={p}
              className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 className="size-6 text-accent-bright shrink-0 mt-0.5" />
              <span className="text-white/90 leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
