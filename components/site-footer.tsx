import { brand, localizedContent, socials, type Locale } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = localizedContent[locale];

  return (
    <footer className="border-t border-border bg-secondary/40 py-12">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <div>
              <p className="text-4xl font-semibold">
                {brand.name}
                <span className="text-primary">.</span>
              </p>
              <p className="mb-5 mt-2 text-xs text-muted-foreground">
                {brand.subLabel}
              </p>
            </div>
            <a
              href={brand.homeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={
                locale === "ja"
                  ? "ケニアで暮らした家の紹介動画を見る"
                  : "Watch the Kenya home tour"
              }
              className="block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src={brand.homeImage}
                alt={
                  locale === "ja"
                    ? "ケニアで暮らした石造りの家を描いたイラスト"
                    : "Illustration of the stone house where Shige lived in Kenya"
                }
                width={190}
                height={95}
                sizes="190px"
                className="h-auto w-[190px]"
              />
            </a>
          </div>
          <p className="text-sm font-medium">{content.site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {content.site.tagline}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary">
            <Link href="/education" className="underline underline-offset-4">
              {content.education.title}
            </Link>
            <Link href="/library" className="underline underline-offset-4">
              Knowledge Library
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                aria-label={social.label}
                title={social.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
