import Breadcrumb from "@/components/Breadcrumb";
import OnThisPage from "@/components/OnThisPage";
import ComponentPreview from "@/components/ComponentPreview";
import CodeBlock from "@/components/CodeBlock";
import ApiTable from "@/components/ApiTable";
import PageNav from "@/components/PageNav";
import { usePageTitle } from "@/hooks/usePageTitle";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
  { id: "api", label: "API Reference" },
];

const buttonCode = `import { Button } from "@helix-ui/react";

export default function Example() {
  return (
    <div className="flex gap-3">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}`;

const apiProps = [
  { name: "variant", type: '"default" | "primary" | "secondary"', typeColor: "blue" as const, defaultVal: '"default"', description: "Controls the visual style of the button." },
  { name: "onClick", type: "function", typeColor: "orange" as const, defaultVal: "—", description: "Callback fired when the button is clicked." },
  { name: "disabled", type: "boolean", typeColor: "green" as const, defaultVal: "false", description: "When true, prevents interaction and applies disabled styles." },
  { name: "children", type: "ReactNode", typeColor: "purple" as const, defaultVal: "—", description: "The content rendered inside the button." },
];

export default function ButtonDocs() {
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: "Components", path: "/" }, { label: "Button" }]} />

        <section id="overview" className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">Button</h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A versatile button component that supports multiple visual variants, sizes, and states.
            Use it for primary actions, secondary options, or any interactive trigger in your interface.
          </p>
        </section>

        <section id="preview" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Preview</h2>
          <ComponentPreview code={buttonCode}>
            <button className="h-9 px-4 rounded-lg border border-border text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary active:scale-[0.97]">
              Default
            </button>
            <button className="h-9 px-4 rounded-lg bg-gradient-primary text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-[0.97]">
              Primary
            </button>
            <button className="h-9 px-4 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground transition-all duration-200 hover:bg-secondary/80 active:scale-[0.97]">
              Secondary
            </button>
            <button className="h-9 px-4 rounded-lg bg-secondary text-sm font-medium text-muted-foreground opacity-50 cursor-not-allowed" disabled>
              Disabled
            </button>
          </ComponentPreview>
        </section>

        <section id="code" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Code</h2>
          <CodeBlock code={buttonCode} />
        </section>

        <section id="api" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">API Reference</h2>
          <ApiTable props={apiProps} />
        </section>

        <PageNav
          prev={{ title: "Home", path: "/" }}
          next={{ title: "Card", path: "/components/card" }}
        />
      </div>
      <OnThisPage sections={sections} />
    </div>
  );
}
