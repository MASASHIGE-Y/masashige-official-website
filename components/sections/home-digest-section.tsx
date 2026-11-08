import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  activities,
  brand,
  localizedContent,
  type Locale
} from "@/lib/content";
import { KipepeoSection } from "./kipepeo-section";

export function HomeDigestSection({ locale }: { locale: Locale }) {
  const content = localizedContent[locale];
  return (
    <div className="container">
      <KipepeoSection locale={locale} />
      <section
        id="publications"
        className="flex scroll-mt-28 flex-wrap items-center justify-between gap-5 border-t border-border py-7"
      >
        <h2 className="text-sm font-semibold">
          {content.homeDigest.publications}
        </h2>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {activities
            .filter((activity) => activity.href?.startsWith("https://"))
            .map((activity) => (
              <a
                key={activity.title}
                href={activity.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
              >
                <activity.icon aria-hidden="true" className="h-4 w-4" />
                {activity.title}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ))}
        </div>
      </section>
      <section
        id="speaking"
        className="workshop-invitation relative isolate my-5 flex min-h-64 scroll-mt-28 flex-col justify-end gap-5 overflow-hidden px-6 py-8 text-white md:my-8 md:min-h-72 md:flex-row md:items-end md:justify-between md:px-9"
      >
        <Image
          src={brand.workshopImage}
          alt=""
          fill
          sizes="(min-width: 1240px) 1160px, 100vw"
          className="-z-20 object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <div>
          <h2 className="text-xl font-semibold">
            {content.homeDigest.speaking}
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-7 text-white/90">
            {content.homeDigest.speakingDescription}
          </p>
        </div>
        <Link
          href="/speaking"
          className="inline-flex min-h-11 shrink-0 items-center gap-5 border-b border-white/70 text-sm font-medium text-white underline-offset-4 hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {content.homeDigest.speakingCta}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
