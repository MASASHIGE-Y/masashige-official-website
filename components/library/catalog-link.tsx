import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CatalogLink({
  href,
  title,
  description,
  meta
}: {
  href: string;
  title: string;
  description: string;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full min-w-0 flex-col border-t border-border py-7 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      <div className="mb-5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>{meta}</span>
        <ArrowUpRight
          className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
      <h3 className="break-words text-xl font-semibold leading-8">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}
