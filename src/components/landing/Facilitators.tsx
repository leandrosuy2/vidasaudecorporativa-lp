import { Award } from "lucide-react";
import f1 from "@/assets/facilitator-1.jpg";
import f2 from "@/assets/facilitator-2.jpg";

const list = [
  {
    img: f1,
    name: "Dr. Eduardo Vasconcelos",
    role: "Mentor-chefe & Psicólogo Clínico",
    bio: "20 anos guiando líderes em transição. Mestre em psicologia positiva pela USP, autor de três best-sellers sobre desenvolvimento humano.",
    tags: ["Psicologia Positiva", "Liderança", "Coaching ICF"],
  },
  {
    img: f2,
    name: "Carolina Ribeiro",
    role: "Facilitadora de Inteligência Emocional",
    bio: "Especialista em neurociência aplicada e práticas integrativas. Já facilitou imersões para mais de 4 mil executivos no Brasil e na Europa.",
    tags: ["Neurociência", "Mindfulness", "Somatic Experiencing"],
  },
];

export function Facilitators() {
  return (
    <section id="facilitadores" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-cta font-semibold uppercase tracking-[0.25em] text-xs">Quem te guia</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-display font-bold text-primary leading-tight">
            Mentores referência em desenvolvimento humano.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {list.map((p) => (
            <article
              key={p.name}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-500"
            >
              <div className="grid sm:grid-cols-5">
                <div className="sm:col-span-2 relative aspect-[4/5] sm:aspect-auto overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="sm:col-span-3 p-8 flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-primary">{p.name}</h3>
                  <p className="text-accent font-semibold mt-1">{p.role}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-surface border border-border text-primary">
                        <Award className="size-3 text-accent" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
