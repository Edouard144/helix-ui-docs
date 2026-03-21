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

const cardCode = `import { Card } from "@helix-ui/react";

export default function Example() {
  return (
    <>
      <Card title="Getting Started">
        <p>Follow the installation guide to set up Helix UI in your project.</p>
      </Card>

      <Card title="With Footer" footer={<button>Learn More →</button>}>
        <p>Cards can include optional footer sections with actions.</p>
      </Card>
    </>
  );
}`;

const apiProps = [
  { name: "title", type: "string", typeColor: "blue" as const, defaultVal: "—", description: "Rendered as the card header title." },
  { name: "children", type: "ReactNode", typeColor: "purple" as const, defaultVal: "—", description: "The main content of the card body." },
  { name: "footer", type: "ReactNode", typeColor: "purple" as const, defaultVal: "—", description: "Optional footer content rendered below the body." },
  { name: "className", type: "string", typeColor: "blue" as const, defaultVal: "—", description: "Additional Tailwind classes for customization." },
];

export default function CardDocs() {
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: "Components", path: "/" }, { label: "Card" }]} />

        <section id="overview" className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">Card</h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A flexible container component for grouping related content. Supports optional headers,
            footers, and custom styling to fit any layout.
          </p>
        </section>

        <section id="preview" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Preview</h2>
          <ComponentPreview code={cardCode}>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {/* Basic card */}
              <div className="flex-1 rounded-xl border border-border bg-card p-5">
                <h3 className="text-base font-semibold text-foreground mb-2">Getting Started</h3>
                <p className="text-sm text-muted-foreground">
                  Follow the installation guide to set up Helix UI in your project.
                </p>
              </div>
              {/* Card with gradient border top */}
              <div className="flex-1 rounded-xl border border-border bg-card overflow-hidden">
                <div className="h-1 bg-gradient-primary" />
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">Highlighted Card</h3>
                  <p className="text-sm text-muted-foreground">
                    Use a gradient top border to draw attention to key content areas.
                  </p>
                </div>
              </div>
              {/* Card with footer */}
              <div className="flex-1 rounded-xl border border-border bg-card flex flex-col">
                <div className="p-5 flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">With Footer</h3>
                  <p className="text-sm text-muted-foreground">
                    Cards can include optional footer sections with actions.
                  </p>
                </div>
                <div className="px-5 py-3 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Updated 2 days ago</span>
                  <button className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </ComponentPreview>
        </section>

        <section id="code" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Code</h2>
          <CodeBlock code={cardCode} />
        </section>

        <section id="api" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">API Reference</h2>
          <ApiTable props={apiProps} />
        </section>

        <PageNav
          prev={{ title: "Button", path: "/components/button" }}
          next={{ title: "Input", path: "/components/input" }}
        />
      </div>
      <OnThisPage sections={sections} />
    </div>
  );
}
