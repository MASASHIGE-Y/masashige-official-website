import { SectionHeading } from "@/components/section-heading";
import { localizedContent, type Locale } from "@/lib/content";

type CareerSectionProps = {
  locale: Locale;
};

export function CareerSection({ locale }: CareerSectionProps) {
  const content = localizedContent[locale];

  return (
    <section id="career" className="section-padding bg-background">
      <div className="container">
        <SectionHeading
          eyebrow={content.career.eyebrow}
          title={content.career.title}
          description={content.career.description}
          align="center"
        />
        <div className="mx-auto mt-14 max-w-4xl">
          {content.career.items.map((item) => (
            <div
              key={item.period}
              className="grid gap-5 md:grid-cols-[180px_1fr]"
            >
              <div className="pb-10 text-sm font-semibold text-primary">
                {item.period}
              </div>
              <div className="relative border-l border-border pb-10 pl-7">
                <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
