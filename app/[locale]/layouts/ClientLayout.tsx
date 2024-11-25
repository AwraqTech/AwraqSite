"use client";

import React from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import { SidebarProvider } from "../../context/SidebarContext";
import { LocaleProvider } from "../../context/LocaleContext";

const ClientLayout: React.FC<{
  children: React.ReactNode;
  locale: string;
}> = ({ children, locale }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default ClientLayout;
