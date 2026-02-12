"use client";

import type { GameItem } from "@/content/games";
import { Container } from "@/components/layout/Container/Container";
import { useLocale } from "@/context/LocaleContext";
import { GameCard } from "./GameCard";
import styles from "./GamesSection.module.scss";

interface GamesSectionProps {
  games: GameItem[];
}

export function GamesSection({ games }: GamesSectionProps) {
  const { t } = useLocale();
  const count = Math.min(games.length, 6);

  return (
    <section id="games" className={styles.games} aria-labelledby="games-title">
      <Container>
        <h2 id="games-title" className="section-title">
          {t.games.title}
        </h2>

        <div className={styles.games__grid} data-count={count}>
          {games.map((game) => (
            <div key={game.id} className={styles.games__gridItem}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
