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
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 -z-10 border-b border-border bg-background/70 backdrop-blur-xl"
      />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:py-5">
        <Logo />

        {/* MENU DESKTOP */}
        <ul className="hidden items-center gap-8 md:flex">
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
          className="hidden rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:border-primary/40 hover:bg-secondary md:inline-flex"
        >
          Iniciar projeto
        </a>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md md:hidden"
        >
          <span
            className={`absolute h-[2px] w-5 bg-foreground transition ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-foreground transition ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-foreground transition ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[76px] z-40 overflow-hidden rounded-3xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/85 transition hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Iniciar projeto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
