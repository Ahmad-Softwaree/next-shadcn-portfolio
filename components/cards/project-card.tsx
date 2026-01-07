"use client";

import { Project } from "@/lib/data/projects";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ExternalLink, Eye, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getTechConfig } from "@/lib/config/technologies";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  titleKey,
  descriptionKey,
  image,
  technologies,
  liveUrl,
  gits = [],
  tag,
  starred,
  types,
  id,
}: Project) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const translateType = (type: string) => {
    const key = type.replace(/\s+/g, "_").toLowerCase();
    const translated = t(`projects.types.${key}` as any);
    return translated === `projects.types.${key}` ? type : translated;
  };

  const translateTag = (tag?: string) => {
    if (!tag) return tag;
    const translated = t(`projects.tag.${tag}` as any);
    return translated === `projects.tag.${tag}` ? tag : translated;
  };

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-xl border bg-card",
        "transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10",
        "hover:-translate-y-2 hover:border-primary/50",
        isHovered &&
          "shadow-2xl shadow-primary/10 -translate-y-2 border-primary/50"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent/50">
        <Image
          src={image || "/placeholder.svg"}
          alt={String(t(titleKey as any))}
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
              href={`/projects/${id}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium text-foreground",
                "transition-all duration-300 transform",
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}>
              <Eye className="w-4 h-4" />
              {t("projects.details")}
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Title with badges */}
        <div className="flex items-start gap-2 mb-3">
          <h3 className="text-xl font-bold tracking-tight flex-1 line-clamp-1">
            {String(t(titleKey as any))}
          </h3>
          {starred && (
            <Star
              className={cn(
                "h-5 w-5 flex-shrink-0 transition-all duration-300",
                isHovered
                  ? "text-yellow-400 fill-yellow-400 rotate-12 scale-110"
                  : "text-yellow-400 fill-yellow-400"
              )}
            />
          )}
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
              {String(translateTag(tag))}
            </Badge>
          )}
          {types && types.length > 0 && (
            <>
              {types.map((type) => (
                <Badge
                  key={type}
                  variant="secondary"
                  className="text-xs px-2 py-0.5 rounded-full">
                  {String(translateType(type))}
                </Badge>
              ))}
            </>
          )}
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
          {String(t(descriptionKey as any))}
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
                isHovered && "shadow-lg shadow-primary/30"
              )}
              asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                {t("projects.live")}
              </a>
            </Button>
          ) : (
            <Button
              variant="default"
              className="rounded-full cursor-not-allowed opacity-50"
              disabled>
              {t("projects.private_project")}
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
                  isHovered && "border-primary/50"
                )}
                asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  {t("projects.view_code", { name })}
                </a>
              </Button>
            ))
          ) : (
            <Button
              variant="outline"
              className="rounded-full shadow-none cursor-not-allowed opacity-50"
              disabled>
              {t("projects.private_git")}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
