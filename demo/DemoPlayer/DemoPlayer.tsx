"use client";

import { useState } from "react";
import { PlayDemoButton } from "@/components/ui/PlayDemoButton/PlayDemoButton";
import { GameMediaPreview } from "@/components/sections/Games/GameMediaPreview";
import { useLocale } from "@/context/LocaleContext";
import styles from "./DemoPlayer.module.scss";

interface DemoPlayerProps {
  previewSrc: string;
  gameTitle: string; // Название игры для alt/aria 
  renderDemo: (props: { className: string }) => React.ReactNode;
}

export function DemoPlayer({
  previewSrc,
  gameTitle,
  renderDemo,
}: DemoPlayerProps) {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.demoPlayer}>
      <div
        className={styles.demoPlayer__game}
        aria-hidden={!isPlaying}
        style={{ visibility: isPlaying ? "visible" : "hidden" }}
      >
        {renderDemo({ className: styles.demoPlayer__iframe })}
      </div>
      {!isPlaying && (
        <>
          <GameMediaPreview
            src={previewSrc}
            alt={`${gameTitle} gameplay preview`}
            className={styles.demoPlayer__previewWrap}
            mediaClassName={styles.demoPlayer__preview}
          />
          <div className={styles.demoPlayer__overlay} aria-hidden />
          <div className={styles.demoPlayer__playBtnWrap}>
            <PlayDemoButton
              onClick={() => setIsPlaying(true)}
              aria-label={`Play ${gameTitle} demo`}
            >
              {t.gamePage.playDemo}
            </PlayDemoButton>
          </div>
        </>
      )}
    </div>
  );
}
