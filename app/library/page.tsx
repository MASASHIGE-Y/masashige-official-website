import { ArrowUpRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/library/breadcrumbs";
import { LibraryHeading } from "@/components/library/library-heading";
import { domains } from "@/lib/library/catalog";
import { libraryMetadata } from "@/lib/library/metadata";
import { domainPresentation } from "@/lib/library/presentation";

export const metadata = libraryMetadata(
  "Knowledge Library | 野球と英語の学び",
  "野球技術と英語学習の参考動画・テーマを整理するMasashige YamamotoのKnowledge Library。分野とテーマから学びを探せます。",
  "/library"
);

export default function LibraryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "公式HP", href: "/" },
          { label: "Library", href: "/library" }
        ]}
      />
      <LibraryHeading
        eyebrow="LEARN / CONNECT / REFLECT"
        title="知りたいことから、学びをつなぐ。"
        description="野球と英語。専門家の発信をテーマごとに整理し、自分の学びを積み重ねるライブラリです。気になる分野から、参考動画や学習テーマをたどれます。"
      />
      <section aria-labelledby="domains-heading">
        <h2 id="domains-heading" className="mb-5 text-sm font-semibold">
          学ぶ分野を選ぶ
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {domains.map((domain) => {
            const presentation = domainPresentation[domain.id];
            return (
              <Link
                key={domain.id}
                href={`/library/${domain.id}`}
                className={`library-entry library-entry-${domain.id} group`}
              >
                <div className="library-entry-image relative overflow-hidden">
                  <Image
                    src={presentation.image}
                    alt={presentation.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                </div>
                <div className="py-6">
                  <p className="text-xs text-muted-foreground">
                    {domain.title}
                  </p>
                  <h3 className="mt-2 flex items-center justify-between gap-3 text-2xl font-semibold">
                    {domain.label}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {domain.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section
        aria-labelledby="library-policy"
        className="mt-14 grid gap-6 border-t border-border pt-8 md:grid-cols-[1fr_2fr]"
      >
        <h2
          id="library-policy"
          className="flex items-start gap-2 text-sm font-semibold"
        >
          <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
          このライブラリについて
        </h2>
        <div className="max-w-2xl space-y-3 text-sm leading-8 text-muted-foreground">
          <p>
            動画は投稿者の公式ページでご覧ください。発信者の説明、自分の考察、参考資料を区別し、確認できたことから記録していきます。
          </p>
          <p>
            現在は日本語の資料を中心に整理しています。動画リンクだけの項目には「要点未整理」と表示しています。
          </p>
        </div>
      </section>
    </>
  );
}
