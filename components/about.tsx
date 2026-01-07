"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AnimateOnScroll } from "@/components/shared/animate";

const About = () => {
  const { t } = useTranslation();

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="about" className="relative py-20 px-6">
        <div>
          <div className="flex flex-col items-center text-center gap-8">
            {/* Content */}
            <div className="max-w-3xl">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 text-purple-700 dark:text-purple-300 border-none">
                {String(t("about.badge" as any))}
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {String(t("about.title" as any))}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {String(t("about.description" as any))}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  target="_blank"
                  href={`https://github.com/Ahmad-Softwaree`}>
                  <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
                    <Github />
                    {String(t("about.view_github" as any))}
                  </Button>
                </Link>

                <a href="/pdf/nest-js-backend-developer.pdf" download>
                  <Button
                    variant="outline"
                    className="rounded-full border-2 hover:bg-accent transition-all duration-300">
                    <Download className="mr-2" />
                    {String(t("about.download_cv" as any))}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default About;
