import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { k: "Estratégia", v: "Cada decisão guiada por resultado real." },
  { k: "Design moderno", v: "Visual limpo, sofisticado e atemporal." },
  { k: "Conversão", v: "Sites feitos para transformar visitantes em clientes." },
  { k: "Performance", v: "Carregamento rápido e otimizado." },
  { k: "Responsividade", v: "Perfeito em qualquer dispositivo." },
  { k: "Premium", v: "Detalhes que elevam a percepção da marca." },
];

export function Differentials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getItemStyle = (i: number) => {
    const diff = i - index;

    if (diff === 0) {
      return "opacity-100 scale-100 z-20 blur-0";
    }
    if (diff === 1 || diff === -items.length + 1) {
      return "opacity-40 scale-90 translate-x-20 blur-sm z-10";
    }
    if (diff === -1 || diff === items.length - 1) {
      return "opacity-40 scale-90 -translate-x-20 blur-sm z-10";
    }

    return "opacity-0 scale-75 z-0";
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Diferenciais"
          title={
            <>
              Experiência que define a <span className="text-gradient">LM WebTech</span>
            </>
          }
          description="Cada detalhe pensado para gerar percepção de valor."
        />

        <div className="mt-24 relative flex items-center justify-center h-[320px]">
          <AnimatePresence mode="wait">
            {items.map((it, i) => (
              <motion.div
                key={it.k}
                className={`absolute w-full max-w-xl transition-all duration-700 ${getItemStyle(i)}`}
              >
                <div className="glass rounded-3xl p-10 text-center">
                  <div className="text-xs uppercase tracking-[0.3em] text-primary">diferencial</div>

                  <h3 className="mt-4 text-3xl font-semibold">{it.k}</h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.v}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* indicador simples */}
          <div className="absolute bottom-0 flex gap-2">
            {items.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full transition ${
                  i === index ? "bg-primary" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
