import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        {/* topo */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Estúdio digital criando experiências modernas, performáticas e memoráveis.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 md:grid-cols-3">
          {/* navegação */}
          <div className="text-center sm:text-left">
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
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Contato</div>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.lmwebtech@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-foreground/80 hover:text-foreground"
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
          <div className="text-center sm:text-left">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Local</div>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li>Brasil · Remoto</li>
              <li>2026</li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-3 border-t border-border px-6 pt-6 text-center text-xs text-muted-foreground md:flex-col md:items-center md:text-center">
        <div>© {new Date().getFullYear()} LM WebTech. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
