import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contato" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-8 py-20 text-center md:px-16 md:py-28 noise"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
            <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.55_0.2_260/0.4),transparent)] blur-3xl animate-float-slow" />
            <div className="absolute -right-32 top-1/3 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,oklch(0.65_0.22_295/0.35),transparent)] blur-3xl animate-float-slow [animation-delay:-3s]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(closest-side,oklch(0.78_0.16_215/0.2),transparent)] blur-3xl" />
          </div>

          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            Vamos criar algo memorável
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Sua próxima grande <span className="text-gradient">presença digital</span> começa aqui.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Conte sua ideia. Entregamos um projeto sob medida, sofisticado e pronto para impressionar.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contato@lmwebtech.com"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_10px_50px_-10px_oklch(0.78_0.16_215/0.7)] transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,oklch(1_0_0/0.3),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
              Iniciar projeto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary/40 px-8 py-4 text-sm font-medium backdrop-blur transition hover:border-primary/40"
            >
              Conversar com a equipe
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
