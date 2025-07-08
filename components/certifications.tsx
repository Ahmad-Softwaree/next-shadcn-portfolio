import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Marquee } from "./magicui/marquee";
import { certificates } from "@/lib/data/certifications";
import { Link2 } from "lucide-react";
import Image from "next/image"; // Make sure you're importing this

const Certifications = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Official Achievements
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:40s]">
          <CertificationList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:40s]">
          <CertificationList />
        </Marquee>
      </div>
    </div>
  </div>
);

const CertificationList = () =>
  certificates.map((certification) => (
    <div
      key={certification.id}
      className="min-w-96 max-w-sm rounded-xl p-6
    bg-background/60 backdrop-blur-md border border-border shadow-md"
    >
      {/* Certificate Image */}
      <div className="w-full h-48 relative overflow-hidden rounded-md mb-4">
        <Image
          src={certification.image}
          alt={certification.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Title and Link */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{certification.title}</p>
        <Button variant="ghost" size="icon" asChild>
          <Link href={certification.url} target="_blank">
            <Link2 className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  ));

export default Certifications;
