import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import FilmGrain from "@/components/motion/FilmGrain";
import Vignette from "@/components/motion/Vignette";
import EditorBridge from "@/components/__kodagen/EditorBridge";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const { company, seo } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: `%s — ${company.name}`,
  },
  description: seo.defaultDescription,
  applicationName: company.name,
  openGraph: {
    type: "website",
    siteName: company.name,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    locale: seo.locale,
    images: [{ url: seo.defaultOgImage, width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [seo.defaultOgImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-contrast antialiased">
        {children}
        <Vignette />
        <FilmGrain opacity={0.04} />
        <EditorBridge />
      </body>
    </html>
  );
}
