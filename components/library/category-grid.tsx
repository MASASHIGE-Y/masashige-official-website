import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  CircleDot,
  Footprints,
  Headphones,
  Languages,
  Mic2,
  MoveUpRight,
  Shield,
  SpellCheck,
  Target,
  BookOpen
} from "lucide-react";
import type { Category, DomainId } from "@/lib/library/types";
import { getResources, getTopics } from "@/lib/library/queries";

const categoryIcons = {
  batting: MoveUpRight,
  infield: Footprints,
  outfield: CircleDot,
  pitching: Target,
  catching: Shield,
  pronunciation: AudioLines,
  listening: Headphones,
  speaking: Mic2,
  grammar: SpellCheck,
  vocabulary: Languages,
  methods: BookOpen
};

export function CategoryGrid({
  categories,
  domainId
}: {
  categories: Category[];
  domainId: DomainId;
}) {
  return (
    <div className="grid gap-x-7 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => {
        const topics = getTopics(category.id);
        const Icon =
          categoryIcons[category.id as keyof typeof categoryIcons] ?? BookOpen;
        const count = new Set(
          topics.flatMap((topic) =>
            getResources(topic.id).map((resource) => resource.id)
          )
        ).size;
        const content = (
          <>
            <div className="mb-6 flex items-center justify-between gap-4">
              <Icon
                className="h-7 w-7 text-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="text-xs text-muted-foreground">
                {domainId === "baseball" ? "FIELD" : "STUDY"} /{" "}
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              {topics.length > 0 && (
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              )}
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {category.description}
            </p>
            <p className="mt-5 text-xs font-medium text-primary">
              {topics.length > 0
                ? `${topics.length}テーマ / ${count}資料`
                : "資料を準備中"}
            </p>
          </>
        );
        return topics.length > 0 ? (
          <Link
            key={category.id}
            href={`/library/${domainId}/${category.slug}`}
            className="library-category group"
          >
            {content}
          </Link>
        ) : (
          <div
            key={category.id}
            className="library-category library-category-pending"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
