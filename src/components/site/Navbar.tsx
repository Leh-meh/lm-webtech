import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);

  const [open, setOpen] = useState(false); // ⭐ ALTERADO

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 -z-10 backdrop-blur-xl bg-background/60 border-b border-border"
      />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 md:py-5">
        {" "}
        {/* ⭐ ALTERADO */}
        <Logo />
        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* CTA DESKTOP */}
        <a
          href="#contato"
          className="hidden md:inline-flex group relative items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:border-primary/40 hover:bg-secondary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
          Iniciar projeto
        </a>
        {/* BOTÃO MOBILE */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5">
          <span className="w-6 h-[2px] bg-foreground" />
          <span className="w-6 h-[2px] bg-foreground" />
          <span className="w-6 h-[2px] bg-foreground" />
        </button>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-medium text-foreground"
              >
                {l.label}
              </motion.a>
            ))}

            {/* CTA */}
            <motion.a
              href="#contato"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-primary-foreground"
            >
              Iniciar projeto
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
