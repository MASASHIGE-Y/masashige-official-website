"use client";

import { useSiteContent } from "@/components/locale-provider";

import { MotionSection } from "@/components/motion";
import { manifesto, type Locale } from "@/lib/content";

import { fadeUp } from "./animation";

type ManifestoSectionProps = {
  locale: Locale;
};

export function ManifestoSection({ locale }: ManifestoSectionProps) {
  const content = useSiteContent(locale);

  return (
    <MotionSection
      className="section-padding bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="section-eyebrow">{content.mission.eyebrow}</p>
            <h2 className="section-title">{content.mission.title}</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              {content.mission.description}
            </p>
          </div>
          <div className="border-t border-primary/25 pt-7 lg:mt-1">
            <p className="text-sm font-semibold text-primary">
              {manifesto.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {content.mission.subtitle}
            </p>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              {manifesto.credit}
            </p>
            <div className="mt-8 space-y-5 border-l border-primary/20 pl-5 text-base leading-8 text-foreground">
              {content.mission.lines.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="pt-2 font-semibold">{content.site.name}</p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
