import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { domainPresentation } from "@/lib/library/presentation";
import type { DomainId } from "@/lib/library/types";

export function DomainBanner({
  domainId,
  categoryCount,
  topicCount,
  resourceCount,
  showAction = true
}: {
  domainId: DomainId;
  categoryCount: number;
  topicCount: number;
  resourceCount: number;
  showAction?: boolean;
}) {
  const presentation = domainPresentation[domainId];
  const isBaseball = domainId === "baseball";
  return (
    <>
      <section className="library-domain-banner">
        <Image
          src={presentation.image}
          alt={presentation.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="library-domain-banner-shade" />
        <div className="container relative flex h-full flex-col justify-between py-8 md:py-10">
          <p className="text-xs font-semibold">{presentation.eyebrow}</p>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm">
              {isBaseball
                ? "Baseball Library / 野球技術"
                : "English Library / 英語学習"}
            </p>
            <h1 className="text-2xl font-semibold leading-relaxed min-[380px]:text-3xl sm:text-4xl md:text-5xl md:leading-relaxed">
              {presentation.heading}
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-7 md:text-base">
              {presentation.lead}
            </p>
            {showAction && (
              <Link
                href={presentation.actionHref}
                className="mt-6 inline-flex min-h-11 items-center gap-5 border-b border-current py-2 text-sm font-medium"
              >
                {presentation.actionLabel}
                {isBaseball ? (
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            )}
          </div>
        </div>
      </section>
      <div className="library-domain-summary">
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <span>
            <strong className="mr-2 text-xl font-semibold tabular-nums">
              {categoryCount}
            </strong>
            カテゴリー
          </span>
          <span>
            <strong className="mr-2 text-xl font-semibold tabular-nums">
              {topicCount}
            </strong>
            テーマ
          </span>
          <span>
            <strong className="mr-2 text-xl font-semibold tabular-nums">
              {resourceCount}
            </strong>
            資料
          </span>
        </div>
        <a
          href={presentation.photoCredit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-muted-foreground underline underline-offset-4"
        >
          Photo: {presentation.photoCredit.label}
        </a>
      </div>
    </>
  );
}
