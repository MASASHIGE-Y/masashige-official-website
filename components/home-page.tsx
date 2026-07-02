"use client";

import { useState } from "react";

import {
  AboutSection,
  ActivitiesSection,
  CareerSection,
  ContactSection,
  GallerySection,
  HeroSection,
  LatestNoteSection,
  LatestYoutubeSection,
  ManifestoSection,
  QualificationsSection,
  SpeakingSection
} from "@/components/sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/content";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("ja");

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <SiteHeader locale={locale} onLocaleChange={setLocale} />
      <HeroSection locale={locale} />
      <ManifestoSection locale={locale} />
      <AboutSection locale={locale} />
      <CareerSection locale={locale} />
      <QualificationsSection locale={locale} />
      <ActivitiesSection locale={locale} />
      <SpeakingSection locale={locale} />
      <GallerySection locale={locale} />
      <LatestNoteSection locale={locale} />
      <LatestYoutubeSection locale={locale} />
      <ContactSection locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
