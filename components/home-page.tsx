"use client";

import { useState } from "react";

import { HeroSection, PathwaysSection } from "@/components/sections";
import { HomeDigestSection } from "@/components/sections/home-digest-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/content";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("ja");

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <SiteHeader locale={locale} onLocaleChange={setLocale} />
      <HeroSection locale={locale} />
      <PathwaysSection locale={locale} />
      <HomeDigestSection locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
