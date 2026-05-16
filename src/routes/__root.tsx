import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: "LM WebTech",
      },
      {
        name: "description",
        content: "Criação de sites modernos, profissionais e personalizados.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "/src/styles.css",
      },
      {
        rel: "icon",
        href: "/favicon/favicon.ico",
      },
      // opcional (melhor compatibilidade)
      {
        rel: "apple-touch-icon",
        href: "/favicon/favicon.png",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
