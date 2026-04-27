import { type ReactNode } from "react";

// Light mode is the only theme. This stub keeps existing imports working.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const useTheme = () => ({ theme: "light" as const, toggle: () => {} });
