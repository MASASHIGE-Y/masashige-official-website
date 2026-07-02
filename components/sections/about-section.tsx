import Image from "next/image";

import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { localizedContent, type Locale } from "@/lib/content";

import { fadeUp } from "./animation";

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const content = localizedContent[locale];

  return (
    <section id="about" className="section-padding bg-secondary/45">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80"
            alt={content.about.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            description={content.about.summary}
          />
          <p className="mt-6 text-sm font-semibold text-primary">
            {content.about.location}
          </p>
          <p className="mt-4 text-2xl font-semibold leading-10 text-foreground">
            {content.about.motto}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {content.about.highlights.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <p className="mt-8 text-base leading-8 text-muted-foreground">
            {content.about.belief}
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
