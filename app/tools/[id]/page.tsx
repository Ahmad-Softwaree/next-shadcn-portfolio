"use client";

import { useParams } from "next/navigation";
import { tools } from "@/lib/data/tools";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BackBtnMotion, FadeInUpMotion } from "@/components/shared/animate";
import { getTypeConfig } from "@/lib/config/tool-filters";

const page = () => {
  const { t } = useTranslation();
  const params = useParams();
  const toolId = Number(params?.id);

  const tool = tools.find((p) => p.id === toolId);

  if (!tool) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">{t("common.no_data")}</h2>
        <p className="text-muted-foreground mt-2">
          {t("common.no_data_found")}
        </p>
      </div>
    );
  }

  const { nameKey, descriptionKey, image, icon, type, version, link, starred } =
    tool;

  const translateType = (type: string) => {
    const key = type.replace(/\s+/g, "_").toLowerCase();
    const translated = t(`tools.types.${key}` as any);
    return translated === `tools.types.${key}` ? type : translated;
  };

  const typeConfig = getTypeConfig(type);

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <BackBtnMotion>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>{t("navbar.tools")}</span>
        </Link>
      </BackBtnMotion>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <FadeInUpMotion className="space-y-6">
          {/* Tool Image */}
          <div className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden border bg-accent/50 group">
            <Image
              src={image || "/placeholder.svg"}
              alt={String(t(nameKey as any))}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Action Button */}
          <div className="flex gap-3 flex-wrap">
            <Button
              asChild
              size="lg"
              className="flex-1 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                {t("tools.visit")}
              </a>
            </Button>
          </div>
        </FadeInUpMotion>

        {/* Right Column - Details */}
        <FadeInUpMotion delay={0.1} className="space-y-6">
          {/* Title and Icon */}
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-accent/50 flex-shrink-0 border">
              <Image
                src={icon || "/placeholder.svg"}
                alt={`${String(t(nameKey as any))} icon`}
                className="object-cover"
                fill
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold tracking-tight">
                  {String(t(nameKey as any))}
                </h1>
                {starred && (
                  <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                )}
              </div>
              <p className="text-muted-foreground text-lg">
                {String(t(descriptionKey as any))}
              </p>
            </div>
          </div>

          {/* Type and Version */}
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className={cn(
                "text-sm font-medium px-4 py-2",
                typeConfig.color,
                typeConfig.bgColor,
                typeConfig.borderColor
              )}>
              {translateType(type)}
            </Badge>
            <Badge
              variant="outline"
              className={cn(
                "text-sm font-medium px-4 py-2 english_font",
                "text-gray-600 dark:text-gray-400",
                "bg-gray-500/10 dark:bg-gray-500/20",
                "border-gray-500/30"
              )}>
              v{version}
            </Badge>
          </div>

          {/* Tool Information Card */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">
                {t("tools.tool_information")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {t("tools.type_label")}
                  </p>
                  <p className="font-semibold">{translateType(type)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {t("tools.version")}
                  </p>
                  <p className="font-semibold english_font">{version}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {t("tools.status_label")}
                </p>
                <Badge
                  variant="outline"
                  className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30">
                  {t("tools.status_active")}
                </Badge>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  {t("tools.description_label")}
                </p>
                <p className="text-sm leading-relaxed">
                  {String(t(descriptionKey as any))}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Visit Tool CTA */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">
                    {t("tools.ready_to_use")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("tools.visit_to_get_started")}
                  </p>
                </div>
                <Button asChild size="lg" className="rounded-full">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("tools.visit")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeInUpMotion>
      </div>
    </section>
  );
};

export default page;
