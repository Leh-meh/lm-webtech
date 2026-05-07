import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote:
      "A LM WebTech entregou muito mais do que um site — entregou identidade. Cada detalhe respira a essência da nossa marca.",
    name: "Camila Andrade",
    role: "Fundadora, Aurora Studio",
  },
  {
    quote:
      "Profissionalismo do início ao fim. O processo foi leve, estratégico e o resultado superou nossas expectativas.",
    name: "Rafael Monteiro",
    role: "CEO, Nimbus Tech",
  },
  {
    quote:
      "Performance impecável e design refinado. Recebemos elogios todos os dias desde o lançamento.",
    name: "Marina Lopes",
    role: "Diretora, Maison Noir",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              O que dizem <span className="text-gradient">sobre nós</span>.
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4M19 7h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <blockquote className="mt-6 text-base leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-6">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
