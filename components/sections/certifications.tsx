"use client";
import { Link } from "@/i18n/navigation";
import React from "react";
import { Certification } from "@/lib/data/certifications";
import { AnimateOnScroll, StaggerItem } from "@/components/shared/animate";
import { useTranslations } from "next-intl";
import { Marquee } from "../ui/marquee";
import { Button } from "../ui/button";
import CertificationCard from "../cards/certification-card";
import CertificationsHeader from "../certifications/CertificationsHeader";
import { getHomeCertifications } from "@/lib/fetch/certification.action";

const Certifications = () => {
  const t = useTranslations("certifications");
  const data = getHomeCertifications();

  return (
    <AnimateOnScroll animation="fade-up">
      <section
        id="certifications"
        className="flex justify-center items-center py-20">
        <div className="h-full w-full flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
          <CertificationsHeader />
          <div className="relative">
            <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
            <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
            <Marquee pauseOnHover className="[--duration:40s]">
              <CertificationList data={data} />
            </Marquee>
            <Marquee pauseOnHover reverse className="mt-6 [--duration:40s]">
              <CertificationList data={data} />
            </Marquee>
          </div>
          <Link className="mt-10" href="/certifications">
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

const CertificationList = ({ data }: { data: Certification[] }) =>
  data.map((certification) => (
    <StaggerItem key={certification.id}>
      <CertificationCard {...certification} />
    </StaggerItem>
  ));

export default Certifications;
