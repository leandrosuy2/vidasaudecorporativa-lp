import { Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";
import logoVida from "@/public/images/logo_vida.png";

const quickLinks = [
  { label: "Pilares", href: "#pilares" },
  { label: "Projeto Integra", href: "#integra" },
  { label: "NR-1", href: "#nr1" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Vídeos", href: "#videos" },
  { label: "Projetos sociais", href: "#projetos-sociais" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060607] py-16 text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <a href="#top">
            <img
              src={logoVida}
              alt="VIDA"
              className="h-10 w-auto object-contain object-left opacity-95"
              width={160}
              height={40}
            />
          </a>
          <blockquote className="mt-6 max-w-md border-l-2 border-[#c6a64a]/50 pl-4 text-sm italic leading-relaxed text-white/60">
            &ldquo;Amar a Deus sobre todas as coisas e o próximo como a ti mesmo.&rdquo;
            <footer className="mt-2 text-xs not-italic text-[#c6a64a]/80">Mt 22, 34–40</footer>
          </blockquote>
          <div className="mt-6 flex gap-3">
            {[Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-[#c6a64a] hover:text-[#1a1510]"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-white">Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-[#e4cf8a]">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="transition-colors hover:text-[#e4cf8a]">
                Política de privacidade
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[#e4cf8a]">
                Termo de uso
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-white">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-[#c6a64a]" /> contato@vidasaudecorporativa.com.br
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-[#c6a64a]" /> +55 83 9 9999 9999
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-8 text-center text-xs text-white/40 lg:px-10">
        © 2022 — Todos os direitos reservados · Grupo Vida
      </div>
    </footer>
  );
}
