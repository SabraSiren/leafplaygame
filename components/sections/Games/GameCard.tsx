import type { GameItem } from "@/content/games";
import styles from "./GameCard.module.scss";

interface GameCardProps {
  game: GameItem;
}

function isVideoSrc(src: string): boolean {
  const lower = src.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg");
}

export function GameCard({ game }: GameCardProps) {
  const src = game.mediaSrc || "/placeholder.svg";
  const isVideo = isVideoSrc(src);

  return (
    <article className={styles.card}>
      <div className={styles.card__mediaWrap}>
        {isVideo ? (
          <video
            src={src}
            className={styles.card__media}
            autoPlay
            muted
            loop
            playsInline
            aria-label={`${game.title} gameplay preview`}
          />
        ) : (
          <img
            src={src}
            alt={`${game.title} gameplay preview`}
            className={styles.card__media}
            loading="lazy"
          />
        )}
        <h3 className={styles.card__title}>{game.title}</h3>
      </div>
    </article>
  );
}
