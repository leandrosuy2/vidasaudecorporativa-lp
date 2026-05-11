import { LandingImg } from "@/components/landing/LandingImg";
import type { LandingImgKey } from "@/lib/landingMedia";

const pillars: {
  title: string;
  body: string;
  img: LandingImgKey;
  alt: string;
}[] = [
  {
    title: "Capacitação de liderança",
    body: "Lidere com propósito, potencialize pessoas. Desperte potenciais que sustentam resultados extraordinários. O próximo nível começa aqui!",
    img: "pillarLideranca",
    alt: "Capacitação de liderança",
  },
  {
    title: "Comunicação consciente",
    body: "Construa diálogos que sustentam confiança mapeando os perfis da sua equipe. A evolução da sua cultura começa aqui!",
    img: "pillarComunicacao",
    alt: "Comunicação consciente",
  },
  {
    title: "Segurança psicológica",
    body: "Atenda a Lei NR-1 de saúde biopsicossocial promovendo melhor desempenho. A integridade do seu negócio começa aqui!",
    img: "pillarSeguranca",
    alt: "Segurança psicológica",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="bg-[#08090c] pb-16 pt-10 text-white sm:pb-20 sm:pt-14 md:pt-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <h2 className="text-center font-elegant text-3xl font-semibold tracking-tight text-[#e4cf8a] sm:text-4xl md:text-[2.35rem]">
          Os pilares que irão transformar sua empresa
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/75 sm:text-lg">
          Crie um ambiente emocionalmente sustentável, alinhado ao propósito e à performance da sua
          organização.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1016] shadow-[0_24px_64px_-32px_rgba(0,0,0,0.8)] transition-[border-color,transform] hover:-translate-y-0.5 hover:border-[#c6a64a]/35"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#14151c]">
                <LandingImg
                  name={p.img}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1016] via-transparent to-transparent opacity-90" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[#e4cf8a] sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/72 sm:text-[0.9375rem]">
                  {p.body}
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex w-fit items-center text-sm font-semibold uppercase tracking-[0.18em] text-[#c6a64a] transition-colors hover:text-[#f0e4c4]"
                >
                  Saiba mais
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
