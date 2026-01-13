"use client";
import Link from "next/link";
import React from "react";
import { Marquee } from "./magicui/marquee";
import { Badge } from "./ui/badge";
import certificates, { Certificate } from "@/lib/data/certifications";
import CertificationCard from "./cards/certification-card";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animate";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <AnimateOnScroll animation="fade-up">
      <div id="testimonials" className="flex justify-center items-center py-20">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Badge variant="secondary" className="mb-4">
            {t("certifications.badge")}
          </Badge>
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
            {t("certifications.official_achievements")}
          </h2>
          <div className="relative">
            <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
            <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
            <Marquee pauseOnHover className="[--duration:40s]">
              <CertificationList />
            </Marquee>
            <Marquee pauseOnHover reverse className="mt-6 [--duration:40s]">
              <CertificationList />
            </Marquee>
          </div>
          {/* See All Certifications Link */}
          <div className="flex justify-center mt-10">
            <Link href="/certifications">
              <Button
                variant="outline"
                className="group rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105">
                {t("common.see_all_certifications")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const CertificationList = () =>
  certificates.map((certification) => (
    <StaggerItem key={certification.id}>
      <CertificationCard {...certification} />
    </StaggerItem>
  ));

export default Certifications;
