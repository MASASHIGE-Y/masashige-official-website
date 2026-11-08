import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export function LibraryHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex min-h-20 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <Link
          href="/library"
          className="flex items-center gap-3 text-base font-semibold"
        >
          <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
          Knowledge Library
        </Link>
        <nav
          aria-label="ライブラリ"
          className="flex flex-wrap items-center gap-5 text-sm"
        >
          <Link
            href="/library/baseball"
            className="transition-colors hover:text-primary"
          >
            野球
          </Link>
          <Link
            href="/library/english"
            className="transition-colors hover:text-primary"
          >
            英語
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            公式HP
          </Link>
        </nav>
      </div>
    </header>
  );
}
