import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/library/breadcrumbs";
import { CatalogLink } from "@/components/library/catalog-link";
import { LibraryHeading } from "@/components/library/library-heading";
import { ResourceCard } from "@/components/library/resource-card";
import { libraryMetadata } from "@/lib/library/metadata";
import { categories } from "@/lib/library/catalog";
import { getCategory, getDomain, getTopics } from "@/lib/library/queries";
import { loadLibrary } from "@/lib/library/queries";

type Props = {
  params: Promise<{ domain: string; category: string; topic: string }>;
};
export const dynamicParams = true;
export function generateStaticParams() {
  return categories.flatMap((category) =>
    getTopics(category.id).map((topic) => ({
      domain: category.domainId,
      category: category.slug,
      topic: topic.slug
    }))
  );
}
export async function generateMetadata({ params }: Props) {
  const { getTopic, getResources } = await loadLibrary();
  const { domain, category: categorySlug, topic: topicSlug } = await params;
  const category = getCategory(domain, categorySlug);
  const topic = category && getTopic(category.id, topicSlug);
  if (!topic || getResources(topic.id).length === 0) notFound();
  return libraryMetadata(
    `${topic.title}の参考資料 | Knowledge Library`,
    topic.introduction,
    `/library/${domain}/${categorySlug}/${topic.slug}`
  );
}

export default async function TopicPage({ params }: Props) {
  const { getTopic, getResources, getRelatedTopics, topicPath } =
    await loadLibrary();
  const {
    domain: domainSlug,
    category: categorySlug,
    topic: topicSlug
  } = await params;
  const domain = getDomain(domainSlug);
  const category = getCategory(domainSlug, categorySlug);
  const topic = category && getTopic(category.id, topicSlug);
  if (!domain || !category || !topic) notFound();
  const resources = getResources(topic.id);
  if (resources.length === 0) notFound();
  const videos = resources.filter((resource) => resource.kind === "video");
  const articles = resources.filter((resource) => resource.kind === "article");
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Library", href: "/library" },
          { label: domain.label, href: `/library/${domain.id}` },
          {
            label: category.title,
            href: `/library/${domain.id}/${category.slug}`
          },
          { label: topic.title, href: topicPath(topic.id)! }
        ]}
      />
      <LibraryHeading
        eyebrow={`${domain.title} / ${category.title}`}
        title={topic.title}
        description={topic.introduction}
      />
      <div className="grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="border-y border-border py-5 lg:sticky lg:top-28">
          <details open>
            <summary className="cursor-pointer text-sm font-semibold">
              このページの内容
            </summary>
            <nav
              aria-label="ページ内目次"
              className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground"
            >
              <a href="#reading-questions" className="py-2 hover:text-primary">
                比較するときの問い
              </a>
              {videos.length > 0 && (
                <a href="#reference-videos" className="py-2 hover:text-primary">
                  参考動画 / {videos.length}
                </a>
              )}
              {articles.length > 0 && (
                <a
                  href="#reference-articles"
                  className="py-2 hover:text-primary"
                >
                  解説・考察記事 / {articles.length}
                </a>
              )}
              <a href="#related-topics" className="py-2 hover:text-primary">
                関連テーマ
              </a>
            </nav>
          </details>
        </aside>
        <div className="min-w-0">
          <section
            id="reading-questions"
            className="mb-10 scroll-mt-28 border-l-2 border-primary/35 pl-5"
          >
            <h2 className="text-lg font-semibold">比較するときの問い</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
              {topic.questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </section>
          {articles.length > 0 && (
            <section id="reference-articles" className="mb-10 scroll-mt-28">
              <h2 className="mb-6 text-xl font-semibold">解説・考察記事</h2>
              <div className="space-y-5">
                {articles.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </section>
          )}
          {videos.length > 0 && (
            <section id="reference-videos" className="scroll-mt-28">
              <h2 className="text-xl font-semibold">参考動画</h2>
              <p className="mb-6 mt-3 text-sm leading-7 text-muted-foreground">
                動画タイトルは投稿者の表現です。ここでの掲載は、その理論の正しさや効果を保証するものではありません。発信者ごとの前提を確かめながらご覧ください。
              </p>
              <div className="grid items-start gap-5 xl:grid-cols-2">
                {videos.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </section>
          )}
          <section id="related-topics" className="mt-12 scroll-mt-28">
            <h2 className="mb-6 text-xl font-semibold">関連テーマ</h2>
            <div className="grid gap-x-8 md:grid-cols-2">
              {getRelatedTopics(topic.relatedTopicIds).map((related) => (
                <CatalogLink
                  key={related.id}
                  href={topicPath(related.id)!}
                  title={related.title}
                  description={related.introduction}
                  meta={`${getResources(related.id).length}資料`}
                />
              ))}
            </div>
          </section>
          <Link
            href={`/library/${domain.id}/${category.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm text-primary"
          >
            {category.title}の一覧へ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
