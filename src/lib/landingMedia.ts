/**
 * Imagens da landing: `LANDING_IMG` usa URLs completas para carregar sempre.
 * Quando tiveres os ficheiros em `public/images/` (raiz do projeto), podes trocar
 * cada entrada para `"/images/nome-do-ficheiro.jpg"` — o Vite serve isso em build.
 *
 * Nomes sugeridos se copiares os originais:
 * pillar-lideranca.jpg, pillar-comunicacao.jpg, pillar-seguranca.jpg,
 * metodo-grupo.png, vida360.png, depo-*.jpg, marcas-header.png,
 * projetos-hero.jpg, cta-voce.jpg
 */

export const LANDING_IMG = {
  pillarLideranca:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  pillarComunicacao:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  pillarSeguranca:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  metodoGrupo:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  vida360:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
  depoLeopoldo:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  depoHugo:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  depoMichelle:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  depoMarcella:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  marcasHeader:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  projetosHero:
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
  ctaVoce:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
} as const;

export type LandingImgKey = keyof typeof LANDING_IMG;

/** Segunda tentativa (outro host) se a principal falhar. */
export const LANDING_IMG_FALLBACK: Record<LandingImgKey, string> = {
  pillarLideranca: "https://picsum.photos/seed/vida-pillar-lideranca/900/600",
  pillarComunicacao: "https://picsum.photos/seed/vida-pillar-comunicacao/900/600",
  pillarSeguranca: "https://picsum.photos/seed/vida-pillar-seguranca/900/600",
  metodoGrupo: "https://picsum.photos/seed/vida-metodo-grupo/1200/800",
  vida360: "https://picsum.photos/seed/vida360/600/600",
  depoLeopoldo: "https://picsum.photos/seed/vida-depo-leopoldo/400/400",
  depoHugo: "https://picsum.photos/seed/vida-depo-hugo/400/400",
  depoMichelle: "https://picsum.photos/seed/vida-depo-michelle/400/400",
  depoMarcella: "https://picsum.photos/seed/vida-depo-marcella/400/400",
  marcasHeader: "https://picsum.photos/seed/vida-marcas/1400/400",
  projetosHero: "https://picsum.photos/seed/vida-projetos-hero/1200/700",
  ctaVoce: "https://picsum.photos/seed/vida-cta/900/600",
};
