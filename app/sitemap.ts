import type { MetadataRoute } from "next";
import { loadLibrary } from "@/lib/library/queries";

export const revalidate = 60;

const siteUrl = "https://masashige-official-website.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { publicLibraryPaths } = await loadLibrary();
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    ...["/education", "/speaking", ...publicLibraryPaths()].map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/library" ? 0.8 : 0.6
    }))
  ];
}
