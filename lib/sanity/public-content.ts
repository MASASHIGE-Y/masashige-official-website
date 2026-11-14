import "server-only";
import { cache } from "react";
import { applyCopy } from "./copy.ts";
import { parseVideos, preserveVideoNotes } from "./validation.ts";
import { defaultLinks, parseLinks } from "./links.ts";
import { readPublished } from "./fetch.ts";
import { resources } from "@/lib/library/resources";
import { sources, topics } from "@/lib/library/catalog";

export const getPublicContent = cache(async () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  if (!projectId)
    return { copy: applyCopy([]), resources, links: defaultLinks };
  // No read/write token: the public site can only access published public data.
  const result = await readPublished(projectId, dataset);
  if (result.enabled != null && typeof result.enabled !== "boolean")
    throw new Error("Invalid video configuration");
  const copy = applyCopy(result.copy);
  const videos =
    result.enabled === true
      ? parseVideos(
          result.videos,
          topics.map((topic) => topic.id),
          sources.map((source) => source.id)
        )
      : resources.filter((resource) => resource.kind === "video");
  const mergedVideos = preserveVideoNotes(videos, resources);
  return {
    copy,
    links: parseLinks(result.links),
    resources: [
      ...resources.filter((resource) => resource.kind === "article"),
      ...mergedVideos
    ]
  };
});
