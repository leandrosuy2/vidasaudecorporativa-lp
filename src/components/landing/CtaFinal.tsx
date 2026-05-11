import { LandingImg } from "@/components/landing/LandingImg";

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-[#e0d9cc] bg-[#efe9dd] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-0 size-[420px] rounded-full bg-[#c6a64a]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-16 lg:px-10">
        <div>
          <h2 className="font-elegant text-3xl font-semibold text-[#6b5a2e] sm:text-4xl">
            Nós queremos ouvir você
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#45423c] sm:text-lg">
            <p>
              A transformação que você leu até aqui só funciona quando é desenhada com base no que
              sua organização realmente precisa. Ao invés de oferecer pacotes prontos, começamos com
              uma conversa estratégica, onde mapeamos o seu momento atual, entendemos seus desafios e
              traçamos, juntos, a melhor jornada de transformação.
            </p>
            <p>
              Essa primeira conversa já vai te trazer clareza, e a partir dela, você escolhe seguir
              ou não com a gente.
            </p>
          </div>
          <a
            href="#contato"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f0e4c4] via-[#c6a64a] to-[#9a7b3d] px-10 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1a1510] shadow-lg transition-[filter] hover:brightness-105"
          >
            Agende um diagnóstico gratuito
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#e0d9cc] bg-[#fdfcfa] shadow-lg">
          <LandingImg
            name="ctaVoce"
            alt="Conversa estratégica Grupo Vida"
            className="aspect-[4/5] w-full object-cover sm:aspect-auto sm:max-h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
