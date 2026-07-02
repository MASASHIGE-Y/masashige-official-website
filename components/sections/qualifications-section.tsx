import { Award } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { localizedContent, type Locale } from "@/lib/content";

type QualificationsSectionProps = {
  locale: Locale;
};

export function QualificationsSection({ locale }: QualificationsSectionProps) {
  const content = localizedContent[locale];

  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="container">
        <SectionHeading
          eyebrow={content.qualifications.eyebrow}
          title={content.qualifications.title}
          description={content.qualifications.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.qualifications.items.map((qualification) => (
            <Card key={qualification.title} className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle>{qualification.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7">
                  {qualification.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
