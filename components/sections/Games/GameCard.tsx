"use client";

import type { GameItem } from "@/content/games";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./GameCard.module.scss";

interface GameCardProps {
  game: GameItem;
  /** На странице игры карточка без ссылки (только превью). По умолчанию true. */
  linkToPage?: boolean;
}

function isVideoSrc(src: string): boolean {
  const lower = src.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg");
}

export function GameCard({ game, linkToPage = true }: GameCardProps) {
  const src = game.mediaSrc || "/placeholder.svg";
  const isVideo = isVideoSrc(src);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVideo || !wrapRef.current || !videoRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = src;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "50px", threshold: 0.1 }
    );

    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [isVideo, src]);

  const mediaBlock = (
    <div className={styles.card__mediaWrap} ref={wrapRef}>
      {isVideo ? (
        <video
          ref={videoRef}
          className={styles.card__media}
          muted
          loop
          playsInline
          preload="none"
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
      {linkToPage && <h3 className={styles.card__title}>{game.title}</h3>}
    </div>
  );

  return (
    <article className={styles.card}>
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
