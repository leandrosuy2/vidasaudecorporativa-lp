import { LandingImg } from "@/components/landing/LandingImg";

export function MethodBio() {
  return (
    <section id="metodo" className="border-t border-white/[0.06] bg-[#08090c] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12141c] shadow-2xl">
          <LandingImg
            name="metodoGrupo"
            alt="Método e atuação Grupo Vida"
            className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:min-h-[320px]"
          />
        </div>
        <div className="space-y-6 text-base leading-relaxed text-white/78 sm:text-lg">
          <p>
            O novo mundo corporativo exige uma liderança emocionalmente madura, capaz de comunicar
            com empatia, tomar decisões conscientes e construir relações sustentáveis consigo, com os
            outros e com o ambiente.
          </p>
          <p>
            Talyta Leão criou um método exclusivo para empresas e lideranças que querem transformar o
            clima organizacional de dentro para fora. Unindo neurociência, comportamento humano,
            comunicação não violenta e gestão emocional, ela ajuda empresas a cumprirem a legislação,
            sem perder a alma.
          </p>
          <p>
            Com mais de 24 anos de atuação e passagens por gigantes como Santander, Honda e Aliança,
            Talyta Leão é a estrategista por trás de transformações profundas na cultura de liderança
            no Brasil. Psicóloga, empresária e criadora do Método DNA, ela desenvolveu uma tecnologia
            humana para líderes que entenderam que superar a própria história é o único caminho para
            governar o futuro.
          </p>
        </div>
      </div>
    </section>
  );
}
