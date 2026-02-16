"use client";

import styles from "./PrivacyContent.module.scss";
import { useLocale } from "@/context/LocaleContext";

interface PrivacyContentProps {
  /** При передаче показывается политика игры из privacyPage.games[gameSlug] */
  gameSlug?: string;
}

export function PrivacyContent({ gameSlug }: PrivacyContentProps) {
  const { t } = useLocale();
  const policy = gameSlug
    ? (t.privacyPage.games as Record<string, { title: string; lastUpdated: string; paragraphs: readonly string[] }>)[gameSlug]
    : t.privacyPage;

  if (!policy) return null;

  const { title, lastUpdated, paragraphs } = policy;

  return (
    <section className={styles.privacy} aria-labelledby="privacy-title">
      <h1 id="privacy-title" className="section-title">
        {title}
      </h1>
      <p className={styles.privacy__meta}>
        {lastUpdated}
      </p>
      <div className={styles.privacy__content}>
        {paragraphs.map((text, i) => (
          <p key={i} className={styles.privacy__paragraph}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
