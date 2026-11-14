"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { brand, type Locale } from "@/lib/content";
import { useSiteContent } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  page?: "home" | "education" | "speaking";
};

export function SiteHeader({
  locale,
  onLocaleChange,
  page = "home"
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const content = useSiteContent(locale);
  const navItems =
    page === "education"
      ? content.education.navItems
      : content.navItems.map((item) => ({
          ...item,
          href:
            page === "speaking" && item.href.startsWith("#")
              ? `/${item.href}`
              : item.href
        }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-2 sm:gap-4">
        <Link
          href={page === "home" ? "#home" : "/"}
          aria-label={`${brand.name}. / ${content.site.name}`}
          className="inline-flex shrink-0 items-center gap-1.5 text-base font-semibold tracking-normal min-[380px]:gap-2 min-[380px]:text-lg"
        >
          <Image
            src={brand.homeImage}
            alt=""
            width={80}
            height={40}
            sizes="(min-width: 380px) 80px, 64px"
            className="h-auto w-16 shrink-0 min-[380px]:w-20"
          />
          <span>
            {brand.name}
            <span className="text-primary">.</span>
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <LanguageToggle
            locale={locale}
            onLocaleChange={onLocaleChange}
            compact
          />
          <Button
            variant="ghost"
            size="icon"
            aria-label={
              locale === "ja"
                ? open
                  ? "メニューを閉じる"
                  : "メニューを開く"
                : open
                  ? "Close menu"
                  : "Open menu"
            }
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "grid border-t border-border/70 bg-background transition-all",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav
          id="site-navigation"
          inert={!open}
          className="container max-h-[calc(100svh-80px)] overflow-y-auto"
        >
          <div className="flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

type LanguageToggleProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  compact?: boolean;
};

function LanguageToggle({
  locale,
  onLocaleChange,
  compact = false
}: LanguageToggleProps) {
  return (
    <div
      className={cn(
        "flex rounded-md border border-border bg-background",
        compact ? "p-0.5" : "p-1"
      )}
    >
      {(["ja", "en"] as const).map((item) => (
        <Button
          key={item}
          variant={locale === item ? "secondary" : "ghost"}
          size="sm"
          className={cn("h-8", compact ? "px-1.5 text-xs" : "px-3")}
          onClick={() => onLocaleChange(item)}
          aria-pressed={locale === item}
          lang={item}
        >
          {item === "ja" ? "日本語" : compact ? "EN" : "English"}
        </Button>
      ))}
    </div>
  );
}
