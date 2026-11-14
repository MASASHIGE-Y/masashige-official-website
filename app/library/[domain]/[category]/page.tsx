import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/library/breadcrumbs";
import { CatalogLink } from "@/components/library/catalog-link";
import { LibraryHeading } from "@/components/library/library-heading";
import { SourceList } from "@/components/library/source-list";
import { categories } from "@/lib/library/catalog";
import { libraryMetadata } from "@/lib/library/metadata";
import {
  getCategory,
  getDomain,
  getSources,
  getTopics
} from "@/lib/library/queries";
import { loadLibrary } from "@/lib/library/queries";

type Props = { params: Promise<{ domain: string; category: string }> };
export const dynamicParams = true;
export function generateStaticParams() {
  return categories
    .filter((category) => getTopics(category.id).length > 0)
    .map((category) => ({
      domain: category.domainId,
      category: category.slug
    }));
}
export async function generateMetadata({ params }: Props) {
  const { getTopics } = await loadLibrary();
  const { domain, category: slug } = await params;
  const category = getCategory(domain, slug);
  if (!category || getTopics(category.id).length === 0) notFound();
  return libraryMetadata(
    `${category.title}の参考動画・テーマ | Knowledge Library`,
    category.description,
    `/library/${domain}/${category.slug}`
  );
}

export default async function CategoryPage({ params }: Props) {
  const { getTopics, getResources } = await loadLibrary();
  const { domain: domainSlug, category: categorySlug } = await params;
  const domain = getDomain(domainSlug);
  const category = getCategory(domainSlug, categorySlug);
  if (!domain || !category || getTopics(category.id).length === 0) notFound();
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Library", href: "/library" },
          { label: domain.label, href: `/library/${domain.id}` },
          {
            label: category.title,
            href: `/library/${domain.id}/${category.slug}`
          }
        ]}
      />
      <LibraryHeading
        eyebrow={domain.title}
        title={category.title}
        description={category.description}
      />
      <section aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="mb-5 text-sm font-semibold">
          知りたいテーマを選ぶ
        </h2>
        <div className="grid gap-x-10 md:grid-cols-2">
          {getTopics(category.id).map((topic) => (
            <CatalogLink
              key={topic.id}
              href={`/library/${domain.id}/${category.slug}/${topic.slug}`}
              title={topic.title}
              description={topic.introduction}
              meta={`${getResources(topic.id).length}資料`}
            />
          ))}
        </div>
      </section>
      {category.id === "pronunciation" && (
        <section
          aria-labelledby="pronunciation-sources"
          className="mt-10 border-t border-border pt-7"
        >
          <h2 id="pronunciation-sources" className="mb-3 text-xl font-semibold">
            発音学習の参考チャンネル
          </h2>
          <p className="mb-5 text-sm leading-7 text-muted-foreground">
            Atsueigo、Miyu、だいじろーの公開チャンネル。個別動画を未登録の参考先も含みます。
          </p>
          <SourceList
            sources={getSources("english").filter((source) =>
              ["atsu", "miyu", "daijiro"].includes(source.id)
            )}
          />
        </section>
      )}
      {category.plannedThemes.length > 0 && (
        <aside className="mt-10 border-t border-border pt-6">
          <h2 className="text-sm font-semibold">これから整理するテーマ</h2>
          <p className="mt-3 text-sm leading-8 text-muted-foreground">
            {category.plannedThemes.join(" / ")}
          </p>
        </aside>
      )}
    </>
  );
}
