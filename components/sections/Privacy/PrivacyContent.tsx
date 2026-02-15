"use client";

import styles from "./PrivacyContent.module.scss";
import { useLocale } from "@/context/LocaleContext";

export function PrivacyContent() {
  const { t } = useLocale();
  const { title, lastUpdated, paragraphs } = t.privacyPage;

  return (
    <section className={styles.privacy} aria-labelledby="privacy-title">
      <h1 id="privacy-title" className="section-title">
        {title}
      </h1>
      <p className={styles.privacy__meta}>
        {lastUpdated} {new Date().toLocaleDateString()}
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
