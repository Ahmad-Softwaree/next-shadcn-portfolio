"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/shared/animate";
import experiences from "@/lib/data/experiences";
import ExperienceCard from "../cards/experience-card";

const Experiences = () => {
  const t = useTranslations("experiences");

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="experiences" className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="badge">
              {t("badge")}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>

          <div className="relative">
            {experiences.map((val) => (
              <ExperienceCard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Experiences;
