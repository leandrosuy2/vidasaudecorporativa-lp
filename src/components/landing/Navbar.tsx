import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoVida from "@/public/images/logo_vida.png";

const links = [
  { label: "Pilares", href: "#pilares" },
  { label: "Projeto Integra", href: "#integra" },
  { label: "NR-1", href: "#nr1" },
  { label: "Método", href: "#metodo" },
  { label: "Talyta", href: "#talyta" },
  { label: "Marcas", href: "#marcas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Vídeos", href: "#videos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bar =
    scrolled || open
      ? "bg-[#0a0a0c]/94 backdrop-blur-xl border-b border-white/[0.08]"
      : "bg-[#060607]/65 backdrop-blur-md border-b border-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bar}`}>
      <div className="mx-auto flex h-[var(--landing-nav-h)] min-h-[var(--landing-nav-h)] max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:px-10">
        <a href="#top" className="shrink-0 py-1" onClick={() => setOpen(false)}>
          <img
            src={logoVida}
            alt="VIDA"
            className="h-9 w-auto object-contain object-left sm:h-10"
            width={168}
            height={42}
          />
        </a>

        <nav className="hidden items-center gap-4 text-[13px] font-medium tracking-wide xl:gap-5 min-[1200px]:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative whitespace-nowrap text-[#c9a85c] transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-[#f5ecd4] after:via-[#dcc88a] after:to-[#b8942e] after:transition-transform after:duration-200 hover:text-[#f8efd4] hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contato"
            className="hidden rounded-md bg-gradient-to-r from-[#f0e4c4] via-[#c6a64a] to-[#9a7b3d] px-4 py-2 text-xs font-bold text-[#1a1510] shadow-md transition-[filter] hover:brightness-105 sm:inline-flex sm:px-5 sm:text-sm"
          >
            Diagnóstico gratuito
          </a>
          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-[#dcc88a] transition-colors hover:text-[#f8efd4] min-[1200px]:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto border-t border-white/10 bg-[#0a0a0c]/98 px-4 py-4 min-[1200px]:hidden">
          <nav className="flex flex-col gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg border-l-2 border-transparent px-3 py-3 text-base font-medium tracking-wide text-[#dcc88a] transition-colors hover:border-[#c6a64a] hover:bg-[#c6a64a]/[0.08] hover:text-[#f8efd4]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f0e4c4] via-[#c6a64a] to-[#9a7b3d] px-4 py-3 text-sm font-bold text-[#1a1510]"
              onClick={() => setOpen(false)}
            >
              Agendar diagnóstico gratuito
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
