"use client";

import type { GameItem } from "@/content/games";
import { useEffect, useRef } from "react";
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

  return (
    <article className={styles.card}>
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
        <h3 className={styles.card__title}>{game.title}</h3>
      </div>
    </article>
  );
}
