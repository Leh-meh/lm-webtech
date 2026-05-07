import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-screen items-center overflow-hidden noise pt-32"
    >
      {/* Background art */}
      <motion.div
        style={{ y, scale, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70 animate-wave-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </motion.div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,oklch(0.78_0.16_215/0.35),transparent)] blur-2xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.22_295/0.35),transparent)] blur-3xl animate-float-slow [animation-delay:-4s]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
        >
          <span className="h-1 w-1 rounded-full bg-primary animate-pulse-glow" />
          Estúdio digital · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
        >
          Tornamos ideias em{" "}
          <span className="text-gradient">experiências digitais</span>{" "}
          memoráveis.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground"
        >
          Sites modernos, performáticos e estratégicos para marcas que querem
          se destacar no digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.78_0.16_215/0.6)] transition-transform hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,oklch(1_0_0/0.3),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
            Solicitar projeto
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary/30 px-8 py-4 text-sm font-medium backdrop-blur transition hover:border-primary/40 hover:bg-secondary"
          >
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-24 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-border" />
            
          </div>
          <span>·</span>
          <div>Performance</div>
          <span>·</span>
          <div>Design</div>
          <span>·</span>
          <div className="hidden md:block">Estratégia</div>
        </motion.div>
      </div>
    </section>
  );
}
