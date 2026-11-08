import { ArrowUpRight } from "lucide-react";
import type { Source } from "@/lib/library/types";

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {sources.map((source) => (
        <a
          key={source.id}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 rounded-md border border-border p-4 text-sm leading-6 transition-colors hover:border-primary hover:bg-secondary/50"
        >
          <span>
            {source.name}
            {source.featured && (
              <span className="ml-2 inline-block text-xs font-medium text-primary">
                中心に学ぶ参考先
              </span>
            )}
          </span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-primary"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}
