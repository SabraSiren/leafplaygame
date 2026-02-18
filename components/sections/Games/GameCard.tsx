"use client";

import type { GameItem } from "@/content/games";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { GameMediaPreview } from "./GameMediaPreview";
import styles from "./GameCard.module.scss";

interface GameCardProps {
  game: GameItem;
  /** На странице игры карточка без ссылки (только превью). По умолчанию true. */
  linkToPage?: boolean;
}

export function GameCard({ game, linkToPage = true }: GameCardProps) {
  const src = game.mediaSrc || "/placeholder.svg";

  const mediaBlock = (
    <>
      <GameMediaPreview
        src={src}
        alt={`${game.title} gameplay preview`}
        className={styles.card__mediaWrap}
        mediaClassName={styles.card__media}
      />
      {linkToPage && <h3 className={styles.card__title}>{game.title}</h3>}
    </>
  );

  return (
    <article className={styles.card} data-card-context={linkToPage ? undefined : "game-page"}>
      {linkToPage ? (
        <Link href={routes.game(game.slug)} className={styles.card__link}>
          {mediaBlock}
        </Link>
      ) : (
        <div className={styles.card__link}>{mediaBlock}</div>
      )}
    </article>
  );
}
