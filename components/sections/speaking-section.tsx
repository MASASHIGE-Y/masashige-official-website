import Link from "next/link";
import { ArrowRight, MessageCircle, Users } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { localizedContent, type Locale } from "@/lib/content";

type SpeakingSectionProps = {
  locale: Locale;
};

export function SpeakingSection({ locale }: SpeakingSectionProps) {
  const content = localizedContent[locale];

  return (
    <section id="speaking" className="section-padding bg-secondary/45">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow={content.speaking.eyebrow}
            title={content.speaking.title}
            description={content.speaking.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl text-primary">
                  {content.speaking.countLabel}
                </CardTitle>
                <CardDescription>{content.speaking.since}</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  {content.speaking.designTitle}
                </CardTitle>
                <CardDescription>{content.speaking.fee}</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {content.speaking.audiences.map((audience) => (
              <Badge key={audience} variant="secondary">
                {audience}
              </Badge>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.speaking.topics.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{content.speaking.recordsTitle}</CardTitle>
            <CardDescription>
              {content.speaking.recordsDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.speaking.records.map((record) => (
              <div
                key={`${record.title}-${record.date}`}
                className="rounded-lg border border-border p-4"
              >
                <p className="font-medium">{record.title}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span>{record.place}</span>
                  <span>{record.date}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {record.description}
                </p>
              </div>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="#contact">
                {content.speaking.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
