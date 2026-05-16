import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

import p1 from "@/assets/monteiros.png";
import p2 from "@/assets/obpc.png";
import p3 from "@/assets/sorriso.png";
import p4 from "@/assets/arquitetura.png";

const projects = [
  {
    img: p1,
    title: "Monteiros Eletrica",
    tag: "Cartão Digital · Negócios",
    year: "2026",
    link: "https://monteiros-eletrica.vercel.app/",
  },
  {
    img: p2,
    title: "OBPC - Igreja",
    tag: "Site Institucional · Igreja",
    year: "2026",
    link: "https://obpc-bm.vercel.app/",
  },
  {
    img: p3,
    title: "Golden Smile",
    tag: "Landing Page · Odontologia",
    year: "2026",
    link: "https://golden-smile.vercel.app/",
  },
  {
    img: p4,
    title: "Arqstudio",
    tag: "Site Institucional · Arquitetura",
    year: "2026",
    link: "https://arqstudio-seven.vercel.app/",
    position: "object-[5%_center]",
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projetos" className="relative py-16 md:py-24 lg:py-32">
      {" "}
      {/* ⭐ ALTERADO */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {" "}
        {/* ⭐ ALTERADO */}
        <SectionHeading
          eyebrow="Projetos"
          title={
            <>
              Projetos que unem <span className="text-gradient">design e performance</span>.
            </>
          }
        />
        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {" "}
          {/* ⭐ ALTERADO */}
          {visibleProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* IMG */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                {" "}
                {/* ⭐ ALTERADO */}
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${
                    p.position || "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[radial-gradient(closest-side,oklch(0.78_0.16_215/0.2),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              {/* INFO */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                {" "}
                {/* ⭐ ALTERADO */}
                <div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {" "}
                    {/* ⭐ ALTERADO */}
                    {p.tag} · {p.year}
                  </div>

                  <h3 className="mt-1 text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                    {" "}
                    {/* ⭐ ALTERADO */}
                    {p.title}
                  </h3>
                </div>
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground">
                  {" "}
                  {/* ⭐ ALTERADO */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        {/* BOTÃO */}
        {projects.length > 4 && (
          <div className="mt-8 flex justify-center">
            {" "}
            {/* ⭐ ALTERADO */}
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="w-full sm:w-auto text-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground" // ⭐ ALTERADO
            >
              {showAll ? "Mostrar menos" : "Mostrar mais"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
