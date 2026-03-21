import { Link } from "react-router-dom";
import { Zap, Accessibility, Paintbrush, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    desc: "Optimized for performance with tree-shaking, lazy loading, and minimal runtime overhead. Every millisecond counts.",
  },
  {
    icon: Accessibility,
    title: "Fully Accessible",
    desc: "WAI-ARIA compliant out of the box. Keyboard navigation, screen reader support, and focus management built in.",
  },
  {
    icon: Paintbrush,
    title: "Easily Customizable",
    desc: "Tailwind CSS-first design tokens. Override any style, extend any component, and match your brand in minutes.",
  },
];

const components = [
  {
    name: "Button",
    desc: "Versatile button with multiple variants and states.",
    path: "/components/button",
  },
  {
    name: "Card",
    desc: "Flexible container for grouping related content.",
    path: "/components/card",
  },
  {
    name: "Input",
    desc: "Form input with labels, validation, and error states.",
    path: "/components/input",
  },
  {
    name: "Alert",
    desc: "Contextual feedback messages for user actions.",
    path: "/components/alert",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const featuresRef = useScrollReveal();
  const componentsRef = useScrollReveal();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32 lg:py-40">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              ✦ Now in v1.0.0
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-gradient mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Build Beautiful Interfaces. Faster.
          </h1>

          <p
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Helix UI is a premium, accessible, and fully customizable React
            component library built for modern web applications.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              to="/components/button"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-border text-foreground font-medium text-sm transition-all duration-200 hover:bg-secondary active:scale-[0.97]"
            >
              View on GitHub
            </a>
          </div>

          <p
            className="text-xs text-muted-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Trusted by developers worldwide
          </p>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2
            data-reveal
            className="opacity-0 text-2xl font-semibold text-foreground text-center mb-12"
          >
            Everything you need to ship faster
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                data-reveal
                className="opacity-0 group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:glow-violet"
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Preview Strip */}
      <section ref={componentsRef} className="px-4 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <h2
            data-reveal
            className="opacity-0 text-2xl font-semibold text-foreground text-center mb-12"
          >
            Explore the Components
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {components.map((c, i) => (
              <Link
                key={c.name}
                to={c.path}
                data-reveal
                className="opacity-0 group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:glow-violet"
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
              >
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {c.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {c.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 group-hover:text-accent">
                  View Docs
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
