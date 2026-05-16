import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

// --- FALLBACKS ---

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar novamente ou voltar ao início.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Tentar novamente
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}

// --- ROTA PRINCIPAL ---

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // SEO PRINCIPAL
      { title: "TESTE 123" },
      {
        name: "description",
        content:
          "LM WebTech é um estúdio digital moderno e performático. Criamos sites profissionais, rápidos e com alto impacto visual.",
      },
      { name: "author", content: "LM WebTech" },

      // OPEN GRAPH (WhatsApp, Instagram, Facebook)
      { property: "og:title", content: "LM WebTech" },
      {
        property: "og:description",
        content:
          "Estúdio digital moderno e performático. Criamos sites profissionais e experiências web de alto impacto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://seudominio.com" },
      { property: "og:image", content: "https://seudominio.com/og-image.png" },

      // TWITTER CARD
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LM WebTech" },
      {
        name: "twitter:description",
        content:
          "Estúdio digital moderno e performático. Sites profissionais e experiências web de alto impacto.",
      },
      { name: "twitter:image", content: "https://seudominio.com/og-image.png" },
    ],

    links: [
      { rel: "stylesheet", href: appCss },

      // FAVICON (AJUSTADO)
      { rel: "icon", href: "/favicon/favicon.ico?v=1", type: "image/x-icon" },

      {
        rel: "icon",
        href: "/favicon/favicon-32x32.png?v=1",
        sizes: "32x32",
        type: "image/png",
      },

      {
        rel: "apple-touch-icon",
        href: "/favicon/apple-touch-icon.png?v=1",
        sizes: "180x180",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// --- HTML BASE ---

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// --- APP ---

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
