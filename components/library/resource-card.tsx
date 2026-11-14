import Link from "next/link";
import { ArrowUpRight, Play, FileText, Clock3 } from "lucide-react";
import { formatTimestamp, getSource, youtubeUrl } from "@/lib/library/queries";
import { loadLibrary } from "@/lib/library/queries";
import type { Resource } from "@/lib/library/types";

export async function ResourceCard({ resource }: { resource: Resource }) {
  const { getRelatedResources, topicPath } = await loadLibrary();
  if (resource.kind === "article") {
    return (
      <article
        id={resource.id}
        className="scroll-mt-28 rounded-lg border border-border bg-background p-6"
      >
        <p className="mb-4 flex items-center gap-2 text-xs text-primary">
          <FileText className="h-4 w-4" aria-hidden="true" />
          解説記事 / {resource.author}
        </p>
        <h3 className="text-lg font-semibold leading-8">{resource.title}</h3>
        <p className="mt-2 text-xs text-muted-foreground">
          更新日 {resource.updatedAt}
        </p>
        <div className="mt-5 space-y-4 text-sm leading-8">
          {resource.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {getRelatedResources(resource).length > 0 && (
          <div className="mt-6 border-t border-border pt-5">
            <h4 className="text-xs font-semibold">関連する動画・記事</h4>
            {getRelatedResources(resource).map((item) => {
              const path = topicPath(item.topicIds[0]);
              return path ? (
                <Link
                  key={item.id}
                  href={`${path}#${item.id}`}
                  className="mt-3 block text-sm leading-7 text-primary underline underline-offset-4"
                >
                  {item.title}
                </Link>
              ) : null;
            })}
          </div>
        )}
      </article>
    );
  }

  const source = getSource(resource.sourceId);
  const related = getRelatedResources(resource);
  return (
    <article
      id={resource.id}
      className="min-w-0 scroll-mt-28 rounded-lg border border-border bg-background p-5 md:p-7"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="flex items-center gap-2 font-medium text-primary">
          <Play className="h-4 w-4" aria-hidden="true" />
          参考動画
        </span>
        <span className="text-muted-foreground">
          {resource.review.status === "reviewed"
            ? "視聴メモあり"
            : "要点未整理"}
        </span>
      </div>
      <h3 className="break-words text-lg font-semibold leading-8">
        {resource.title}
      </h3>
      <p className="mt-4 text-xs leading-6 text-muted-foreground">
        {source ? (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary"
          >
            {source.name}
          </a>
        ) : (
          "発信者未設定"
        )}
      </p>
      {resource.presenters.length > 0 && (
        <p className="mt-1 text-xs leading-6 text-muted-foreground">
          出演者：{resource.presenters.join(" / ")}
        </p>
      )}
      <a
        href={youtubeUrl(resource.videoId)}
        target="_blank"
        rel="noopener noreferrer"
        className="my-6 inline-flex min-h-11 items-center gap-3 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        YouTubeで見る
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
      {resource.tags.length > 0 && (
        <ul
          aria-label="タグ"
          className="mb-4 flex flex-wrap gap-2 text-xs text-muted-foreground"
        >
          {resource.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      )}
      {resource.timestamps.length > 0 && (
        <ul className="space-y-3 border-t border-border py-5">
          {resource.timestamps.map((stamp) => (
            <li key={`${stamp.seconds}-${stamp.label}`}>
              <a
                href={youtubeUrl(resource.videoId, stamp.seconds)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm leading-6 text-primary hover:underline"
              >
                <Clock3
                  className="mt-1 h-3.5 w-3.5 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  {formatTimestamp(stamp.seconds)} {stamp.label}
                  <span className="ml-2 text-xs text-muted-foreground">
                    {stamp.origin === "publisher"
                      ? "投稿者のチャプター"
                      : "視聴メモ"}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
      {resource.review.status === "reviewed" ? (
        <div className="space-y-5 border-t border-border pt-5 text-sm leading-7">
          <section>
            <h4 className="font-semibold">発信者の説明（視聴メモ）</h4>
            <ul className="mt-2 space-y-2">
              {resource.review.sourceNotes.map((note, index) => (
                <li key={index}>
                  {note.text}{" "}
                  <a
                    href={youtubeUrl(resource.videoId, note.seconds)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    {formatTimestamp(note.seconds)}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {resource.review.interpretation.length > 0 && (
            <section>
              <h4 className="font-semibold">Shigeの考察</h4>
              {resource.review.interpretation.map((text, index) => (
                <p className="mt-2" key={index}>
                  {text}
                </p>
              ))}
            </section>
          )}
          {resource.review.evidence.length > 0 && (
            <section>
              <h4 className="font-semibold">根拠・参考資料</h4>
              {resource.review.evidence.map((item) => (
                <div className="mt-2" key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    {item.label}
                  </a>
                  <p>{item.note}</p>
                </div>
              ))}
            </section>
          )}
          <p className="text-xs text-muted-foreground">
            視聴・記録：{resource.review.reviewer} /{" "}
            {resource.review.reviewedAt}
          </p>
        </div>
      ) : (
        <p className="border-t border-border pt-4 text-xs leading-7 text-muted-foreground">
          タイトル・発信元を確認して登録した参考リンクです。動画の要約や主張の評価は、まだ掲載していません。テーマへの分類は編集上の目安です。
        </p>
      )}
      {related.length > 0 && (
        <div className="mt-5 border-t border-border pt-4">
          <h4 className="text-xs font-semibold">関連する動画・記事</h4>
          {related.map((item) => {
            const path = topicPath(item.topicIds[0]);
            return path ? (
              <Link
                key={item.id}
                href={`${path}#${item.id}`}
                className="mt-2 block text-sm leading-7 text-primary underline"
              >
                {item.title}
              </Link>
            ) : null;
          })}
        </div>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        タイトル・発信元の確認日：{resource.metadataCheckedAt}
      </p>
    </article>
  );
}
