import { useState, useMemo } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

type TokenType = "keyword" | "string" | "tag" | "attr" | "comment" | "punctuation" | "plain";

interface Token {
  type: TokenType;
  value: string;
}

const TOKEN_COLORS: Record<TokenType, string> = {
  keyword: "text-primary",           // violet
  string: "text-success",            // green
  tag: "text-accent",                // blue
  attr: "text-orange-400",           // orange
  comment: "text-muted-foreground italic",
  punctuation: "text-muted-foreground",
  plain: "text-foreground/90",
};

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  // Order matters — earlier patterns match first
  const patterns: [TokenType, RegExp][] = [
    ["comment", /\/\/.*$/gm],
    ["comment", /\/\*[\s\S]*?\*\//g],
    ["string", /"(?:[^"\\]|\\.)*"/g],
    ["string", /'(?:[^'\\]|\\.)*'/g],
    ["string", /`(?:[^`\\]|\\.)*`/g],
    ["keyword", /\b(import|export|default|from|const|let|var|function|return|if|else|new|true|false|null|undefined|typeof|instanceof|class|extends|async|await|try|catch|throw)\b/g],
    ["tag", /(<\/?)[A-Z][A-Za-z0-9.]*/g],
    ["tag", /<\/?[a-z][a-z0-9-]*/gi],
    ["attr", /\b[a-zA-Z_][\w]*(?==)/g],
    ["punctuation", /[{}()<>[\];,=]/g],
  ];

  // Build a single combined regex with named groups
  let remaining = code;
  let pos = 0;
  const result: { start: number; end: number; type: TokenType; value: string }[] = [];

  for (const [type, pattern] of patterns) {
    const regex = new RegExp(pattern.source, pattern.flags);
    let match: RegExpExecArray | null;
    while ((match = regex.exec(code)) !== null) {
      result.push({ start: match.index, end: match.index + match[0].length, type, value: match[0] });
    }
  }

  // Sort by start position, then by length (longer first)
  result.sort((a, b) => a.start - b.start || b.value.length - a.value.length);

  // Remove overlapping tokens
  const filtered: typeof result = [];
  let lastEnd = 0;
  for (const r of result) {
    if (r.start >= lastEnd) {
      filtered.push(r);
      lastEnd = r.end;
    }
  }

  // Build final token list with plain text gaps
  let cursor = 0;
  for (const f of filtered) {
    if (f.start > cursor) {
      tokens.push({ type: "plain", value: code.slice(cursor, f.start) });
    }
    tokens.push({ type: f.type, value: f.value });
    cursor = f.end;
  }
  if (cursor < code.length) {
    tokens.push({ type: "plain", value: code.slice(cursor) });
  }

  return tokens;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const tokens = useMemo(() => tokenize(code), [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-border bg-[#0D0D0D] overflow-hidden">
      {/* Mac-style title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
      </div>
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
        <code>
          {tokens.map((token, i) => (
            <span key={i} className={TOKEN_COLORS[token.type]}>
              {token.value}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
