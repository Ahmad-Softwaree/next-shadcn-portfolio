import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import React from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        storageKey="portfolio-theme"
        enableSystem>
        {children}
        <Toaster richColors position="top-center" />
      </ThemeProvider>
    </NuqsAdapter>
  );
};

export default Providers;
