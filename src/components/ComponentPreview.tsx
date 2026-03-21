import { useState, type ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  code: string;
}

export default function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex border-b border-border bg-card">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative px-4 py-2.5 text-sm font-medium capitalize transition-colors duration-200 ${
              tab === t
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
            {tab === t && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary" />
            )}
          </button>
        ))}
      </div>
      {tab === "preview" ? (
        <div className="p-6 md:p-8 bg-[#0f0f11] flex flex-wrap items-center gap-4">
          {children}
        </div>
      ) : (
        <div className="bg-[#0D0D0D]">
          <pre className="p-4 overflow-x-auto text-sm leading-relaxed font-mono">
            <code className="text-foreground/90">{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
