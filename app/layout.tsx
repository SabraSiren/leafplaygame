import type { Metadata, Viewport } from "next";
import { LocaleProvider } from "@/context/LocaleContext";
import { Inter, Montserrat } from "next/font/google";
import { STUDIO_NAME } from "@/content/site";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "700",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

const title = STUDIO_NAME;
const description =
  "LeafPlay — indie game studio. Discover our games, learn about the team, and get in touch.";

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: ["indie games", "game studio", "LeafPlay", "video games", "GeoHell", "Leaf Play"],
  authors: [{ name: title, ...(siteUrl && { url: siteUrl }) }],
  creator: title,
  openGraph: {
    type: "website",
    locale: "en_US",
    ...(siteUrl && { url: siteUrl }),
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(siteUrl && { alternates: { canonical: siteUrl } }),
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
