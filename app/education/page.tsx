import type { Metadata } from "next";
import { EducationPage } from "@/components/education-page";

const title = "教育・国際協力";
const description =
  "山本雅茂の教育・国際協力の活動紹介。高校数学教員、JICA海外協力隊としてケニアで過ごした2年間、これまでの歩みと活動写真を紹介します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/education" },
  openGraph: {
    title: `${title} | Masashige Yamamoto`,
    description,
    url: "/education",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/images/gallery1.JPG", alt: "ケニアでの教育活動" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Masashige Yamamoto`,
    description,
    images: ["/images/gallery1.JPG"]
  }
};

export default function Page() {
  return <EducationPage />;
}
