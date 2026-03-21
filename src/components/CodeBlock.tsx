import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-border bg-[#0D0D0D] overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200 active:scale-95"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-success" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <pre className="p-4 pr-14 overflow-x-auto text-sm leading-relaxed font-mono">
        <code className="text-foreground/90">{code}</code>
      </pre>
    </div>
  );
}
