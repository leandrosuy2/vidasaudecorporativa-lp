import { Quote } from "lucide-react";
import { LandingImg } from "@/components/landing/LandingImg";
import type { LandingImgKey } from "@/lib/landingMedia";

const items: {
  name: string;
  role: string;
  city: string;
  text: string;
  img: LandingImgKey;
}[] = [
  {
    name: "Leopoldo Torres",
    role: "Advogado e empresário",
    city: "João Pessoa — PB",
    text: "Sempre me considerei racional e crítico, mas fui surpreendido e superei minhas expectativas. Após a mentoria com Talyta Leão, pude perceber meus principais valores, reagindo de forma assertiva aos acontecimentos, trazendo um novo propósito às minhas escolhas. Obtive resultados incríveis no campo pessoal e profissional.",
    img: "depoLeopoldo",
  },
  {
    name: "Hugo Montenegro",
    role: "CEO Alliance",
    city: "Recife — PB",
    text: "Talyta Leão desenvolveu um trabalho para as lideranças da Alliance abordando temas essenciais para a compreensão da importância de habilidades como comunicação assertiva, autoconhecimento, trabalho em equipe, inteligência emocional e empatia.",
    img: "depoHugo",
  },
  {
    name: "Michelle Amaral",
    role: "Médica obstetra",
    city: "Natal — RN",
    text: "Sem palavras para explicar o quanto foi importante em minha vida tudo o que vivenciei com meu processo evolutivo. Hoje sei o quanto é importante cuidar de mim, para que minha família, minha profissão e minhas realizações estejam alinhados. Sou imensamente grata a esta profissional fantástica.",
    img: "depoMichelle",
  },
  {
    name: "Marcella Ortiga",
    role: "Gerente de gente",
    city: "Brasília — DF",
    text: "Os processos de capacitação foram essenciais em minha carreira e minha vida. Já realizei muitos cursos e treinamentos, mas sou encantada com a entrega e a capacitação de Talyta Leão. Recomendo e considero ela como uma das maiores autoridades do desenvolvimento humano, pois ela consegue encantar pela leveza e ao mesmo tempo pela segurança que transmite nas técnicas.",
    img: "depoMarcella",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden border-t border-[#e0d9cc] bg-[#f7f4ec] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(100%,720px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(198,166,74,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-xl">
          <LandingImg
            name="vida360"
            alt="Vida 360"
            className="mx-auto max-h-24 w-auto object-contain"
          />
        </div>
        <div className="text-center">
          <h2 className="font-elegant text-3xl font-semibold text-[#6b5a2e] sm:text-4xl">
            Depoimento de líderes de todo o país
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-[#e0d9cc] bg-[#fdfcfa] p-6 shadow-sm sm:p-8"
            >
              <Quote className="size-9 shrink-0 text-[#c6a64a]/80" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#45423c] sm:text-[0.9375rem]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-[#efe9dd] pt-6">
                <LandingImg
                  name={t.img}
                  alt={t.name}
                  className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[#c6a64a]/30"
                />
                <div>
                  <p className="font-display font-bold text-[#1a1a1c]">{t.name}</p>
                  <p className="text-sm text-[#6b5a2e]">{t.role}</p>
                  <p className="text-xs text-[#5c574d]">{t.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#6b5a2e]">
          Um pouco do nosso servir
        </p>
      </div>
    </section>
  );
}
