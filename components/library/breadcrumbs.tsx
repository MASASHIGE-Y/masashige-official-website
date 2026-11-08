import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { librarySiteUrl } from "@/lib/library/metadata";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, librarySiteUrl).href
    }))
  };
  return (
    <>
      <nav aria-label="パンくず" className="pb-8 pt-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs leading-6 text-muted-foreground">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="h-3 w-3 shrink-0" aria-hidden="true" />
              )}
              {index === items.length - 1 ? (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}
