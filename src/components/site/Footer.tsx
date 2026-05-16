import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Estúdio digital criando experiências modernas, performáticas e memoráveis.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
          {/* navegação */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Navegar</div>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#sobre" className="text-foreground/80 hover:text-foreground">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-foreground/80 hover:text-foreground">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-foreground/80 hover:text-foreground">
                  Projetos
                </a>
              </li>
            </ul>
          </div>

          {/* contato */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Contato</div>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.lmwebtech@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground"
                >
                  contato.lmwebtech@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/lm.webtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* local */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Local</div>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li>Brasil · Remoto</li>
              <li>2026</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-border px-6 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} LM WebTech. Todos os direitos reservados.</div>
        <div>Feito com cuidado e código limpo.</div>
      </div>
    </footer>
  );
}
