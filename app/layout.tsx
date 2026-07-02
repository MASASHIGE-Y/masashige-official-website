import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  title: "Masashige Yamamoto | Official Website",
  description:
    "Educator, Engineer, Speaker. 教育・国際協力・Webエンジニアリングを横断する Masashige Yamamoto の公式サイト。",
  openGraph: {
    title: "Masashige Yamamoto | Official Website",
    description: "一歩踏みだす　小さな勇気",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJp.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
