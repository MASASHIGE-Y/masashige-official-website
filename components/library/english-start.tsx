import Link from "next/link";
import { ArrowRight, AudioLines, Headphones, NotebookPen } from "lucide-react";

const entries = [
  {
    label: "音を知る",
    title: "発音記号と音の入口",
    description: "AtsueigoとMiyuの公開動画から、音の学習を始める。",
    href: "/library/english/pronunciation/sounds-and-symbols",
    icon: AudioLines
  },
  {
    label: "練習を選ぶ",
    title: "発音学習の進め方",
    description: "学習の視点を整理し、参考動画と練習記録へつなげる。",
    href: "/library/english/pronunciation/practice",
    icon: NotebookPen
  },
  {
    label: "聞く力へ",
    title: "リスニングの学習方法",
    description: "タロサックの公開動画を参考先に、聞く練習を考える。",
    href: "/library/english/listening/practice",
    icon: Headphones
  }
];

export function EnglishStart() {
  return (
    <section aria-labelledby="english-start" className="mb-12 mt-2">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="section-eyebrow">START HERE</p>
          <h2 id="english-start" className="text-2xl font-semibold">
            今日は、どこから学ぶ？
          </h2>
        </div>
        <p className="text-xs text-muted-foreground">
          Atsueigoを中心とした公開資料
        </p>
      </div>
      <div className="grid gap-0 border-y border-border md:grid-cols-3">
        {entries.map((entry, index) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="group border-b border-border py-7 last:border-b-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
          >
            <div className="mb-5 flex items-center gap-3 text-xs text-primary">
              <entry.icon className="h-5 w-5" aria-hidden="true" />
              <span>
                0{index + 1} / {entry.label}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{entry.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {entry.description}
            </p>
            <ArrowRight
              className="mt-5 h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
