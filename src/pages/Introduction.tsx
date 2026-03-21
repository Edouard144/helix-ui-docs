import Breadcrumb from "@/components/Breadcrumb";
import PageNav from "@/components/PageNav";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Introduction() {
  return (
    <div className="px-6 md:px-10 py-8 max-w-4xl">
      <Breadcrumb items={[{ label: "Getting Started", path: "/" }, { label: "Introduction" }]} />

      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">Introduction</h1>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
        Helix UI is a collection of beautifully designed, accessible, and composable React
        components. Built with Tailwind CSS and TypeScript, it gives you the building blocks to
        create polished interfaces without starting from scratch.
      </p>

      <h2 className="text-xl font-semibold text-foreground mb-3">Why Helix UI?</h2>
      <ul className="space-y-2 text-sm text-muted-foreground mb-8 list-disc list-inside">
        <li>Production-ready components with consistent design language</li>
        <li>WAI-ARIA compliant — accessibility is not an afterthought</li>
        <li>Fully typed with TypeScript for a great developer experience</li>
        <li>Tailwind CSS-first — override any style with utility classes</li>
        <li>Tree-shakable — only ship what you use</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground mb-3">Quick Start</h2>
      <div className="rounded-xl border border-border bg-[#0D0D0D] p-4 font-mono text-sm text-foreground/90 mb-8">
        npm install @helix-ui/react
      </div>

      <PageNav
        prev={{ title: "Home", path: "/" }}
        next={{ title: "Button", path: "/components/button" }}
      />
    </div>
  );
}
