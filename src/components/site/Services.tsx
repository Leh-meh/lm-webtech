import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Criação de Sites",
    desc: "Sites modernos, profissionais e responsivos para fortalecer sua presença digital.",
    icon: (
      <path
        d="M4 6h16M4 12h16M4 18h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Landing Pages",
    desc: "Páginas estratégicas desenvolvidas para aumentar conversões e captar clientes.",
    icon: (
      <path
        d="M4 21V8l8-5 8 5v13M9 21v-7h6v7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Portfólios Profissionais",
    desc: "Projetos elegantes para destacar seu trabalho e transmitir credibilidade.",
    icon: (
      <path
        d="M3 7h18M3 7l2-3h14l2 3M5 7v13h14V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Identidade Visual",
    desc: "Elementos visuais que fortalecem sua marca e criam reconhecimento.",
    icon: (
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18" stroke="currentColor" strokeWidth="1.5" />
    ),
  },
  {
    title: "Sites Responsivos",
    desc: "Experiência perfeita em celulares, tablets e computadores.",
    icon: (
      <path
        d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Suporte & Manutenção",
    desc: "Atualizações, melhorias e suporte contínuo para manter seu site sempre funcionando.",
    icon: (
      <path
        d="M12 8v4l3 3M12 3a9 9 0 100 18 9 9 0 000-18z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-28 lg:py-32">
      {" "}
      {/* ⭐ ALTERADO */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {" "}
        {/* ⭐ ALTERADO */}
        {/* HEADER */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {" "}
          {/* ⭐ ALTERADO */}
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                Soluções digitais <span className="text-gradient">para sua marca</span>.
              </>
            }
          />
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
            {" "}
            {/* ⭐ ALTERADO */}
            Desenvolvemos experiências digitais modernas que unem design, tecnologia e estratégia
            para destacar sua empresa no mercado.
          </p>
        </div>
        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {" "}
          {/* ⭐ ALTERADO */}
          {services.map((s, i) => (
            <motion.a
              href="#contato"
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,180,255,0.12)]" // ⭐ ALTERADO
            >
              {/* efeito */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-[radial-gradient(closest-side,oklch(0.78_0.16_215/0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />{" "}
              {/* ⭐ ALTERADO */}
              {/* icon */}
              <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-border bg-secondary/40 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40">
                {" "}
                {/* ⭐ ALTERADO */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {s.icon}
                </svg>
              </div>
              {/* title */}
              <h3 className="relative mt-5 text-lg sm:text-xl font-semibold tracking-tight">
                {" "}
                {/* ⭐ ALTERADO */}
                {s.title}
              </h3>
              {/* desc */}
              <p className="relative mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {" "}
                {/* ⭐ ALTERADO */}
                {s.desc}
              </p>
              {/* CTA */}
              <div className="relative mt-6 flex items-center gap-2 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {" "}
                {/* ⭐ ALTERADO */}
                Solicitar projeto
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
