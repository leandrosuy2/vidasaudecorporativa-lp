import { LandingImg } from "@/components/landing/LandingImg";

const logos = ["Santander", "Honda", "Aliança", "TJPB", "CDL", "CRECI", "Alliance", "Grupo Vida"];

export function PartnersCert() {
  return (
    <section id="marcas" className="border-t border-[#e0d9cc] bg-[#efe9dd] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-xl border border-[#e0d9cc] bg-[#fdfcfa] shadow-sm">
          <LandingImg
            name="marcasHeader"
            alt="Marcas e atuação"
            className="max-h-72 w-full object-cover object-center"
          />
        </div>
        <p className="mx-auto max-w-3xl text-center font-elegant text-xl text-[#3d3a34] sm:text-2xl">
          Marcas que escolheram crescer com mais consciência, saúde e resultado.
        </p>

        <div className="relative mt-10 overflow-hidden border-y border-[#e0d9cc]/80 py-8">
          <div className="flex marquee gap-16 w-max opacity-70">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="font-display text-2xl font-bold tracking-wider text-[#6b5a2e]/40 md:text-3xl"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[#c6a64a]/35 bg-[#fdfcfa] p-8 shadow-[0_20px_60px_-40px_rgba(107,90,46,0.35)] sm:p-10">
          <h3 className="text-center font-display text-lg font-bold uppercase tracking-[0.12em] text-[#6b5a2e] sm:text-xl">
            Certificação Empresa Saudável
          </h3>
          <p className="mt-5 text-center text-sm leading-relaxed text-[#45423c] sm:text-base">
            Oferecemos aos nossos clientes e parceiros as capacitações para obtenção do selo Empresa
            Saudável, certificando ações de cuidado humano e promovendo saúde, cultura da paz e uma
            nova consciência às pessoas e organizações, em congruência com as ODS.
          </p>
        </div>
      </div>
    </section>
  );
}
