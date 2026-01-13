"use client";

import { Tool } from "@/lib/data/tools";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ExternalLink, Eye, Star } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CardHoverMotion } from "@/components/shared/animate";
import { getTypeConfig } from "@/lib/config/tool-filters";

const ToolCard = ({
  nameKey,
  descriptionKey,
  image,
  icon,
  type,
  version,
  link,
  starred,
  id,
}: Tool) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const translateType = (type: string) => {
    const key = type.replace(/\s+/g, "_").toLowerCase();
    const translated = t(`tools.types.${key}` as any);
    return translated === `tools.types.${key}` ? type : translated;
  };

  const typeConfig = getTypeConfig(type);

  return (
    <CardHoverMotion
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-xl border bg-card",
        "transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10",
        "hover:-translate-y-2 hover:border-primary/50",
        isHovered &&
          "shadow-2xl shadow-primary/10 -translate-y-2 border-primary/50"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Tool Image */}
      <div className="relative h-64 overflow-hidden bg-accent/50">
        <Image
          src={image || "/placeholder.svg"}
          alt={String(t(nameKey as any))}
          className={cn(
            "object-cover transition-all duration-500",
            isHovered && "scale-110 brightness-75"
          )}
          fill
        />
        {/* Overlay on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent",
            "opacity-0 transition-opacity duration-300",
            isHovered && "opacity-100"
          )}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Link
              href={`/tools/${id}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium text-foreground",
                "transition-all duration-300 transform",
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}>
              <Eye className="w-4 h-4" />
              {t("tools.details")}
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Title with badges */}
        <div className="flex items-start gap-2 mb-3">
          <h3 className="text-xl font-bold tracking-tight flex-1 line-clamp-1">
            {String(t(nameKey as any))}
          </h3>
          {starred && (
            <Star
              className={cn(
                "w-5 h-5 fill-yellow-500 text-yellow-500 flex-shrink-0",
                "transition-all duration-300",
                isHovered && "scale-110 rotate-12"
              )}
            />
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {String(t(descriptionKey as any))}
        </p>

        {/* Type and Version */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            variant="outline"
            className={cn(
              "text-xs font-medium transition-all duration-300",
              typeConfig.color,
              typeConfig.bgColor,
              typeConfig.borderColor,
              isHovered && "scale-105"
            )}>
            {translateType(type)}
          </Badge>
          <Badge
            variant="outline"
            className={cn(
              "text-xs font-medium transition-all duration-300 english_font",
              "text-gray-600 dark:text-gray-400",
              "bg-gray-500/10 dark:bg-gray-500/20",
              "border-gray-500/30",
              isHovered && "scale-105"
            )}>
            v{version}
          </Badge>
        </div>

        {/* Tool Icon */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-accent/50">
            <Image
              src={icon || "/placeholder.svg"}
              alt={`${String(t(nameKey as any))} icon`}
              className="object-cover"
              fill
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="flex gap-2 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg",
              "bg-primary text-primary-foreground font-medium text-sm",
              "transition-all duration-300 hover:shadow-lg hover:shadow-primary/30",
              "hover:scale-105 active:scale-95"
            )}>
            <ExternalLink className="w-4 h-4" />
            {t("tools.visit")}
          </a>
        </div>
      </div>
    </CardHoverMotion>
  );
};

export default ToolCard;
