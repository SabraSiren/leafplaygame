import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GamePageLayout } from "@/components/layout/GamePageLayout/GamePageLayout";
import { getGameBySlug } from "@/content/games";
import { getTranslations } from "@/localization";
import type { LocaleKey } from "@/localization";

const DEFAULT_LOCALE: LocaleKey = "en";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof process.env.VERCEL_URL === "string" ? `https://${process.env.VERCEL_URL}` : undefined);

function getGameDescription(slug: string): string {
  const t = getTranslations(DEFAULT_LOCALE);
  const description =
    (t.gamePage.games as Record<string, { description: string | readonly string[] }>)[slug]
      ?.description ?? "";
  const text = Array.isArray(description) ? description[0] ?? "" : description;
  return text.trim();
}

function metaDescription(text: string, maxLength = 160): string {
  const cleaned = text.replace(/\s+/g, " ").trim();

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  const sliced = cleaned.slice(0, maxLength);
  const lastSpaceIndex = sliced.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    return sliced.slice(0, lastSpaceIndex) + "...";
  }

  return sliced + "...";
}

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {};
  }

  const description = getGameDescription(slug);
  const metaDesc = metaDescription(description);
  const path = `/games/${slug}`;
  const canonicalUrl = siteUrl ? new URL(path, siteUrl).href : undefined;

  return {
    title: game.title,
    description: metaDesc || undefined,
    openGraph: {
      title: game.title,
      description: metaDesc || undefined,
      ...(canonicalUrl && { url: canonicalUrl }),
    },
    twitter: {
      card: "summary",
      title: game.title,
      description: metaDesc || undefined,
    },
    ...(canonicalUrl && {
      alternates: { canonical: canonicalUrl },
    }),
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <GamePageLayout game={game}>
      {/* Контент под конкретную игру — добавляется здесь (лучше - импортом отдельного компонента */}
    </GamePageLayout>
  );
}
