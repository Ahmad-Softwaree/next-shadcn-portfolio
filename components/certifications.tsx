"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Marquee } from "./magicui/marquee";
import { Link2, Star } from "lucide-react";
import Image from "next/image"; // Make sure you're importing this
import { Badge } from "./ui/badge";
import certificates, { Certificate } from "@/lib/data/certifications";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const Certifications = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Badge variant="secondary" className="mb-4">
        Certifications
      </Badge>
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
    <CertificationCard key={certification.id} {...certification} />
  ));

export default Certifications;

const CertificationCard = (val: Certificate) => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <>
      <div
        className="min-w-96 max-w-sm rounded-xl p-6
    bg-background/60 backdrop-blur-md border border-border shadow-md">
        {/* Certificate Image */}

        <div className="w-full h-48 relative overflow-hidden rounded-md mb-4">
          <Image
            onClick={() => setOpenImage(true)}
            src={val.image}
            alt={val.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Title and Link */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">{val.title}</p>
          <div className="space-x-2 flex flex-row justify-center items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href={val.url} target="_blank">
                <Link2 className="w-4 h-4" />
              </Link>
            </Button>
            {val.starred && <Star className="h-5 w-5 text-yellow-400" />}
          </div>
        </div>
      </div>

      {openImage && (
        <Dialog open={openImage} onOpenChange={setOpenImage}>
          <DialogContent className="min-w-[90%] p-0 overflow-hidden">
            <DialogHeader className="px-4 pt-4 pb-2">
              <DialogTitle className="text-base font-medium">
                {val.title}
              </DialogTitle>
            </DialogHeader>

            <div className="relative w-full h-[70vh]">
              <Image
                src={val.image}
                alt={val.title}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
