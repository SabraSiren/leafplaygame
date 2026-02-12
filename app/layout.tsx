import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "700",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LeafPlay",
  description: "Indie game studio",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

import { LocaleProvider } from "@/context/LocaleContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} ${montserrat.variable}`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
