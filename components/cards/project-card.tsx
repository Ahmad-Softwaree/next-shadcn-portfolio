"use client";

import { Project } from "@/lib/data/projects";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ExternalLink, Eye, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";
import { getTechConfig } from "@/lib/config/technologies";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CardHoverMotion } from "@/components/shared/animate";

const ProjectCard = ({
  textKey,
  image,
  technologies,
  liveUrl,
  gits = [],
  tag,
  starred,
  types,
  id,
  currentVersion,
}: Project) => {
  const t = useTranslations("projects");

  return (
    <CardHoverMotion
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-xl border bg-card",
        "transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10",
        "hover:-translate-y-2 hover:border-primary/50"
      )}>
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent/50">
        <Image
          src={image || "/placeholder.svg"}
          alt={t(`${textKey}.title` as any)}
          className={cn(
            "object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
          )}
          fill
        />
        {/* Overlay on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}>
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Link
              href={`/projects/${id}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium text-foreground",
                "transition-all duration-300 transform group-hover:translate-y-0 group-hover:opacity-100"
              )}>
              <Eye className="w-4 h-4" />
              {t("details")}
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Title with badges */}
        <div className="flex items-start gap-2 mb-3">
          <h3 className="text-xl font-bold tracking-tight flex-1 line-clamp-1">
            {t(`${textKey}.title` as any)}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            {currentVersion && (
              <Badge
                variant="outline"
                className={cn(
                  "english_font px-2.5 py-0.5 text-xs font-semibold rounded-full",
                  "bg-primary/10 border-primary/30 text-primary",
                  "group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                )}>
                v{currentVersion}
              </Badge>
            )}
            {starred && (
              <Star
                className={cn(
                  "h-5 w-5 transition-all duration-300 text-yellow-400 fill-yellow-400 group-hover:rotate-12 group-hover:scale-110"
                )}
              />
            )}
          </div>
        </div>

        {/* Tag and Types row */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tag && (
            <Badge
              variant={
                tag === "down"
                  ? "destructive"
                  : tag === "production"
                    ? "default"
                    : "outline"
              }
              className="text-xs px-2 py-0.5 rounded-full">
              {t(`tags.${tag}` as any)}
            </Badge>
          )}
          {types && types.length > 0 && (
            <>
              {types.map((type) => (
                <Badge
                  key={type}
                  variant="secondary"
                  className="text-xs px-2 py-0.5 rounded-full">
                  {t(`types.${type}` as any)}
                </Badge>
              ))}
            </>
          )}
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
          {t(`${textKey}.description` as any)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 4).map((tech) => {
            const config = getTechConfig(tech);
            return (
              <Badge
                key={tech}
                variant="outline"
                className={cn(
                  "english_font rounded-full px-3 py-1 text-xs font-medium border transition-all duration-200",
                  "hover:scale-110",
                  config.bgColor,
                  config.color,
                  config.borderColor
                )}>
                {config.displayName}
              </Badge>
            );
          })}
          {technologies.length > 4 && (
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 text-xs font-medium">
              +{technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto flex-wrap">
          {/* Live URL button */}
          {liveUrl && tag !== "down" ? (
            <Button
              variant="default"
              className={cn(
                "rounded-full transition-all duration-300",
                "group-hover:shadow-lg group-hover:shadow-primary/30"
              )}
              asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                {t("live")}
              </a>
            </Button>
          ) : (
            <Button
              variant="default"
              className="rounded-full cursor-not-allowed opacity-50"
              disabled>
              {t("private_project")}
            </Button>
          )}

          {/* GitHub URLs buttons */}
          {gits.length > 0 ? (
            gits.map(({ url, name }, i) => (
              <Button
                key={i}
                variant="outline"
                className={cn(
                  "rounded-full shadow-none transition-all duration-300",
                  "group-hover:border-primary/50"
                )}
                asChild>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  {t("view_code")}
                  <span className="english_font">{name}</span>
                </Link>
              </Button>
            ))
          ) : (
            <Button
              variant="outline"
              className="rounded-full shadow-none cursor-not-allowed opacity-50"
              disabled>
              {t("private_git")}
            </Button>
          )}
        </div>
      </div>
    </CardHoverMotion>
  );
};

export default ProjectCard;
