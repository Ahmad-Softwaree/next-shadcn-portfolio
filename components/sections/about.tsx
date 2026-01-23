"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/shared/animate";

const About = () => {
  const t = useTranslations("about");

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="about" className="relative py-20 px-6">
        <div>
          <div className="flex flex-col items-center text-center gap-8">
            <div className="max-w-3xl">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 text-purple-700 dark:text-purple-300 border-none">
                {t("badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {t("title")}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {t("description")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  target="_blank"
                  href={`https://github.com/Ahmad-Softwaree`}>
                  <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
                    <Github />
                    {t("view_github")}
                  </Button>
                </Link>

                <a href="/pdf/nest-js-backend-developer.pdf" download>
                  <Button
                    variant="outline"
                    className="rounded-full border-2 hover:bg-accent transition-all duration-300">
                    <Download className="mr-2" />
                    {t("download_cv")}
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
