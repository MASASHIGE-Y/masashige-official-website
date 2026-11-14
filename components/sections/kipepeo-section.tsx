"use client";

import { useSiteContent } from "@/components/locale-provider";

import Image from "next/image";
import { brand, type Locale } from "@/lib/content";

export function KipepeoSection({ locale }: { locale: Locale }) {
  const content = useSiteContent(locale);

  return (
    <section
      id="kipepeo"
      className="kipepeo-scene"
      aria-labelledby="kipepeo-title"
    >
      <div className="kipepeo-copy">
        <p className="mb-3 text-xs font-medium text-primary">
          Kipepeo / {content.hero.kipepeoSubLabel}
        </p>
        <h2
          id="kipepeo-title"
          className="text-xl font-semibold leading-relaxed md:text-2xl"
        >
          {content.mission.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {content.hero.kipepeoMessage}
        </p>
      </div>
      <div className="kipepeo-landscape" aria-hidden="true">
        <Image
          src={brand.kipepeoImage}
          alt=""
          fill
          sizes="(min-width: 768px) 55vw, 100vw"
          className="kipepeo-landscape-image"
        />
      </div>
    </section>
  );
}
