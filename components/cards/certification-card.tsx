import { Certificate } from "@/lib/data/certifications";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Link2, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { getCertificateTypeConfig } from "@/lib/config/certification-filters";
import { cn } from "@/lib/utils";
import { CardHoverMotion } from "@/components/shared/animate";

const CertificationCard = (val: Certificate) => {
  const [openImage, setOpenImage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const config = getCertificateTypeConfig(val.type);

  return (
    <>
      <CardHoverMotion
        className={cn(
          "w-[350px] h-full flex flex-col rounded-xl p-6 bg-background/60 backdrop-blur-md border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50",
          isHovered && "shadow-xl -translate-y-1 border-primary/50"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {/* Certificate Image */}
        <div className="w-full h-48 relative overflow-hidden rounded-md mb-4 cursor-pointer group">
          <Image
            onClick={() => setOpenImage(true)}
            src={val.image}
            alt={val.title}
            fill
            className="rounded-md object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>

        {/* Title and Link */}
        <div className="flex items-center justify-between mb-3">
          <p className="english_font text-lg font-semibold ">{val.title}</p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href={val.url} target="_blank">
                <Link2 className="w-4 h-4" />
              </Link>
            </Button>
            {val.starred && (
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            )}
          </div>
        </div>
        <Badge
          variant="outline"
          className={cn(
            "english_font text-xs px-2 py-0.5 rounded-full w-fit",
            config.bgColor,
            config.color,
            config.borderColor
          )}>
          {val.type}
        </Badge>
      </CardHoverMotion>

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

export default CertificationCard;
