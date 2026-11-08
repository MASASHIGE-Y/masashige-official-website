import type { MetadataRoute } from "next";
import { publicLibraryPaths } from "@/lib/library/queries";

const siteUrl = "https://masashige-official-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
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
