"use client";

import { useLocale } from "@/components/locale-provider";

import { HeroSection, PathwaysSection } from "@/components/sections";
import { HomeDigestSection } from "@/components/sections/home-digest-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function HomePage() {
  const { locale, setLocale } = useLocale();

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
