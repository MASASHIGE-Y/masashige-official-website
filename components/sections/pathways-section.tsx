"use client";

import { useSiteContent } from "@/components/locale-provider";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { type Locale } from "@/lib/content";
import { domainPresentation } from "@/lib/library/presentation";

const pathways = [
  {
    id: "education",
    href: "/education",
    image: "/images/gallery1.JPG",
    position: "object-center",
    accent: "border-primary/30"
  },
  {
    id: "baseball",
    href: "/library/baseball",
    image: domainPresentation.baseball.image,
    position: "object-[center_75%]",
    accent: "border-emerald-800/40"
  },
  {
    id: "english",
    href: "/library/english",
    image: domainPresentation.english.image,
    position: "object-[center_10%]",
    accent: "border-teal-700/40"
  }
] as const;

export function PathwaysSection({ locale }: { locale: Locale }) {
  const content = useSiteContent(locale).pathways;

  return (
    <section
      aria-label={content.label}
      className="border-b border-border bg-background py-8 md:py-10"
    >
      <nav
        aria-label={content.label}
        className="container grid gap-6 md:grid-cols-3 md:gap-7"
      >
        {pathways.map((pathway) => {
          const item = content.items[pathway.id];
          return (
            <Link
              key={pathway.id}
              href={pathway.href}
              className={`group grid min-w-0 grid-cols-[96px_minmax(0,1fr)] items-center gap-4 border-b-2 pb-4 md:flex md:flex-col md:items-stretch md:gap-0 md:pb-5 ${pathway.accent} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4`}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary md:aspect-[16/7]">
                <Image
                  src={pathway.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 96px"
                  className={`object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none ${pathway.position}`}
                />
              </div>
              <div className="min-w-0 md:mt-4">
                <h2 className="flex min-w-0 items-center justify-between gap-3 break-words text-base font-semibold leading-relaxed md:text-xl">
                  {item.title}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  />
                </h2>
                <ul className="mt-2 space-y-1 text-xs leading-5 text-muted-foreground">
                  {item.credentials.map((credential) => (
                    <li key={credential}>{credential}</li>
                  ))}
                </ul>
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
