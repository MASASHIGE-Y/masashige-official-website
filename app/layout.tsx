import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";

import "./globals.css";

const siteUrl = "https://masashige-official-website.vercel.app";
const siteTitle = "Masashige Yamamoto | 山本雅茂 Official Website";
const siteDescription =
  "元高校数学教員・JICA海外協力隊・Webエンジニア。教育・国際協力・テクノロジーを通じて、一歩踏みだす小さな勇気を届けます。";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Masashige Yamamoto"
  },
  description: siteDescription,
  keywords: [
    "Masashige Yamamoto",
    "山本雅茂",
    "Shige",
    "教育",
    "国際協力",
    "JICA海外協力隊",
    "Webエンジニア",
    "講演",
    "ケニア",
    "挑戦"
  ],
  authors: [{ name: "Masashige Yamamoto", url: siteUrl }],
  creator: "Masashige Yamamoto",
  publisher: "Masashige Yamamoto",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Masashige Yamamoto Official Website",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/hero.JPG",
        width: 1200,
        height: 630,
        alt: "Masashige Yamamoto speaking with students in a classroom"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero.JPG"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Masashige Yamamoto",
      alternateName: ["山本雅茂", "Shige"],
      url: siteUrl,
      jobTitle: [
        "Educator",
        "Former JICA Volunteer",
        "Engineer",
        "Speaker"
      ],
      knowsAbout: [
        "Education",
        "International Cooperation",
        "Technology",
        "Public Speaking",
        "Kenya"
      ],
      sameAs: [
        "https://www.youtube.com/@shigekyalonziu",
        "https://note.com/shige_raha0209",
        "https://www.instagram.com/shigekyalonziu/",
        "https://github.com/MASASHIGE-Y"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Masashige Yamamoto Official Website",
      url: siteUrl,
      description: siteDescription,
      inLanguage: ["ja", "en"],
      publisher: {
        "@id": `${siteUrl}/#person`
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJp.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
