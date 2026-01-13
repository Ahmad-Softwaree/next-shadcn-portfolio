import LanguageProvider from "@/providers/language-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <LanguageProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </LanguageProvider>
    </NuqsAdapter>
  );
};

export default Providers;
