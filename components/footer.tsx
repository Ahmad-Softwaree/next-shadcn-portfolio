import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "./navbar/logo";

const footerLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex flex-row justify-center items-center gap-2">
            <Logo />
            <h2 className="font-bold">Ahmad Software</h2>
          </div>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Ahmad Software. All rights
            reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link target="_blank" href={`https://github.com/Ahmad-Softwaree`}>
              <Github className="h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              href={`https://www.linkedin.com/in/ahmad-salah-50519022a/`}
            >
              {" "}
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
