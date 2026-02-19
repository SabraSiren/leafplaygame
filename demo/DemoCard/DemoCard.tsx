"use client";

import type { GameItem } from "@/content/games";
import { DemoPlayer } from "../DemoPlayer/DemoPlayer";
import { GeoHellDemo } from "../games/geohell";
import cardStyles from "@/components/sections/Games/GameCard.module.scss";

interface DemoCardProps {
  game: GameItem;
}

const DEMO_RENDERERS: Record<string, (props: { className: string }) => React.ReactNode> = {
  geohell: (props) => <GeoHellDemo {...props} />,
};

function getDemoRenderer(slug: string): ((props: { className: string }) => React.ReactNode) | null {
  return DEMO_RENDERERS[slug] ?? null;
}

export function DemoCard({ game }: DemoCardProps) {
  const renderDemo = getDemoRenderer(game.slug);
  if (!renderDemo) return null;

  return (
    <article
      className={cardStyles.card}
      data-card-context="game-page"
    >
      <div className={cardStyles.card__link}>
        <DemoPlayer
          previewSrc={game.mediaSrc}
          gameTitle={game.title}
          renderDemo={renderDemo}
        />
      </div>
    </article>
  );
}
