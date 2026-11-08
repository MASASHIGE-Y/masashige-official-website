import { LibraryHeader } from "@/components/library/library-header";
import { SiteFooter } from "@/components/site-footer";
import "@/components/library/library.css";

export default function LibraryLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <a
        href="#library-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:p-4 focus:text-primary"
      >
        本文へ進む
      </a>
      <LibraryHeader />
      <main id="library-content" lang="ja" className="container pb-20 md:pb-28">
        {children}
      </main>
      <SiteFooter locale="ja" />
    </div>
  );
}
