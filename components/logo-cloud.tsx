import { works } from "@/lib/data/works";
import { HTMLAttributes } from "react";

function LogoCloud(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <p className="text-center">Trusted by engineers at</p>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-4 [&_img]:h-auto [&_img]:w-24 xs:[&_img]:w-auto xs:[&_img]:h-8 text-muted-foreground">
        {works.map((file) => (
          <img
            key={file}
            src={`/works/${file}`}
            alt={file.replace(/\.(png|jpe?g|svg)$/, "")}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default LogoCloud;
