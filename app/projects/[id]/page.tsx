"use client";

import { useParams } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Star,
  ArrowLeft,
  Code2,
  Briefcase,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { getTechConfig } from "@/lib/config/technologies";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { BackBtnMotion, FadeInUpMotion } from "@/components/shared/animate";

const page = () => {
  const { t } = useTranslation();
  const params = useParams();
  const projectId = Number(params?.id);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">{t("common.no_data")}</h2>
        <p className="text-muted-foreground mt-2">
          {t("common.no_data_found")}
        </p>
      </div>
    );
  }

  const {
    titleKey,
    descriptionKey,
    image,
    technologies,
    liveUrl,
    gits = [],
    tag,
    starred,
    types,
  } = project;

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
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <BackBtnMotion>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>{t("navbar.projects")}</span>
        </Link>
      </BackBtnMotion>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <FadeInUpMotion className="space-y-6">
          {/* Project Image */}
          <div className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden border bg-accent/50 group">
            <Image
              src={image || "/placeholder.svg"}
              alt={String(t(titleKey as any))}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap">
            {liveUrl && tag !== "down" ? (
              <Button
                asChild
                size="lg"
                className="flex-1 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t("projects.live")}
                </a>
              </Button>
            ) : (
              <Button
                disabled
                size="lg"
                className="flex-1 rounded-full opacity-50">
                {t("projects.private_project")}
              </Button>
            )}

            {gits.length > 0 ? (
              gits.map(({ url, name }, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="lg"
                  className="flex-1 rounded-full hover:border-primary/50 transition-all"
                  asChild>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    {t("projects.view_code", { name })}
                  </a>
                </Button>
              ))
            ) : (
              <Button
                disabled
                variant="outline"
                size="lg"
                className="flex-1 rounded-full opacity-50">
                {t("projects.private_git")}
              </Button>
            )}
          </div>
        </FadeInUpMotion>

        {/* Right Column - Details */}
        <FadeInUpMotion delay={0.1} className="space-y-6">
          {/* Title & Badges */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 flex-wrap">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight flex-1">
                {String(t(titleKey as any))}
              </h1>
              {starred && (
                <Star className="h-7 w-7 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              )}
            </div>

            {/* Tags & Types Row */}
            <div className="flex flex-wrap gap-2">
              {tag && (
                <Badge
                  variant={
                    tag === "down"
                      ? "destructive"
                      : tag === "production"
                        ? "default"
                        : "outline"
                  }
                  className="text-sm px-3 py-1 rounded-full">
                  {String(translateTag(tag))}
                </Badge>
              )}
              {types && types.length > 0 && (
                <>
                  {types.map((type) => (
                    <Badge
                      key={type}
                      variant="secondary"
                      className="text-sm px-3 py-1 rounded-full">
                      {String(translateType(type))}
                    </Badge>
                  ))}
                </>
              )}
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              {t("projects.details")}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {String(t(descriptionKey as any))}
            </p>
          </div>

          <Separator />

          {/* Technologies */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              {t("skills.title")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const config = getTechConfig(tech);
                return (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={cn(
                      "english_font rounded-full px-3 py-1.5 text-sm font-medium border transition-all duration-200",
                      "hover:scale-110 cursor-default",
                      config.bgColor,
                      config.color,
                      config.borderColor
                    )}>
                    {config.displayName}
                  </Badge>
                );
              })}
            </div>
          </div>
        </FadeInUpMotion>
      </div>

      {/* Clients & Contributors Section */}
      {(project.clients?.length || project.contributor) && (
        <FadeInUpMotion delay={0.2} className="mt-12 grid gap-6 md:grid-cols-2">
          {Array.isArray(project.clients) && project.clients.length > 0 && (
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  {t("projects.clients")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.clients.map((client, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {client.url ? (
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium transition-all">
                          {client.name}
                        </a>
                      ) : (
                        <span className="font-medium">{client.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {project.contributor && (
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  {t("projects.contributor")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {project.contributor.url ? (
                    <a
                      href={project.contributor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium transition-all">
                      {project.contributor.name}
                    </a>
                  ) : (
                    <span className="font-medium">
                      {project.contributor.name}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </FadeInUpMotion>
      )}
    </section>
  );
};

export default page;
