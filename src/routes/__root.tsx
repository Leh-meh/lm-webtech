import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";

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
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },

      // 🔥 FAVICON CORRIGIDO (com cache bust)
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon_io/favicon.ico?v=4",
      },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon_io/favicon.ico?v=4",
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon_io/apple-touch-icon.png?v=4",
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
