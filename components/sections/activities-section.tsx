import { MotionDiv } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { activities, localizedContent, type Locale } from "@/lib/content";

import { fadeUp } from "./animation";

type ActivitiesSectionProps = {
  locale: Locale;
};

export function ActivitiesSection({ locale }: ActivitiesSectionProps) {
  const content = localizedContent[locale];

  return (
    <section id="activities" className="section-padding bg-background">
      <div className="container">
        <SectionHeading
          eyebrow={content.activities.eyebrow}
          title={content.activities.title}
          description={content.activities.description}
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const activityContent = content.activities.items[index];
            const card = (
              <Card className="h-full transition-transform hover:-translate-y-1 hover:shadow-soft">
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{activityContent.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7">
                    {activityContent.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );

            return (
              <MotionDiv
                key={activity.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ delay: index * 0.04, duration: 0.5 }}
              >
                {activity.href ? (
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
