"use client";

import { useLocale, useSiteContent } from "@/components/locale-provider";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { SpeakingSection, ContactSection } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { brand } from "@/lib/content";

export function SpeakingPage() {
  const { locale, setLocale } = useLocale();
  const content = useSiteContent(locale);
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteHeader locale={locale} onLocaleChange={setLocale} page="speaking" />
      <main className="pt-20">
        <div className="container py-7">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-primary"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            {content.education.backLabel}
          </Link>
        </div>
        <section className="relative isolate flex min-h-80 items-end overflow-hidden text-white md:min-h-[420px]">
          <Image
            src={brand.workshopImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[37%_45%] md:object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="container py-9 md:py-12">
            <h1 className="text-2xl font-semibold leading-relaxed md:text-4xl">
              {content.homeDigest.speaking}
            </h1>
          </div>
        </section>
        <SpeakingSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
