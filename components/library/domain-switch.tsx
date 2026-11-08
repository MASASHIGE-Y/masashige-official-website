import Link from "next/link";
import { CircleDot, Languages } from "lucide-react";
import type { DomainId } from "@/lib/library/types";

export function DomainSwitch({ active }: { active: DomainId }) {
  return (
    <nav
      aria-label="学ぶ分野"
      className="mb-7 flex gap-6 border-b border-border text-sm"
    >
      <Link
        href="/library/baseball"
        aria-current={active === "baseball" ? "page" : undefined}
        className={`inline-flex items-center gap-2 border-b-2 pb-3 ${active === "baseball" ? "border-primary font-semibold text-primary" : "border-transparent text-muted-foreground"}`}
      >
        <CircleDot className="h-4 w-4" aria-hidden="true" />
        野球
      </Link>
      <Link
        href="/library/english"
        aria-current={active === "english" ? "page" : undefined}
        className={`inline-flex items-center gap-2 border-b-2 pb-3 ${active === "english" ? "border-primary font-semibold text-primary" : "border-transparent text-muted-foreground"}`}
      >
        <Languages className="h-4 w-4" aria-hidden="true" />
        英語
      </Link>
    </nav>
  );
}
