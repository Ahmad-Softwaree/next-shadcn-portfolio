"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/animate";
import experiences from "@/lib/data/experiences";
import type { Experience } from "@/lib/data/experiences";
import { getTechConfig } from "@/lib/config/technologies";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative ps-8 pb-12 last:pb-0 animate-in fade-in slide-in-from-left-4",
        "transition-all duration-300"
      )}
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: "backwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Timeline line */}
      <div className="absolute start-0 top-2.5 h-full w-[2px] bg-gradient-to-b from-primary/50 to-muted last:bg-gradient-to-b last:from-primary/50 last:to-transparent">
        <div
          className={cn(
            "absolute h-3 w-3 -start-[5px] top-0 rounded-full border-2 border-primary bg-background transition-all duration-300",
            isHovered && "scale-150 shadow-lg shadow-primary/50"
          )}
        />
      </div>

      {/* Content Card */}
      <div
        className={cn(
          "relative rounded-xl border bg-card p-6 transition-all duration-300",
          "hover:shadow-xl hover:border-primary/50 hover:-translate-y-1",
          isHovered && "shadow-xl border-primary/50 -translate-y-1"
        )}>
        {/* Company Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={cn(
              "flex-shrink-0 h-12 w-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center transition-all duration-300",
              isHovered && "scale-110 from-primary/30 to-primary/10"
            )}>
            <Building2
              className={cn(
                "h-6 w-6 text-primary transition-transform duration-300",
                isHovered && "rotate-12"
              )}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold tracking-tight">
              {String(t(experience.companyKey as any))}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{String(t(experience.periodKey as any))}</span>
            </div>
          </div>
        </div>

        {/* Job Title */}
        <h4 className="text-lg font-semibold mb-3 text-foreground/90">
          {String(t(experience.titleKey as any))}
        </h4>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4">
          {String(t(experience.descriptionKey as any))}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => {
            const techConfig = getTechConfig(tech);
            return (
              <Badge
                key={tech}
                variant="outline"
                className={cn(
                  "english_font rounded-full border transition-all duration-200 hover:scale-110",
                  techConfig.color,
                  techConfig.bgColor,
                  techConfig.borderColor
                )}>
                {techConfig.displayName}
              </Badge>
            );
          })}
        </div>

        {/* Hover Effect Background */}
        <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/5 via-primary/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="experience" className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              {String(t("experience.badge" as any))}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {String(t("experience.title" as any))}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {String(t("experience.subtitle" as any))}
            </p>
          </div>

          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Experience;
