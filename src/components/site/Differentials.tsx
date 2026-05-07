import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { k: "Estratégia", v: "Cada pixel pensado para gerar resultado." },
  { k: "Design moderno", v: "Linguagem visual atemporal e refinada." },
  { k: "Conversão", v: "Sites pensados para converter visitantes em clientes." },
  { k: "Performance", v: "Carregamento rápido em qualquer dispositivo." },
  { k: "Responsividade", v: "Experiência impecável em todas as telas." },
  { k: "Premium", v: "Atenção obsessiva aos menores detalhes." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,90,255,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Diferenciais"
          title={
            <>
              Por que escolher a <span className="text-gradient">LM WebTech</span>.
            </>
          }
          description="Não entregamos sites, entregamos experiências que carregam a essência da sua marca."
        />

        <div className="mt-16 relative">
          {/* linha central */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 hidden md:block" />

          {/* mais compacto */}
          <div className="space-y-12 md:space-y-14">
            {items.map((it, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={it.k}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className={`flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="relative w-full md:w-[47%]">
                    <div
                      className="
                        glass relative rounded-3xl p-7
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_0_40px_rgba(120,90,255,0.14)]
                      "
                    >
                      {/* número fundo mais suave */}
                      <span className="absolute -top-5 -left-3 text-6xl font-bold text-white/5 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-primary">
                        <span className="h-px w-7 bg-primary" />
                        diferencial
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold">
                        {it.k}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {it.v}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}