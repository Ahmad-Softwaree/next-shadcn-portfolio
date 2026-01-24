"use client";

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
  Database,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTechConfig } from "@/lib/config/technologies";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
import { BackBtnMotion, FadeInUpMotion } from "@/components/shared/animate";
import { useTranslations } from "next-intl";
import { notFound, useParams } from "next/navigation";
import { getProjectById } from "@/lib/fetch/projects.action";

const page = () => {
  const global_t = useTranslations();
  const t = useTranslations("projects");
  const params = useParams();
  const data = getProjectById(Number(params.id));

  if (!data) {
    notFound();
  }

  const {
    textKey,
    image,
    technologies,
    liveUrl,
    gits = [],
    tag,
    starred,
    types,
    versions = [],
    currentVersion,
  } = data;

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <BackBtnMotion>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>{global_t("navbar.projects")}</span>
        </Link>
      </BackBtnMotion>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <FadeInUpMotion className="space-y-6">
          {/* Project Image */}
          <div className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden border bg-accent/50 group">
            <Image
              src={image || "/placeholder.svg"}
              alt={t(`${textKey}.title` as any)}
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
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t("live")}
                </Link>
              </Button>
            ) : (
              <Button
                disabled
                size="lg"
                className="flex-1 rounded-full opacity-50">
                {t("private_project")}
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
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    {t("view_code", { name })}
                  </Link>
                </Button>
              ))
            ) : (
              <Button
                disabled
                variant="outline"
                size="lg"
                className="flex-1 rounded-full opacity-50">
                {t("private_git")}
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
                {t(`${textKey}.title` as any)}
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
                  {t(`tags.${tag}` as any)}
                </Badge>
              )}
              {types && types.length > 0 && (
                <>
                  {types.map((type) => (
                    <Badge
                      key={type}
                      variant="secondary"
                      className="text-sm px-3 py-1 rounded-full">
                      {t(`types.${type}` as any)}
                    </Badge>
                  ))}
                </>
              )}
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
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              {t("details")}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {t(`${textKey}.description` as any)}
            </p>
          </div>

          <Separator />

          {/* Technologies */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              {global_t("skills.title")}
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

          {/* Version History */}
          {versions.length > 0 && (
            <>
              <Separator />
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  {t("version_history")}
                </h2>
                <div className="space-y-3">
                  {versions.map((ver) => (
                    <Card
                      key={ver.version}
                      className={cn(
                        "border-2 transition-all duration-300",
                        ver.version === currentVersion
                          ? "border-primary bg-primary/5 hover:shadow-lg hover:shadow-primary/20"
                          : "border-border hover:border-primary/50 hover:shadow-md"
                      )}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant={
                              ver.version === currentVersion
                                ? "default"
                                : "secondary"
                            }
                            className="english_font px-3 py-1 text-sm font-bold rounded-full">
                            v{ver.version}
                          </Badge>
                          {ver.version === currentVersion && (
                            <Badge
                              variant="outline"
                              className="px-2 py-0.5 text-xs border-primary/50 text-primary">
                              {t("current_version")}
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {ver.technologies.map((tech) => {
                            const config = getTechConfig(tech);
                            return (
                              <Badge
                                key={tech}
                                variant="outline"
                                className={cn(
                                  "english_font rounded-full px-2.5 py-1 text-xs font-medium border transition-all duration-200",
                                  "hover:scale-105 cursor-default",
                                  config.bgColor,
                                  config.color,
                                  config.borderColor
                                )}>
                                {config.displayName}
                              </Badge>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}
        </FadeInUpMotion>
      </div>

      {/* External API Section */}
      {data.externalApi && (
        <FadeInUpMotion delay={0.15} className="mt-12">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                <span className="english_font">API</span> {t("external_api")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="space-y-1">
                  <p className="english_font text-lg font-semibold text-foreground">
                    {data.externalApi.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="english_font">API</span>{" "}
                    {t("api_documentation")}
                  </p>
                </div>
                <Button
                  asChild
                  variant="default"
                  className="rounded-full shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all">
                  <Link
                    href={data.externalApi.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("visit_api")} <span className="english_font">API</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeInUpMotion>
      )}

      {/* Clients & Contributors Section */}
      {(data.clients?.length || data.contributor) && (
        <FadeInUpMotion delay={0.2} className="mt-12 grid gap-6 md:grid-cols-2">
          {Array.isArray(data.clients) && data.clients.length > 0 && (
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  {t("clients")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {data.clients.map((client, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {client.url ? (
                        <Link
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium transition-all">
                          {client.name}
                        </Link>
                      ) : (
                        <span className="font-medium">{client.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {data.contributor && (
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  {t("contributor")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {data.contributor.url ? (
                    <Link
                      href={data.contributor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium transition-all">
                      {data.contributor.name}
                    </Link>
                  ) : (
                    <span className="font-medium">{data.contributor.name}</span>
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
