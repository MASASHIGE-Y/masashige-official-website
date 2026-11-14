"use client";

import { useLocale, useSiteContent } from "@/components/locale-provider";

import { MotionDiv } from "@/components/motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { activities, type Locale } from "@/lib/content";

import { fadeUp } from "./animation";

type ActivitiesSectionProps = {
  locale: Locale;
  mode?: "all" | "publications" | "fieldwork";
};

export function ActivitiesSection({
  locale,
  mode = "all"
}: ActivitiesSectionProps) {
  const content = useSiteContent(locale);
  const { links } = useLocale();
  const heading =
    mode === "publications" ? content.publications : content.activities;
  const entries = activities
    .map((activity, index) => ({
      activity:
        activity.title === "YouTube"
          ? { ...activity, href: links.youtubeChannelUrl }
          : activity,
      index
    }))
    .filter(({ activity }) =>
      mode === "publications"
        ? Boolean(activity.href && isExternalUrl(activity.href))
        : mode === "fieldwork"
          ? !activity.href
          : true
    );

  return (
    <section
      id={mode === "publications" ? "publications" : "activities"}
      className="section-padding bg-background"
    >
      <div className="container">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
          align="center"
        />
        <div
          className={`mt-12 grid gap-x-12 gap-y-2 ${mode === "publications" ? "md:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {entries.map(({ activity, index }, displayIndex) => {
            const Icon = activity.icon;
            const activityContent = content.activities.items[index];
            const card = (
              <div className="activity-entry">
                <div className="mb-6 flex items-center justify-between">
                  <span className="activity-number">
                    {String(displayIndex + 1).padStart(2, "0")}
                  </span>
                  {activity.href && isExternalUrl(activity.href) && (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 text-primary"
                    />
                  )}
                  {activity.href && !isExternalUrl(activity.href) && (
                    <ArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 text-primary"
                    />
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {activityContent.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {activityContent.description}
                </p>
              </div>
            );

            return (
              <MotionDiv
                key={activity.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: displayIndex * 0.04, duration: 0.5 }}
              >
                {activity.href && !isExternalUrl(activity.href) ? (
                  <Link
                    href={activity.href}
                    className="block h-full cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {card}
                  </Link>
                ) : activity.href ? (
                  <a
                    href={activity.href}
                    target={isExternalUrl(activity.href) ? "_blank" : undefined}
                    rel={
                      isExternalUrl(activity.href)
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block h-full cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
