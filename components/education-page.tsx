"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLocale, useSiteContent } from "@/components/locale-provider";
import {
  AboutSection,
  ActivitiesSection,
  CareerSection,
  GallerySection,
  QualificationsSection
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function EducationPage() {
  const { locale, setLocale } = useLocale();
  const siteContent = useSiteContent(locale);
  const content = siteContent.education;

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteHeader locale={locale} onLocaleChange={setLocale} page="education" />
      <main>
        <section className="pt-20">
          <div className="container py-5 text-xs text-muted-foreground">
            <Link
              href="/"
              className="inline-flex min-h-8 items-center gap-2 hover:text-primary"
            >
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
              {content.backLabel}
            </Link>
          </div>
          <div className="relative isolate min-h-[430px] bg-emerald-950 text-white">
            <Image
              src="/images/gallery1.JPG"
              alt={siteContent.pathways.items.education.imageAlt}
              fill
              priority
              sizes="100vw"
              className="-z-20 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-black/45" />
            <div className="container flex min-h-[430px] flex-col justify-between gap-12 py-9 md:py-11">
              <p className="text-xs font-medium">{content.eyebrow}</p>
              <div className="max-w-3xl">
                <h1 className="break-words text-3xl font-semibold leading-relaxed md:text-5xl md:leading-relaxed">
                  {content.title}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-8 md:text-base">
                  {content.lead}
                </p>
                <Link href="/speaking" className="hero-link mt-5">
                  {content.speakingCta}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <nav
            aria-label={content.title}
            className="container flex flex-wrap gap-x-7 gap-y-2 py-6 text-sm text-primary"
          >
            {content.navItems
              .filter((item) => item.href.startsWith("#"))
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </section>
        <AboutSection locale={locale} />
        <CareerSection locale={locale} />
        <QualificationsSection locale={locale} />
        <ActivitiesSection locale={locale} mode="fieldwork" />
        <GallerySection locale={locale} />
        <section className="border-t border-border py-10">
          <div className="container flex flex-wrap items-center justify-between gap-5">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-3 text-sm text-primary"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              {content.backLabel}
            </Link>
            <Link
              href="/speaking"
              className="inline-flex min-h-11 items-center gap-3 text-sm text-primary"
            >
              {content.speakingCta}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
