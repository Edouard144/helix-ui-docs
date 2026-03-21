interface OnThisPageProps {
  sections: { id: string; label: string }[];
}

export default function OnThisPage({ sections }: OnThisPageProps) {
  return (
    <aside className="hidden xl:block w-[200px] min-w-[200px] sticky top-14 h-[calc(100vh-3.5rem)] py-8 pr-4">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-3">
        ON THIS PAGE
      </p>
      <ul className="space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
