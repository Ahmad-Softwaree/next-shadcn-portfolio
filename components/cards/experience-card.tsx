import { getTechConfig } from "@/lib/config/technologies";
import { Experience } from "@/lib/data/experiences";
import { cn } from "@/lib/utils";
import { Building2, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { Badge } from "../ui/badge";

const ExperienceCard = (val: Experience) => {
  const t = useTranslations("experiences");

  return (
    <article
      className={cn(
        "group relative ps-8 pb-12 last:pb-0 animate-in fade-in slide-in-from-left-4",
        "transition-all duration-300"
      )}
      style={{
        animationDelay: `${val.id * 150}ms`,
        animationFillMode: "backwards",
      }}>
      {/* Timeline line */}
      <div className="absolute start-0 top-2.5 h-full w-[2px] bg-gradient-to-b from-primary/50 to-muted last:bg-gradient-to-b last:from-primary/50 last:to-transparent">
        <div
          className={cn(
            "absolute h-3 w-3 -start-[5px] top-0 rounded-full border-2 border-primary bg-background transition-all duration-300 hover:scale-150 hover:shadow-lg hover:shadow-primary/50"
          )}
        />
      </div>

      {/* Content Card */}
      <div
        className={cn(
          "relative rounded-xl border bg-card p-6 transition-all duration-300",
          "hover:shadow-xl hover:border-primary/50 hover:-translate-y-1"
        )}>
        {/* Company Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={cn(
              "flex-shrink-0 h-12 w-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center transition-all duration-300"
            )}>
            <Building2
              className={cn(
                "h-6 w-6 text-primary transition-transform duration-300"
              )}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold tracking-tight">
              {t(`${val.textKey}.company` as any)}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{t(`${val.textKey}.period` as any)}</span>
            </div>
          </div>
        </div>

        {/* Job Title */}
        <h4 className="text-lg font-semibold mb-3 text-foreground/90">
          {t(`${val.textKey}.title` as any)}
        </h4>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4">
          {t(`${val.textKey}.description` as any)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {val.technologies.map((tech) => {
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
    </article>
  );
};

export default ExperienceCard;
