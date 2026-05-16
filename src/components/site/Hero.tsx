import { motion } from "framer-motion";
import { useRef } from "react";
import LiquidEther from "./LiquidEther";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-screen items-center overflow-hidden noise px-6 pt-32 pb-20"
    >
      {/* Background animado */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <LiquidEther
          colors={["#5227FF", "#00D9FF", "#B497CF"]}
          mouseForce={12}
          cursorSize={70}
          isViscous={false}
          viscous={15}
          iterationsViscous={8}
          iterationsPoisson={12}
          resolution={0.28}
          isBounce={false}
          autoDemo
          autoSpeed={0.25}
          autoIntensity={1.2}
          takeoverDuration={0.25}
          autoResumeDelay={5000}
          autoRampDuration={0.8}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/70" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Luzes extras */}
      {/* Luzes extras */}
      <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-[280px] w-[280px] rounded-full bg-[radial-gradient(closest-side,oklch(0.78_0.16_215/0.20),transparent)] blur-3xl animate-float-slow sm:h-[420px] sm:w-[420px]" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.22_295/0.20),transparent)] blur-3xl animate-float-slow [animation-delay:-4s] sm:h-[480px] sm:w-[480px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur sm:text-xs sm:tracking-[0.18em]"
        >
          <span className="h-1 w-1 rounded-full bg-primary animate-pulse-glow" />
          Estúdio digital · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-[5.5rem]"
        >
          Tornamos ideias em <span className="text-gradient">experiências digitais</span>{" "}
          memoráveis.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg"
        >
          Sites modernos, performáticos e estratégicos para marcas que querem se destacar no
          digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <a
            href="#contato"
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-brand px-7 py-4 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.78_0.16_215/0.6)] transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-8"
          >
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,oklch(1_0_0/0.3),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
            Solicitar projeto
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#projetos"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-border bg-secondary/30 px-7 py-4 text-sm font-medium backdrop-blur transition hover:border-primary/40 hover:bg-secondary sm:w-auto sm:px-8"
          >
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-30 flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs md:gap-8"
        >
          <span>Performance</span>
          <span>·</span>
          <span>Design</span>
          <span>·</span>
          <span>Estratégia</span>
        </motion.div>
      </div>
      {/* DEGRADÊ */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
