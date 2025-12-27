import { Project } from "@/lib/data/projects";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ExternalLink, Eye, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  gits = [],
  tag,
  starred,
  types,
  id,
}: Project) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
          {title}
          {tag && (
            <Badge
              variant={
                tag == "down"
                  ? "destructive"
                  : tag == "production"
                    ? "default"
                    : "outline"
              }
              className="text-xs px-2 py-0.5 rounded-full">
              {tag}
            </Badge>
          )}
          {starred && <Star className="ml-2 h-5 w-5 text-yellow-400" />}
          <Link
            href={`/projects/${id}`}
            className="inline-flex ml-auto items-center gap-1 text-muted-foreground text-sm hover:underline">
            <Eye className="w-4 h-4" />
            Details
          </Link>
        </h3>

        {/* Types badges below the title line */}
        {types && types.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {types.map((type) => (
              <Badge
                key={type}
                variant="outline"
                className="text-xs px-2 py-0.5 rounded-full">
                {type}
              </Badge>
            ))}
          </div>
        )}

        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto flex-wrap">
          {/* Live URL button */}
          {liveUrl && tag != "down" ? (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live
              </a>
            </Button>
          ) : (
            <Button
              variant="default"
              className="rounded-full cursor-not-allowed opacity-50"
              disabled>
              Private Project
            </Button>
          )}

          {/* GitHub URLs buttons */}
          {gits.length > 0 ? (
            gits.map(({ url, name }, i) => (
              <Button
                key={i}
                variant="outline"
                className="rounded-full shadow-none"
                asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  View {name} Code
                </a>
              </Button>
            ))
          ) : (
            <Button
              variant="outline"
              className="rounded-full shadow-none cursor-not-allowed opacity-50"
              disabled>
              Private Git
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
