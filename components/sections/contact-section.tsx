import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  contactIntents,
  localizedContent,
  site,
  socials,
  type Locale
} from "@/lib/content";

type ContactSectionProps = {
  locale: Locale;
};

export function ContactSection({ locale }: ContactSectionProps) {
  const content = localizedContent[locale];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            title={content.contact.title}
            description={content.contact.description}
          />
          <div className="mt-8 grid gap-4">
            {contactIntents.map((intent, index) => {
              const Icon = intent.icon;
              const intentContent = content.contact.intents[index];

              return (
                <div key={intent.title} className="flex gap-4 rounded-lg p-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{intentContent.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {intentContent.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-lg border border-border bg-secondary/50 p-5">
            <p className="font-medium">{content.contact.noteTitle}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {content.contact.noteDescription} {content.contact.feePrefix}:{" "}
              {content.speaking.fee}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Button key={social.label} asChild variant="outline" size="sm">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>{content.contact.formTitle}</CardTitle>
            <CardDescription>
              {content.contact.formDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-md border border-border bg-secondary/40">
              <iframe
                src={site.googleFormEmbedUrl}
                title={content.contact.formIframeTitle}
                className="h-[760px] w-full bg-background md:h-[820px]"
                loading="lazy"
              >
                Loading...
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
