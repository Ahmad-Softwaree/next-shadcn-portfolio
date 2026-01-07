"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "./navbar/logo";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const footerLinks = [
    { href: "/", title: t("navbar.home") },

    {
      title: t("navbar.projects"),
      href: "/projects",
    },
    {
      title: t("navbar.certifications"),
      href: "/certifications",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <footer className="mt-20">
      <div>
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex flex-row justify-center items-center gap-2">
            <Logo />
            <h2 className="font-bold">{t("navbar.logo_text")}</h2>
          </div>

          <nav className="mt-6 flex items-center gap-2 flex-wrap justify-center">
            {footerLinks.map(({ title, href }) => (
              <Link key={title} href={href}>
                <Button
                  variant={isActive(href) ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "rounded-full transition-all duration-300",
                    isActive(href)
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg"
                      : "hover:bg-accent"
                  )}>
                  {title}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-sm">
            {t("footer.copyright", {
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
