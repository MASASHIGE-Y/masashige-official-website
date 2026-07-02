import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { gallery, localizedContent, type Locale } from "@/lib/content";

type GallerySectionProps = {
  locale: Locale;
};

export function GallerySection({ locale }: GallerySectionProps) {
  const content = localizedContent[locale];

  return (
    <section id="gallery" className="section-padding bg-secondary/45">
      <div className="container">
        <SectionHeading
          eyebrow={content.gallery.eyebrow}
          title={content.gallery.title}
          description={content.gallery.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {gallery.map((item, index) => {
            const galleryContent = content.gallery.items[index];

            return (
            <div
              key={item.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-sm"
            >
              <Image
                src={item.image}
                alt={`${galleryContent.title} - ${galleryContent.caption}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-6 text-white">
                <p className="text-lg font-semibold">{galleryContent.title}</p>
                <p className="mt-1 text-sm text-white/80">
                  {galleryContent.caption}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
