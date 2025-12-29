import { Certificate } from "@/lib/data/certifications";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Link2, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

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
        <Badge
          key={val.type}
          variant="outline"
          className="text-xs px-2 py-0.5 rounded-full">
          {val.type}
        </Badge>
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

export default CertificationCard;
