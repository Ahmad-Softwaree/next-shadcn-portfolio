import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Github, Linkedin } from "lucide-react";
import { ModeToggle } from "../theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Link
          href={`/`}
          className="flex flex-row justify-center items-center gap-2"
        >
          <Logo />
          <h2 className="font-bold">Ahmad Software</h2>
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link
            target="_blank"
            href={`https://www.linkedin.com/in/ahmad-salah-50519022a/`}
          >
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none"
              size="icon"
            >
              <Linkedin />
            </Button>
          </Link>
          <Link target="_blank" href={`https://github.com/Ahmad-Softwaree`}>
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none"
              size="icon"
            >
              <Github className="h-5! w-5!" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
