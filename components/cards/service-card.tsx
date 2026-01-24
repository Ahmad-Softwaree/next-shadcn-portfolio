import { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

const ServiceCard = (val: Service) => {
  const t = useTranslations("services");

  return (
    <article
      className={cn(
        "group cursor-pointer relative flex flex-col  rounded-xl border bg-card p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50",
        "animate-in fade-in slide-in-from-bottom-4 hover:z-10"
      )}
      style={{
        animationDelay: `${val.id * 100}ms`,
        animationFillMode: "backwards",
      }}>
      <div className="mb-4 h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10">
        <val.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
        {t(`${val.textKey}.title` as any)}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {t(`${val.textKey}.description` as any)}
      </p>
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/5 via-primary/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 -z-20 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-primary/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
    </article>
  );
};

export default ServiceCard;
