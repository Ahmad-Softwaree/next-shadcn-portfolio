"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const NavMenu = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: String(t("navbar.home" as any)) },
    { href: "/projects", label: String(t("navbar.projects" as any)) },
    { href: "/tools", label: String(t("navbar.tools" as any)) },
    {
      href: "/certifications",
      label: String(t("navbar.certifications" as any)),
    },
  ];

  const isActive = (item: (typeof navItems)[0]) => {
    return pathname === item.href;
  };

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant={isActive(item) ? "default" : "ghost"}
            className={cn(
              "rounded-full transition-all duration-300",
              isActive(item)
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg"
                : "hover:bg-accent"
            )}>
            {item.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
