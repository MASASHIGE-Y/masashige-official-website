import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { MotionDiv } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hero, localizedContent, type Locale } from "@/lib/content";

import { fadeUp } from "./animation";

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const content = localizedContent[locale];

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center pt-24 md:min-h-[94vh]"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_62%,#f2f8ff_100%)]" />
      <div className="container grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge
            className="mb-5 border-primary/15 bg-primary/10 text-primary"
            variant="secondary"
          >
            {content.hero.eyebrow}
          </Badge>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.12] tracking-normal text-foreground md:text-7xl lg:text-[5.4rem]">
            {content.site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {content.hero.lead}
          </p>
          <div className="mt-7 space-y-2">
            <p className="text-2xl font-semibold text-foreground md:text-3xl">
              {content.site.name}
            </p>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              {content.site.roles.join(" / ")}
            </p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            {content.site.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#contact">
                {content.hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#about">{content.hero.secondaryCta}</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
            {content.hero.badges.map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-background/70 px-3 py-1"
              >
                {label}
              </span>
            ))}
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="relative pb-8"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <Image
              src={hero.image}
              alt={content.hero.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div className="absolute bottom-0 left-5 right-5 rounded-lg border border-slate-200 bg-white/95 p-5 shadow-lg backdrop-blur md:left-8 md:right-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">
                  {content.hero.kipepeoLabel}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {content.hero.kipepeoSubLabel}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <MapPin className="h-3.5 w-3.5" />
                {content.hero.kipepeoLocation}
              </div>
            </div>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
              {content.hero.kipepeoMessage}
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
