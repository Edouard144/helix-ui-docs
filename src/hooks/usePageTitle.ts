import { useEffect } from "react";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Helix UI` : "Helix UI";
    return () => { document.title = "Helix UI"; };
  }, [title]);
}
