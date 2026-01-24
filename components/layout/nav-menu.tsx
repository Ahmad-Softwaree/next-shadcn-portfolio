"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export type NavItem = {
  href: string;
  label: string;
};
export const navItems: NavItem[] = [
  { href: "/", label: "home" },
  { href: "/skills", label: "skills" },

  { href: "/projects", label: "projects" },
  { href: "/tools", label: "tools" },
  {
    href: "/certifications",
    label: "certifications",
  },
];

export const NavMenu = ({ className }: { className?: string }) => {
  const t = useTranslations("navbar");
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    return pathname === item.href;
  };

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {navItems.map((item: NavItem) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant={isActive(item) ? "default" : "ghost"}
            className={cn(
              "rounded-full transition-all duration-300",
              isActive(item)
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg"
                : "hover:bg-accent"
            )}>
            {t(item.label as any)}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
