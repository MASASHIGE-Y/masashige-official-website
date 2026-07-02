"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { localizedContent, type Locale } from "@/lib/content";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function SiteHeader({ locale, onLocaleChange }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const content = localizedContent[locale];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="text-sm font-semibold tracking-normal">
          {content.site.name}
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          <nav className="flex items-center gap-1">
            {content.navItems.map((item) => (
              <Button key={item.href} asChild variant="ghost" size="sm">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
          <LanguageToggle locale={locale} onLocaleChange={onLocaleChange} />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle
            locale={locale}
            onLocaleChange={onLocaleChange}
            compact
          />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            onClick={() => setOpen((current) => !current)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "grid border-t border-border/70 bg-background transition-all lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <nav className="container overflow-hidden">
          <div className="flex flex-col py-3">
            {content.navItems.map((item) => (
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
    <div className="flex rounded-md border border-border bg-background p-1">
      {(["ja", "en"] as const).map((item) => (
        <Button
          key={item}
          variant={locale === item ? "secondary" : "ghost"}
          size="sm"
          className={cn("h-8", compact ? "px-2 text-xs" : "px-3")}
          onClick={() => onLocaleChange(item)}
        >
          {item === "ja" ? "日本語" : compact ? "EN" : "English"}
        </Button>
      ))}
    </div>
  );
}
