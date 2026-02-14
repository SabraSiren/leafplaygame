import { notFound } from "next/navigation";
import { GamePageLayout } from "@/components/layout/GamePageLayout/GamePageLayout";
import { getGameBySlug } from "@/content/games";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <GamePageLayout game={game}>
      {/* Контент под конкретную игру — добавляется здесь или в отдельном компоненте с game-specific стилями. */}
    </GamePageLayout>
  );
}
