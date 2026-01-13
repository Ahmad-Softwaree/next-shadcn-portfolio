"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { MobileNavigation } from "./mobile-navigation";
import { Github, Linkedin } from "lucide-react";
import { LangToggle } from "../lang-toggle";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";

const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}>
      {" "}
      <div className="flex h-16 items-center gap-6">
        <Link
          href={`/`}
          className="flex flex-row justify-center items-center gap-2">
          <Logo />
          <h2 className="font-bold hidden sm:block">
            {String(t("navbar.logo_text" as any))}
          </h2>
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden xl:flex flex-1" />

        <div className="flex items-center gap-2 ms-auto">
          <LangToggle />
          <ThemeToggle />
          <Link
            target="_blank"
            href={`https://www.linkedin.com/in/ahmad-salah-50519022a/`}>
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link target="_blank" href={`https://github.com/Ahmad-Softwaree`}>
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
