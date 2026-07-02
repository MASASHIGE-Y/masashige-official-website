import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { localizedContent, type Locale, youtubeVideos } from "@/lib/content";

type LatestYoutubeSectionProps = {
  locale: Locale;
};

export function LatestYoutubeSection({ locale }: LatestYoutubeSectionProps) {
  const content = localizedContent[locale];

  return (
    <section className="section-padding bg-secondary/45">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={content.latestYoutube.eyebrow}
            title={content.latestYoutube.title}
            description={content.latestYoutube.description}
          />
          <Button asChild variant="outline">
            <Link
              href="https://www.youtube.com/@shigekyalonziu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.latestYoutube.button}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {youtubeVideos.map((video, index) => {
            const videoContent = content.latestYoutube.videos[index];

            return (
            <Link
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-transform hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={video.thumbnail}
                  alt={videoContent.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/25 text-white">
                  <PlayCircle className="h-14 w-14" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{videoContent.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {videoContent.description}
                </p>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
