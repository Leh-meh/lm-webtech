import { motion, useScroll, useTransform } from "framer-motion";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 -z-10 backdrop-blur-xl bg-background/60 border-b border-border"
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />
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
        <a
          href="#contato"
          className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:border-primary/40 hover:bg-secondary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
          Iniciar projeto
        </a>
      </nav>
    </header>
  );
}
