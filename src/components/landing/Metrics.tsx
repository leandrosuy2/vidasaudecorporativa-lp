import { useEffect, useRef, useState } from "react";

const items = [
  { value: 10000, suffix: "+", label: "Pessoas impactadas" },
  { value: 20, suffix: " anos", label: "De experiência" },
  { value: 500, suffix: "+", label: "Empresas atendidas" },
  { value: 98, suffix: "%", label: "Satisfação" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1800;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.floor(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section id="numeros" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {items.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-display text-4xl md:text-6xl font-extrabold text-primary">
                <Counter to={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
