"use client";

import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/i18n/navigation";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "./logo";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavItem, navItems } from "./nav-menu";

const Footer = () => {
  const navbar_t = useTranslations("navbar");
  const footer_t = useTranslations("footer");
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    return pathname === item.href;
  };

  return (
    <footer className="mt-20">
      <div>
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex flex-row justify-center items-center gap-2">
            <Logo />
            <h2 className="font-bold">{navbar_t("logo_text")}</h2>
          </div>

          <nav className="mt-6 flex items-center gap-2 flex-wrap justify-center">
            {navItems.map((item: NavItem) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive(item) ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "rounded-full transition-all duration-300",
                    isActive(item)
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg"
                      : "hover:bg-accent"
                  )}>
                  {navbar_t(item.label as any)}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-sm">
            {footer_t("copyright", {
              year: new Date().getFullYear(),
            })}
          </span>

          <div className="flex items-center gap-3">
            <Link
              target="_blank"
              href="https://github.com/Ahmad-Softwaree"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ahmad-salah-50519022a/"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
