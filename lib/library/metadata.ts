import type { Metadata } from "next";

export const librarySiteUrl = "https://masashige-official-website.vercel.app";

export function libraryMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Masashige Yamamoto`,
      description,
      url: path,
      type: "website",
      locale: "ja_JP",
      images: [
        { url: "/images/hero.JPG", alt: "Masashige Yamamoto Official Website" }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.JPG"]
    }
  };
}
