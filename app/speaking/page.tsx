import type { Metadata } from "next";
import { SpeakingPage } from "@/components/speaking-page";

const title = "講演・ワークショップ・お問い合わせ";
const description =
  "山本雅茂の講演テーマ、講演実績、ご依頼・お問い合わせ。教育、国際協力、キャリア、挑戦について、対象に合わせた講演やワークショップを行います。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/speaking" },
  openGraph: {
    title,
    description,
    url: "/speaking",
    type: "website",
    images: ["/images/gallery-speaking.JPG"]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/gallery-speaking.JPG"]
  }
};

export default function Page() {
  return <SpeakingPage />;
}
