import type { Resource, VideoResource } from "../library/types.ts";

function validDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value))
    return false;
  const date = new Date(`${value}T00:00:00Z`);
  return (
    Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
  );
}

export function youtubeId(input: unknown): string | undefined {
  if (typeof input !== "string") return;
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return;
  }
  if (url.protocol !== "https:" || url.username || url.password) return;
  const host = url.hostname;
  const parts = url.pathname.split("/").filter(Boolean);
  const id =
    host === "youtu.be"
      ? parts[0]
      : ["www.youtube.com", "youtube.com", "m.youtube.com"].includes(host)
        ? url.pathname === "/watch"
          ? url.searchParams.get("v")
          : ["shorts", "embed", "live"].includes(parts[0])
            ? parts[1]
            : undefined
        : undefined;
  return id && /^[\w-]{11}$/.test(id) ? id : undefined;
}

export function parseVideos(
  input: unknown,
  topicIds: string[],
  sourceIds: string[]
): VideoResource[] {
  if (!Array.isArray(input)) throw new Error("Invalid video response");
  const ids = new Set<string>();
  return input.map((doc) => {
    if (!doc || typeof doc !== "object")
      throw new Error("Invalid video document");
    const videoId = youtubeId(doc.url);
    if (
      !videoId ||
      typeof doc._id !== "string" ||
      !/^[\w-]+$/.test(doc._id) ||
      ids.has(doc._id) ||
      typeof doc.title !== "string" ||
      !doc.title.trim() ||
      doc.title.length > 500 ||
      !sourceIds.includes(doc.sourceId) ||
      !Array.isArray(doc.topicIds) ||
      doc.topicIds.length === 0 ||
      !doc.topicIds.every(
        (id: unknown) => typeof id === "string" && topicIds.includes(id)
      ) ||
      !validDate(doc.metadataCheckedAt)
    )
      throw new Error("Invalid video fields");
    ids.add(doc._id);
    return {
      id: doc._id,
      kind: "video",
      videoId,
      title: doc.title,
      sourceId: doc.sourceId,
      topicIds: doc.topicIds,
      presenters: [],
      tags: [],
      relatedResourceIds: [],
      metadataCheckedAt: doc.metadataCheckedAt,
      review: { status: "unwatched" },
      timestamps: [],
      published: true
    };
  });
}

export function preserveVideoNotes(
  videos: VideoResource[],
  originals: Resource[]
): VideoResource[] {
  return videos.map((video) => {
    const original = originals.find(
      (resource) => resource.kind === "video" && resource.id === video.id
    );
    if (original?.kind !== "video" || original.videoId !== video.videoId)
      return video;
    return {
      ...video,
      presenters: original.presenters,
      tags: original.tags,
      relatedResourceIds: original.relatedResourceIds,
      review: original.review,
      timestamps: original.timestamps
    };
  });
}
