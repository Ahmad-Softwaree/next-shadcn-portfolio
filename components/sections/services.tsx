"use client";

import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import services from "@/lib/data/services";
import { AnimateOnScroll } from "@/components/shared/animate";
import ServiceCard from "../cards/service-card";

const Services = () => {
  const t = useTranslations("services");

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="service" className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="badge">
              {t("badge")}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard {...service} key={service.id} />
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Services;
