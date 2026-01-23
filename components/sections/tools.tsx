"use client";

import { Badge } from "@/components/ui/badge";
import { tools } from "@/lib/data/tools";
import SpecialToolCard from "../cards/special-tool-card";
import { Link } from "@/i18n/navigation";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animate";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

const ToolsPreview = () => {
  const t = useTranslations();
  const topTools = tools.filter((tool) => tool.showInHome);

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="tools" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <Badge variant="secondary" className="mb-4 text-base px-6 py-2">
              {t("navbar.tools")}
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {t("tools.title")}
            </h2>
            <p className="text-muted-foreground mt-2 sm:mt-4 text-xl max-w-2xl">
              {t("tools.subtitle")}
            </p>
          </div>

          {/* Tools - Special Layout */}
          <StaggerContainer className="space-y-12">
            {topTools.map((tool, index) => (
              <StaggerItem key={tool.id}>
                <SpecialToolCard {...tool} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* See All Tools Link */}
          <div className="flex justify-center mt-16">
            <Link href="/tools">
              <Button
                variant="outline"
                className="group rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105">
                {t("common.see_all_tools")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default ToolsPreview;
