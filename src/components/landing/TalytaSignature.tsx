const stats = [
  { value: "+22 mil", label: "Vidas transformadas" },
  { value: "+24 anos", label: "Desenvolvimento humano" },
  { value: "+80", label: "Empresas impactadas" },
];

export function TalytaSignature() {
  return (
    <section id="talyta" className="border-t border-[#e0d9cc] bg-[#f7f4ec] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="font-elegant text-3xl font-semibold italic text-[#6b5a2e] sm:text-[2.25rem]">
            Liderar é sobre propósito e consciência
          </h2>
          <p className="mt-4 text-sm text-[#5c574d] sm:text-base">Psicóloga — CRP 04/71806</p>
          <p className="mt-1 text-sm font-medium text-[#3d3a34] sm:text-base">
            Criadora do método DNA · Founder Grupo Vida · Vida Saúde Corporativa
          </p>
          <p className="mt-10 font-display text-xl font-bold text-[#1a1a1c] sm:text-2xl">
            Talyta Leão
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#e0d9cc] bg-[#fdfcfa] px-6 py-8 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold text-[#6b5a2e] sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5c574d]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
