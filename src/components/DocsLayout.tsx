import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar, DocFooter } from "./Layout";

export default function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 min-w-0">
          <Outlet />
          <DocFooter />
        </main>
      </div>
    </div>
  );
}
