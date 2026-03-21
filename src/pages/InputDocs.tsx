import { useState } from "react";
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

const inputCode = `import { Input } from "@helix-ui/react";

export default function Example() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your email..." />
      <Input label="Username" placeholder="johndoe" />
      <Input
        label="Password"
        error="This field is required"
        placeholder="••••••••"
      />
    </div>
  );
}`;

const apiProps = [
  { name: "placeholder", type: "string", typeColor: "blue" as const, defaultVal: "—", description: "Placeholder text shown when the input is empty." },
  { name: "label", type: "string", typeColor: "blue" as const, defaultVal: "—", description: "Label text displayed above the input." },
  { name: "error", type: "string", typeColor: "blue" as const, defaultVal: "—", description: "Error message displayed below the input in red." },
  { name: "disabled", type: "boolean", typeColor: "green" as const, defaultVal: "false", description: "When true, disables the input field." },
  { name: "onChange", type: "function", typeColor: "orange" as const, defaultVal: "—", description: "Callback fired when the input value changes." },
];

function DemoInput({ label, placeholder, error, disabled }: { label?: string; placeholder?: string; error?: string; disabled?: boolean }) {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-xs">
      {label && <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full h-9 rounded-md px-3 text-sm bg-background border transition-colors duration-200 placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
          error
            ? "border-destructive focus:ring-destructive"
            : "border-border focus:ring-primary"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export default function InputDocs() {
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: "Components", path: "/" }, { label: "Input" }]} />

        <section id="overview" className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">Input</h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A form input component with support for labels, placeholder text, validation states,
            and error messages. Designed for clarity and ease of use.
          </p>
        </section>

        <section id="preview" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Preview</h2>
          <ComponentPreview code={inputCode}>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <DemoInput placeholder="Enter your email..." />
              <DemoInput label="Username" placeholder="johndoe" />
              <DemoInput label="Password" placeholder="••••••••" error="This field is required" />
            </div>
          </ComponentPreview>
        </section>

        <section id="code" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Code</h2>
          <CodeBlock code={inputCode} />
        </section>

        <section id="api" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">API Reference</h2>
          <ApiTable props={apiProps} />
        </section>

        <PageNav
          prev={{ title: "Card", path: "/components/card" }}
          next={{ title: "Alert", path: "/components/alert" }}
        />
      </div>
      <OnThisPage sections={sections} />
    </div>
  );
}
