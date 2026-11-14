import { youtubeId } from "./validation.ts";

export const defaultLinks = {
  youtubeChannelUrl: "https://www.youtube.com/@shigekyalonziu",
  homeVideoUrl: "https://www.youtube.com/watch?v=OmK3UyVHSP8&t=40s"
};
export type SiteLinks = typeof defaultLinks;

export function youtubeChannel(input: unknown): boolean {
  if (typeof input !== "string") return false;
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return false;
  }
  return (
    url.protocol === "https:" &&
    ["www.youtube.com", "youtube.com", "m.youtube.com"].includes(
      url.hostname
    ) &&
    !url.username &&
    !url.password &&
    /^\/(?:@[^/]+|(?:channel|c|user)\/[^/]+)\/?$/.test(url.pathname)
  );
}

export function parseLinks(input: unknown): SiteLinks {
  if (input === null || input === undefined) return defaultLinks;
  if (typeof input !== "object") throw new Error("Invalid site links");
  const links = input as Record<string, unknown>;
  if (
    !youtubeChannel(links.youtubeChannelUrl) ||
    !youtubeId(links.homeVideoUrl)
  )
    throw new Error("Invalid YouTube links");
  return {
    youtubeChannelUrl: String(links.youtubeChannelUrl),
    homeVideoUrl: String(links.homeVideoUrl)
  };
}
