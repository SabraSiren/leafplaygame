"use client";

import { useState } from "react";
import { GameMediaPreview } from "@/components/sections/Games/GameMediaPreview";
import styles from "./DemoPlayer.module.scss";

interface DemoPlayerProps {
  /** URL превью (видео или изображение) */
  previewSrc: string;
  /** Название игры для alt/aria */
  gameTitle: string;
  /** Рендер контента игры (iframe и т.д.) */
  renderDemo: (props: { className: string }) => React.ReactNode;
}

export function DemoPlayer({
  previewSrc,
  gameTitle,
  renderDemo,
}: DemoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.demoPlayer}>
      {isPlaying ? (
        <div className={styles.demoPlayer__game}>
          {renderDemo({ className: styles.demoPlayer__iframe })}
        </div>
      ) : (
        <>
          <GameMediaPreview
            src={previewSrc}
            alt={`${gameTitle} gameplay preview`}
            className={styles.demoPlayer__previewWrap}
            mediaClassName={styles.demoPlayer__preview}
          />
          <button
            type="button"
            className={styles.demoPlayer__playBtn}
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${gameTitle} demo`}
          >
            <img src="/icons/play.svg" alt="" width={80} height={80} />
          </button>
        </>
      )}
    </div>
  );
}
