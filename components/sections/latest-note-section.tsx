import Link from "next/link";
import { ArrowUpRight, NotebookPen } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { localizedContent, noteArticles, type Locale } from "@/lib/content";

type LatestNoteSectionProps = {
  locale: Locale;
};

export function LatestNoteSection({ locale }: LatestNoteSectionProps) {
  const content = localizedContent[locale];

  return (
    <section id="latest" className="section-padding bg-background">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={content.latestNote.eyebrow}
            title={content.latestNote.title}
            description={content.latestNote.description}
          />
          <Button asChild variant="outline">
            <Link
              href="https://note.com/shige_raha0209"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.latestNote.button}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {noteArticles.map((article, index) => {
            const articleContent = content.latestNote.articles[index];

            return (
            <Card
              key={article.title}
              className="h-full transition-transform hover:-translate-y-1 hover:shadow-soft"
            >
              <CardHeader>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <NotebookPen className="h-5 w-5" />
                </div>
                <CardDescription>{articleContent.date}</CardDescription>
                <CardTitle>{articleContent.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-muted-foreground">
                  {articleContent.excerpt}
                </p>
                <Button asChild className="mt-6" variant="link">
                  <Link
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.latestNote.readMore}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
