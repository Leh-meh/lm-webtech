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
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // ⭐ ALTERADO (RESPONSIVO)
  const getItemStyle = (i: number) => {
    const diff = i - index;

    if (diff === 0) {
      return "opacity-100 scale-100 z-20 blur-0";
    }

    if (diff === 1 || diff === -items.length + 1) {
      return "opacity-40 scale-90 translate-x-10 md:translate-x-20 blur-sm z-10";
    }

    if (diff === -1 || diff === items.length - 1) {
      return "opacity-40 scale-90 -translate-x-10 md:-translate-x-20 blur-sm z-10";
    }

    return "opacity-0 scale-75 z-0";
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {" "}
      {/* ⭐ ALTERADO */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {" "}
        {/* ⭐ ALTERADO */}
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
        {/* CONTAINER */}
        <div className="mt-16 md:mt-24 relative flex items-center justify-center h-[240px] sm:h-[280px] md:h-[320px]">
          {" "}
          {/* ⭐ ALTERADO */}
          <AnimatePresence mode="wait">
            {items.map((it, i) => (
              <motion.div
                key={it.k}
                className={`absolute w-full max-w-[90%] sm:max-w-xl mx-auto transition-all duration-500 ${getItemStyle(i)}`} // ⭐ ALTERADO
              >
                <div className="glass rounded-3xl p-6 sm:p-8 md:p-10 text-center">
                  {" "}
                  {/* ⭐ ALTERADO */}
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary">
                    {" "}
                    {/* ⭐ ALTERADO */}
                    diferencial
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold">
                    {" "}
                    {/* ⭐ ALTERADO */}
                    {it.k}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {" "}
                    {/* ⭐ ALTERADO */}
                    {it.v}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {/* INDICADOR */}
          <div className="absolute bottom-0 flex gap-2">
            {items.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-5 sm:w-6 rounded-full transition ${
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
