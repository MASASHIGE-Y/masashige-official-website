import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/library/breadcrumbs";
import { CategoryGrid } from "@/components/library/category-grid";
import { DomainBanner } from "@/components/library/domain-banner";
import { DomainSwitch } from "@/components/library/domain-switch";
import { EnglishStart } from "@/components/library/english-start";
import { SourceList } from "@/components/library/source-list";
import { domains } from "@/lib/library/catalog";
import { libraryMetadata } from "@/lib/library/metadata";
import { getCategories, getDomain, getSources } from "@/lib/library/queries";
import { loadLibrary } from "@/lib/library/queries";

type Props = { params: Promise<{ domain: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return domains.map((item) => ({ domain: item.id }));
}
export async function generateMetadata({ params }: Props) {
  const { domain: slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();
  return libraryMetadata(
    `${domain.label} | Knowledge Library`,
    domain.description,
    `/library/${domain.id}`
  );
}

export default async function DomainPage({ params }: Props) {
  const { getResources, getTopics } = await loadLibrary();
  const { domain: slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();
  const items = getCategories(domain.id);
  const isEnglish = domain.id === "english";
  const themes = items.flatMap((category) => getTopics(category.id));
  const resourceCount = new Set(
    themes.flatMap((topic) =>
      getResources(topic.id).map((resource) => resource.id)
    )
  ).size;
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Library", href: "/library" },
          { label: domain.label, href: `/library/${domain.id}` }
        ]}
      />
      <DomainBanner
        domainId={domain.id}
        categoryCount={items.length}
        topicCount={themes.length}
        resourceCount={resourceCount}
        showAction={
          !isEnglish ||
          themes.some((topic) => topic.categoryId === "pronunciation")
        }
      />
      <DomainSwitch active={domain.id} />
      {isEnglish && <EnglishStart />}
      <section aria-labelledby="categories-heading">
        <p className="section-eyebrow">
          {isEnglish ? "STUDY INDEX" : "THE GAME / FIVE AREAS"}
        </p>
        <h2
          id="categories-heading"
          className="mb-7 scroll-mt-28 text-2xl font-semibold"
        >
          {isEnglish ? "学びたいテーマから探す" : "磨きたいプレーから探す"}
        </h2>
        <CategoryGrid categories={items} domainId={domain.id} />
      </section>
      <section
        aria-labelledby="sources-heading"
        className="mt-12 border-t border-border pt-8"
      >
        <h2 id="sources-heading" className="mb-3 text-xl font-semibold">
          参考チャンネル
        </h2>
        <p className="mb-6 text-sm leading-7 text-muted-foreground">
          {isEnglish
            ? "Atsueigoを主な参考先として、複数の発信にも触れていきます。"
            : "指定の参考先と、登録動画の発信元です。すべてのチャンネルの動画を登録しているわけではありません。"}
        </p>
        <SourceList sources={getSources(domain.id)} />
      </section>
    </>
  );
}
