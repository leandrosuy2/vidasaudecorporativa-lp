import { motion } from "framer-motion";
import doutoraImg from "@/public/images/doutora.png";

const navTop =
  "pt-[calc(var(--landing-nav-h)+1rem)] scroll-mt-[calc(var(--landing-nav-h)+0.75rem)]";

export function Hero() {
  return (
    <section
      id="top"
      className={`relative z-0 flex min-h-dvh flex-col overflow-x-clip bg-[#060607] text-[#ece8e0] ${navTop}`}
    >
      <div className="bg-mesh-hero absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_200deg_at_70%_20%,rgba(198,166,74,0.07),transparent_55%,rgba(90,80,140,0.06),transparent_85%)]"
        aria-hidden
      />
      <div
        className="bg-premium-noise pointer-events-none absolute inset-0 opacity-90 mix-blend-overlay"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,rgba(0,0,0,0.35)_48%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-2xl bg-gradient-to-l from-[#c6a64a]/[0.07] to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-4 pb-0 sm:px-6 lg:px-8">
        <div className="flex min-h-0 flex-1 flex-col pt-6 sm:pt-8 lg:flex-row lg:items-stretch lg:gap-8 lg:pt-6 xl:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 flex shrink-0 flex-col lg:order-1 lg:min-h-0 lg:min-w-0 lg:flex-1 lg:justify-center lg:pb-1 lg:pr-2 xl:pr-4"
          >
              <p className="font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-[#dcc88a]/90 sm:text-xs">
                Empresas conscientes
              </p>
              <h1 className="font-elegant mt-2 text-[1.7rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.5rem] lg:text-[clamp(1.85rem,2.6vw,2.75rem)] xl:text-[2.85rem]">
                potencializam{" "}
                <span className="text-gradient-gold font-semibold">PESSOAS</span> que transformam{" "}
                <span className="text-gradient-gold font-semibold">RESULTADOS</span>
              </h1>
              <p className="font-display mt-3 text-base font-bold uppercase tracking-[0.1em] text-white/95 sm:mt-4 sm:text-lg lg:text-base">
                Transforme sua empresa
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/72 sm:text-base lg:text-[0.9375rem]">
                Vivências de alto impacto, método DNA e liderança emocionalmente madura para integrar
                pessoas, cultura e performance — com segurança psicológica e propósito.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4">
                <a
                  href="#contato"
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-gradient-to-r from-[#f0e4c4] via-[#c6a64a] to-[#9a7b3d] px-5 py-3 text-xs font-bold text-[#1a1510] shadow-[0_12px_36px_-10px_rgba(198,166,74,0.45)] transition-[filter,transform] hover:brightness-[1.06] active:scale-[0.99] sm:flex-none sm:px-8 sm:text-sm"
                >
                  Agende um diagnóstico gratuito
                </a>
                <a
                  href="#pilares"
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-white/20 px-5 py-3 text-xs font-medium text-white/90 transition-colors hover:border-[#c6a64a]/50 hover:text-[#e4cf8a] sm:flex-none sm:px-6 sm:text-sm"
                >
                  Ver pilares
                </a>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
            className="relative order-2 -mb-px flex min-h-0 flex-1 flex-col justify-end lg:order-2 lg:w-[min(440px,max(240px,36vw))] lg:max-w-[440px] lg:flex-none lg:shrink-0 lg:self-stretch lg:justify-end"
          >
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 h-[50%] w-[min(100%,320px)] max-w-full -translate-x-1/2 rounded-full bg-[#c6a64a]/15 blur-[56px] lg:left-auto lg:right-0 lg:h-[65%] lg:w-[min(100%,380px)] lg:translate-x-0"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-[#060607] to-transparent sm:h-[16%] lg:h-[12%]" />
              <img
                src={doutoraImg}
                alt="Talyta Leão — Grupo Vida"
                className="relative z-[1] mx-auto block h-auto w-auto max-h-[min(58dvh,480px)] max-w-full object-contain object-bottom sm:max-h-[min(62dvh,520px)] md:max-h-[min(65dvh,560px)] lg:mx-0 lg:ml-auto lg:max-h-[min(72dvh,600px)] lg:max-w-[min(100%,min(440px,42vw))] lg:object-[right_bottom] xl:max-h-[min(78dvh,640px)]"
                width={720}
                height={960}
                decoding="async"
                fetchPriority="high"
              />
          </motion.div>
        </div>

        <div className="relative z-20 mt-auto w-full shrink-0 px-0 pb-3 pt-0 sm:pb-4" aria-hidden>
          <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#dcc88a] via-45% via-[#c6a64a] via-55% to-transparent opacity-95 shadow-[0_0_16px_rgba(198,166,74,0.28)]" />
        </div>
      </div>
    </section>
  );
}
