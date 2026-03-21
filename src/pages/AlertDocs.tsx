import { useState } from "react";
import { Check, X } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import OnThisPage from "@/components/OnThisPage";
import ComponentPreview from "@/components/ComponentPreview";
import CodeBlock from "@/components/CodeBlock";
import ApiTable from "@/components/ApiTable";
import PageNav from "@/components/PageNav";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
  { id: "api", label: "API Reference" },
];

const alertCode = `import { Alert } from "@helix-ui/react";

export default function Example() {
  return (
    <div className="space-y-3">
      <Alert type="success" message="Operation completed successfully." />
      <Alert
        type="error"
        message="Something went wrong. Please try again."
        dismissible
      />
    </div>
  );
}`;

const apiProps = [
  { name: "type", type: '"success" | "error"', typeColor: "blue" as const, defaultVal: '"success"', description: "Controls the visual variant of the alert." },
  { name: "message", type: "string", typeColor: "blue" as const, defaultVal: "—", description: "The text content displayed in the alert." },
  { name: "dismissible", type: "boolean", typeColor: "green" as const, defaultVal: "true", description: "Whether a close button is shown." },
  { name: "onDismiss", type: "function", typeColor: "orange" as const, defaultVal: "—", description: "Callback fired when the alert is dismissed." },
];

function DemoAlert({ type, message }: { type: "success" | "error"; message: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return (
    <button onClick={() => setVisible(true)} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
      Show {type} alert again
    </button>
  );
  const isSuccess = type === "success";
  return (
    <div
      className={`flex items-start gap-3 w-full rounded-lg p-4 border-l-4 transition-all duration-200 ${
        isSuccess
          ? "border-l-success bg-success/5"
          : "border-l-destructive bg-destructive/5"
      }`}
    >
      <div className={`mt-0.5 ${isSuccess ? "text-success" : "text-destructive"}`}>
        {isSuccess ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </div>
      <p className="flex-1 text-sm text-foreground">{message}</p>
      <button
        onClick={() => setVisible(false)}
        className="text-muted-foreground hover:text-foreground transition-colors duration-200 active:scale-95"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function AlertDocs() {
  return (
    <div className="flex">
      <div className="flex-1 min-w-0 px-6 md:px-10 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: "Components", path: "/" }, { label: "Alert" }]} />

        <section id="overview" className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">Alert</h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Contextual feedback messages for user actions. Use alerts to communicate success,
            errors, or important information that requires the user's attention.
          </p>
        </section>

        <section id="preview" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Preview</h2>
          <ComponentPreview code={alertCode}>
            <div className="flex flex-col gap-3 w-full">
              <DemoAlert type="success" message="Operation completed successfully." />
              <DemoAlert type="error" message="Something went wrong. Please try again." />
            </div>
          </ComponentPreview>
        </section>

        <section id="code" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">Code</h2>
          <CodeBlock code={alertCode} />
        </section>

        <section id="api" className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">API Reference</h2>
          <ApiTable props={apiProps} />
        </section>

        <PageNav prev={{ title: "Input", path: "/components/input" }} />
      </div>
      <OnThisPage sections={sections} />
    </div>
  );
}
