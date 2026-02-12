"use client";

import { Container } from "@/components/layout/Container/Container";
import styles from "./About.module.scss";
import { useLocale } from "@/context/LocaleContext";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <Container>
        <h2 id="about-title" className="section-title">
          {t.about.title}
        </h2>

        <div className={styles['about__textContainer']}>
          <p className={styles['about__text']}>{t.about.description}</p>
        </div>
      </Container>
    </section>
  )
}
