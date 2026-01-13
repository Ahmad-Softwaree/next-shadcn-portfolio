"use client";

import { Tool } from "@/lib/data/tools";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  SlideInMotion,
  FloatingIconMotion,
  ScrollRevealMotion,
} from "@/components/shared/animate";
import { getTypeConfig } from "@/lib/config/tool-filters";
import Link from "next/link";

interface SpecialToolCardProps extends Tool {
  index: number;
}

const SpecialToolCard = ({
  nameKey,
  descriptionKey,
  image,
  icon,
  type,
  version,
  link,
  starred,
  id,
  index,
}: SpecialToolCardProps) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  const translateType = (type: string) => {
    const key = type.replace(/\s+/g, "_").toLowerCase();
    const translated = t(`tools.types.${key}` as any);
    return translated === `tools.types.${key}` ? type : translated;
  };

  const typeConfig = getTypeConfig(type);

  return (
    <SlideInMotion
      direction={isEven ? "left" : "right"}
      className={cn(
        "group relative w-full overflow-hidden rounded-3xl border-2 bg-gradient-to-br",
        "from-card via-card to-accent/30",
        "hover:border-primary/50 transition-all duration-500",
        "hover:shadow-2xl hover:shadow-primary/20"
      )}>
      <div
        className={cn(
          "grid lg:grid-cols-2 gap-0 items-center",
          !isEven && "lg:grid-flow-dense"
        )}>
        {/* Image Section */}
        <div
          className={cn(
            "relative h-80 lg:h-[500px] overflow-hidden",
            !isEven && "lg:col-start-2"
          )}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
          <Image
            src={image || "/placeholder.svg"}
            alt={String(t(nameKey as any))}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            fill
            priority
          />
          {/* Floating Icon */}
          <FloatingIconMotion className="absolute top-6 right-6 z-20">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-background/90 backdrop-blur-sm border-2 border-primary/30 shadow-2xl">
              <Image
                src={icon || "/placeholder.svg"}
                alt={`${String(t(nameKey as any))} icon`}
                className="object-cover p-2"
                fill
              />
            </div>
          </FloatingIconMotion>
          {starred && (
            <div className="absolute top-6 left-6 z-20">
              <Star className="w-8 h-8 fill-yellow-500 text-yellow-500 drop-shadow-lg" />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div
          className={cn(
            "relative p-8 lg:p-12 space-y-6",
            !isEven && "lg:col-start-1 lg:row-start-1"
          )}>
          {/* Title */}
          <div className="space-y-4">
            <ScrollRevealMotion delay={0.2}>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                {String(t(nameKey as any))}
              </h3>
            </ScrollRevealMotion>

            {/* Type and Version */}
            <ScrollRevealMotion delay={0.3} className="flex flex-wrap gap-3">
              <Badge
                variant="outline"
                className={cn(
                  "text-sm font-semibold px-4 py-2 border-2",
                  typeConfig.color,
                  typeConfig.bgColor,
                  typeConfig.borderColor
                )}>
                {translateType(type)}
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  "text-sm font-semibold px-4 py-2 border-2 english_font",
                  "text-gray-600 dark:text-gray-400",
                  "bg-gray-500/10 dark:bg-gray-500/20",
                  "border-gray-500/30"
                )}>
                v{version}
              </Badge>
            </ScrollRevealMotion>
          </div>

          {/* Description */}
          <ScrollRevealMotion delay={0.4}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {String(t(descriptionKey as any))}
            </p>
          </ScrollRevealMotion>

          {/* Action Buttons */}
          <ScrollRevealMotion delay={0.5} className="flex flex-wrap gap-4 pt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/btn flex items-center gap-3 px-8 py-4 rounded-full",
                "bg-primary text-primary-foreground font-semibold text-lg",
                "shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50",
                "transition-all duration-300 hover:scale-105 active:scale-95"
              )}>
              <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:rotate-12" />
              {t("tools.visit")}
            </a>
            <Link
              href={`/tools/${id}`}
              className={cn(
                "group/btn flex items-center gap-3 px-8 py-4 rounded-full",
                "border-2 border-primary/30 bg-background/50 backdrop-blur-sm",
                "font-semibold text-lg hover:border-primary/60",
                "transition-all duration-300 hover:scale-105 active:scale-95"
              )}>
              {t("tools.details")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </ScrollRevealMotion>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={cn(
            "absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000",
            "bg-gradient-to-br from-primary to-purple-600",
            isEven ? "-top-48 -left-48" : "-bottom-48 -right-48",
            "group-hover:opacity-30"
          )}
        />
      </div>
    </SlideInMotion>
  );
};

export default SpecialToolCard;
