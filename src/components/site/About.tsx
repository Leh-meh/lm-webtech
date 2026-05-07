import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    n: "01",
    t: "Design moderno",
    d: "Interfaces limpas, atemporais e construídas com olhar artístico.",
  },
  {
    n: "02",
    t: "Experiência",
    d: "Cada interação pensada para guiar, encantar e converter.",
  },
  {
    n: "03",
    t: "Performance",
    d: "Sites rápidos, leves e otimizados para todos os dispositivos.",
  },
  {
    n: "04",
    t: "Presença digital",
    d: "Posicionamento estratégico para sua marca crescer no digital.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Sobre"
          title={
            <>
              Um estúdio digital que <span className="text-gradient">une arte e tecnologia</span>.
            </>
          }
          description="Na LM WebTech, criamos experiências web sob medida. Combinamos design refinado, código limpo e estratégia para entregar projetos que conectam marcas e pessoas."
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card p-8 transition-colors hover:bg-secondary/40"
            >
              <div className="text-xs font-mono text-primary">{p.n}</div>
              <h3 className="mt-6 text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.d}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
