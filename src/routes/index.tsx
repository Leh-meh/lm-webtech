import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LM WebTech — Estúdio digital criativo" },
      {
        name: "description",
        content:
          "Sites modernos, performáticos e estratégicos. Landing pages, sites empresariais, portfólios e UI/UX para marcas que querem se destacar.",
      },
      { property: "og:title", content: "LM WebTech — Estúdio digital criativo" },
      {
        property: "og:description",
        content:
          "Tornamos ideias em experiências digitais memoráveis. Design moderno, código limpo e estratégia.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Differentials />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
