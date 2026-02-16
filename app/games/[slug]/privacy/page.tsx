import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Container } from "@/components/layout/Container/Container";
import { PrivacyContent } from "@/components/sections/Privacy/PrivacyContent";
import { getGameBySlug } from "@/content/games";
import { getTranslations } from "@/localization";
import type { LocaleKey } from "@/localization";

const DEFAULT_LOCALE: LocaleKey = "en";

interface GamePrivacyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: GamePrivacyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {};
  }

  const t = getTranslations(DEFAULT_LOCALE);
  const policy = (t.privacyPage.games as Record<string, { title: string }>)[slug];
  const title = policy?.title ?? `${game.title} — Privacy Policy`;

  return {
    title,
    description: `${game.title} — Privacy Policy. How we collect, use, and protect your information when you use this game.`,
  };
}

export default async function GamePrivacyPage({ params }: GamePrivacyPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const t = getTranslations(DEFAULT_LOCALE);
  const policy = (t.privacyPage.games as Record<string, unknown>)[slug];

  if (!game || !policy) {
    notFound();
  }

  return (
    <>
      <Header gameSlug={game.slug} />

      <main>
        <Container>
          <PrivacyContent gameSlug={game.slug} />
        </Container>
      </main>

      <Footer gameSlug={game.slug} />
    </>
  );
}
