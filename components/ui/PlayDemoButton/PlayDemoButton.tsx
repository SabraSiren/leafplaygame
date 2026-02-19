"use client";

import styles from "./PlayDemoButton.module.scss";

interface PlayDemoButtonProps {
  children: string;
  onClick: () => void;
  "aria-label": string; // Для aria-label
}

export function PlayDemoButton({ children, onClick, "aria-label": ariaLabel }: PlayDemoButtonProps) {
  return (
    <button
      type="button"
      className={styles.playDemoButton}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className={styles.playDemoButton__label}>{children}</span>
      <svg
        className={styles.playDemoButton__icon}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
      </svg>
    </button>
  );
}
