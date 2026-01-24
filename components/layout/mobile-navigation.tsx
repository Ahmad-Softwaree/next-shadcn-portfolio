"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { NavItem, navItems } from "./nav-menu";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    return pathname === item.href;
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "fixed left-0 right-0 top-[65px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b shadow-lg transition-all duration-300 ease-in-out xl:hidden z-[9999]",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
        <div className="px-6 py-6 space-y-6 w-full">
          <div className="flex justify-center">
            <div className="scale-150">
              <Logo />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full max-w-xs"
                onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive(item) ? "default" : "ghost"}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg transition-all duration-300",
                    isActive(item)
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg"
                      : "hover:bg-accent"
                  )}>
                  {t(item.label as any)}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
