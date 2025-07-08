import { services } from "@/lib/data/services";
import React from "react";
import { Badge } from "./ui/badge";

const Services = () => {
  return (
    <div
      id="service"
      className="w-full flex flex-col items-center justify-center py-12 xs:py-20 px-6"
    >
      <Badge variant="secondary" className="mb-4">
        Services
      </Badge>
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        You Dream It, I Build It
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <service.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{service.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
