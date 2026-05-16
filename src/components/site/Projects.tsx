import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

import p1 from "@/assets/monteiros.png";
import p2 from "@/assets/obpc.png";
import p3 from "@/assets/sorriso.png";
import p4 from "@/assets/unha.png";

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
    title: "Belle Essence",
    tag: "Landing Page · Estética",
    year: "2026",
    link: "https://belle-essence.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Projetos"
          title={
            <>
              Projetos que unem <span className="text-gradient">design e performance</span>.
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative block overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />

                <div className="absolute inset-0 bg-[radial-gradient(closest-side,oklch(0.78_0.16_215/0.2),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {p.tag} · {p.year}
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    {p.title}
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
      </div>
    </section>
  );
}
