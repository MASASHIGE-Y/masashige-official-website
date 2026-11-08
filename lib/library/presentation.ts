import type { DomainId } from "./types";

export const domainPresentation: Record<
  DomainId,
  {
    image: string;
    imageAlt: string;
    eyebrow: string;
    heading: string;
    lead: string;
    actionLabel: string;
    actionHref: string;
    photoCredit: { label: string; url: string };
  }
> = {
  baseball: {
    image: "/images/library/baseball-field.jpg",
    imageAlt: "スタンドから内野のダイヤモンドと外野まで見渡せる野球場",
    eyebrow: "BASEBALL / FIELD NOTES",
    heading: "野球を、もっと深く。",
    lead: "打つ。守る。投げる。技術の引き出しを増やす。",
    actionLabel: "技術テーマを探す",
    actionHref: "#categories-heading",
    photoCredit: {
      label: "Unsplash",
      url: "https://unsplash.com/photos/an-aerial-view-of-a-baseball-stadium-in-a-city-DrAwDss1g64"
    }
  },
  english: {
    image: "/images/library/english-study.jpg",
    imageAlt: "ヘッドホン、ノート、ノートパソコンが置かれた学習用の机",
    eyebrow: "ENGLISH / STUDY NOTES",
    heading: "英語を、自分の言葉に。",
    lead: "聞く、声にする、振り返る。今の自分に必要な学びから。",
    actionLabel: "発音から始める",
    actionHref: "/library/english/pronunciation",
    photoCredit: {
      label: "Ivan Dimitrov / Unsplash",
      url: "https://unsplash.com/photos/an-apple-laptop-with-headphones-and-a-notebook-mXa1Xs-7UKo"
    }
  }
};
