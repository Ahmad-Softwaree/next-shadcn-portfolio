"use client";
import { Link } from "@/i18n/navigation";
import { AnimateOnScroll } from "@/components/shared/animate";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import ToolsHeader from "../tools/ToolsHeader";
import ToolsGrid from "../tools/ToolsGrid";
import { getHomeTools } from "@/lib/fetch/tools.action";

const ToolsPreview = () => {
  const t = useTranslations("tools");
  const data = getHomeTools();

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="tools" className="relative py-20 px-6 max-w-7xl mx-auto">
        <ToolsHeader />

        <ToolsGrid data={data} />

        <div className="flex justify-center mt-16">
          <Link href="/tools">
            <Button
              variant="outline"
              className="group rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105">
              {t("see_all")}
            </Button>
          </Link>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default ToolsPreview;
