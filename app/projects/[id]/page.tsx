"use client";

import { useParams } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const page = () => {
  const params = useParams();
  const projectId = Number(params?.id);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Project Not Found</h2>
        <p className="text-muted-foreground mt-2">
          The project you are looking for does not exist.
        </p>
      </div>
    );
  }

  const {
    title,
    description,
    image,
    technologies,
    liveUrl,
    gits = [],
    tag,
    starred,
    types,
  } = project;
  console.log(image);
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="relative h-72 w-full rounded-xl overflow-hidden border border-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            {title}
            {starred && <Star className="h-6 w-6 text-yellow-400" />}
            {tag && (
              <Badge
                variant={
                  tag === "down"
                    ? "destructive"
                    : tag === "production"
                      ? "default"
                      : "outline"
                }>
                {tag}
              </Badge>
            )}
          </h1>

          {types && types.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Badge key={type} variant="outline">
                  {type}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        {(project.clients?.length || project.contributor) && (
          <div className="grid gap-4 md:grid-cols-2 mt-8">
            {Array.isArray(project.clients) && project.clients.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.clients.map((client, idx) => (
                      <li key={idx}>
                        {client.url ? (
                          <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline">
                            {client.name}
                          </a>
                        ) : (
                          <span>{client.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {project.contributor && (
              <Card>
                <CardHeader>
                  <CardTitle>Contributor</CardTitle>
                </CardHeader>
                <CardContent>
                  {project.contributor.url ? (
                    <a
                      href={project.contributor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline">
                      {project.contributor.name}
                    </a>
                  ) : (
                    <span>{project.contributor.name}</span>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <div className="flex gap-3 flex-wrap mt-4">
          {liveUrl && tag !== "down" ? (
            <Button asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" /> Live
              </a>
            </Button>
          ) : (
            <Button disabled className="opacity-50">
              Private Project
            </Button>
          )}

          {gits.length > 0 ? (
            gits.map(({ url, name }, i) => (
              <Button key={i} variant="outline" asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" /> View {name} Code
                </a>
              </Button>
            ))
          ) : (
            <Button disabled variant="outline" className="opacity-50">
              Private Git
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
