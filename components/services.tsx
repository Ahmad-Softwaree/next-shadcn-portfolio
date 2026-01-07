"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import services from "@/lib/data/services";
import { AnimateOnScroll } from "@/components/shared/animate";
import { cn } from "@/lib/utils";

const Services = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="service" className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              {String(t("services.badge" as any))}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {String(t("services.title" as any))}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {String(t("services.subtitle" as any))}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "group relative flex flex-col rounded-xl border bg-card p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50",
                  "animate-in fade-in slide-in-from-bottom-4",
                  hoveredId === service.id && "z-10"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "backwards",
                }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}>
                {/* Icon Container with Gradient Background */}
                <div className="mb-4 h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10">
                  <service.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>

                {/* Service Title */}
                <h3 className="mb-2 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                  {String(t(service.titleKey as any))}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {String(t(service.descriptionKey as any))}
                </p>

                {/* Hover Effect Background Gradient */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/5 via-primary/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Animated Border Effect */}
                <div className="absolute inset-0 -z-20 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-primary/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Services;
