import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Search } from "lucide-react";

const navSections = [
  {
    label: "GETTING STARTED",
    items: [
      { title: "Home", path: "/" },
      { title: "Introduction", path: "/introduction" },
    ],
  },
  {
    label: "COMPONENTS",
    items: [
      { title: "Button", path: "/components/button" },
      { title: "Card", path: "/components/card" },
      { title: "Input", path: "/components/input" },
      { title: "Alert", path: "/components/alert" },
    ],
  },
];

export function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-50 h-14 flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-xl px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-gradient text-xl">⬡</span>
          <span className="text-gradient">Helix UI</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <span className="text-xs font-mono text-muted-foreground border border-border rounded-md px-2 py-1">
          v1.0.0
        </span>
      </div>
    </header>
  );
}

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const location = useLocation();
  const [search, setSearch] = useState("");

  const filteredSections = navSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 rounded-md bg-secondary border border-border pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-200"
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        {filteredSections.length === 0 && (
          <p className="text-sm text-muted-foreground px-3 py-4">
            No components found
          </p>
        )}
        {filteredSections.map((section) => (
          <div key={section.label} className="mb-6">
            <p className="px-3 mb-2 text-[11px] font-semibold tracking-widest text-muted-foreground">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center h-8 px-3 rounded-md text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-secondary text-primary font-medium border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-[260px] min-w-[260px] border-r border-border h-[calc(100vh-3.5rem)] sticky top-14 overflow-hidden">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-[280px] bg-background border-r border-border animate-slide-in-left">
            <div className="h-14 flex items-center justify-between px-4 border-b border-border">
              <span className="font-bold text-gradient">⬡ Helix UI</span>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}

export function DocFooter() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © 2025 Helix UI. Built with React & Tailwind CSS.
    </footer>
  );
}
