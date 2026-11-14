"use client";

import { useState } from "react";
import { useClient } from "sanity";
import { copySections, initialCopy } from "../lib/sanity/copy.ts";
import { resources } from "../lib/library/resources";
import { defaultLinks } from "../lib/sanity/links.ts";

export function SeedTool() {
  const client = useClient({ apiVersion: "2026-11-01" });
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">(
    "idle"
  );
  async function seed() {
    setStatus("saving");
    try {
      let transaction = client.transaction();
      for (const section of copySections)
        transaction = transaction.createIfNotExists(initialCopy(section.id));
      for (const video of resources) {
        if (video.kind !== "video") continue;
        transaction = transaction.createIfNotExists({
          _id: video.id,
          _type: "libraryVideo",
          title: video.title,
          url: `https://www.youtube.com/watch?v=${video.videoId}`,
          sourceId: video.sourceId,
          topicIds: video.topicIds,
          metadataCheckedAt: video.metadataCheckedAt
        });
      }
      transaction = transaction.createIfNotExists({
        _id: "libraryConfig",
        _type: "libraryConfig",
        enabled: true
      });
      transaction = transaction.createIfNotExists({
        _id: "siteLinks",
        _type: "siteLinks",
        ...defaultLinks
      });
      await transaction.commit();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }
  return (
    <div style={{ padding: 32, maxWidth: 720 }}>
      <h1>初期データ</h1>
      <p>
        現在サイトに掲載中の文言・動画をSanityに保存し、CMSの動画表示へ切り替えます。既存のSanity文書は上書きしません。保存内容は公開されます。
      </p>
      <button
        type="button"
        disabled={status === "saving" || status === "done"}
        onClick={seed}
      >
        現在の公開データを取り込む
      </button>
      <p role="status">
        {status === "saving"
          ? "保存中…"
          : status === "done"
            ? "取り込みが完了しました。"
            : status === "error"
              ? "取り込みに失敗しました。権限と接続を確認してください。再実行しても既存の文書は上書きしません。"
              : ""}
      </p>
    </div>
  );
}
