"use client";

import { useSiteContent } from "@/components/locale-provider";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { brand, hero, type Locale } from "@/lib/content";

export function HeroSection({ locale }: { locale: Locale }) {
  const content = useSiteContent(locale);

  return (
    <section id="home" className="hero-section">
      <div className="hero-scene">
        <Image
          src={hero.image}
          alt={content.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-scrim" />
        <div className="container relative z-10 flex h-full flex-col justify-between py-9 md:py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-white">
            <span>{brand.name}. / MASASHIGE YAMAMOTO</span>
            <span>{content.hero.eyebrow}</span>
          </div>
          <div className="hero-copy">
            <p className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-white/90">
              <span>{content.site.name}</span>
              <span className="font-semibold text-white">
                {content.hero.currentRole}
              </span>
            </p>
            <h1 className="hero-title">
              {content.hero.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/education" className="hero-link">
                {content.hero.secondaryCta}
                <ArrowDown className="h-4 w-4" />
              </Link>
              <Link href="/speaking#contact" className="hero-link">
                {content.hero.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
