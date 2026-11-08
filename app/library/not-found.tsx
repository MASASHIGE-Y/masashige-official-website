import Link from "next/link";

export default function LibraryNotFound() {
  return (
    <div className="py-20">
      <p className="section-eyebrow">Knowledge Library</p>
      <h1 className="text-2xl font-semibold">
        このテーマは見つかりませんでした。
      </h1>
      <p className="mt-5 text-sm leading-8 text-muted-foreground">
        URLが変更されたか、まだ公開されていないページです。
      </p>
      <Link
        href="/library"
        className="mt-7 inline-block text-primary underline underline-offset-4"
      >
        Libraryのトップへ戻る
      </Link>
    </div>
  );
}
