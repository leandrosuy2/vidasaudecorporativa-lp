import { LandingImg } from "@/components/landing/LandingImg";

export function SocialProjects() {
  return (
    <section
      id="projetos-sociais"
      className="border-t border-white/[0.06] bg-[#0c0d11] py-20 text-white sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
          <LandingImg
            name="projetosHero"
            alt="Projetos sociais"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-elegant text-3xl font-semibold text-[#e4cf8a] sm:text-4xl">
            Projetos sociais
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/78 sm:text-lg">
            Ao participar de nossos eventos, você contribui com o <span className="text-[#e4cf8a]">Projeto EAI</span>.
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            O Projeto EAI ajuda a restaurar a saúde de pessoas em situação de violência e
            vulnerabilidade, por meio de bolsas gratuitas que disponibilizamos em nossas
            capacitações.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-[#c6a64a]/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#e4cf8a] transition-colors hover:bg-[#c6a64a]/10"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}
