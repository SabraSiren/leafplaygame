"use client";

import type { GameItem } from "@/content/games";
import { Container } from "@/components/layout/Container/Container";
import styles from "./About.module.scss";
import { useLocale } from "@/context/LocaleContext";

interface AboutPropsDefault {
  game?: never;
}

interface AboutPropsGame {
  game: GameItem;
}

export type AboutProps = AboutPropsDefault | AboutPropsGame;

export function About(props: AboutProps = {}) {
  const { t } = useLocale();
  const isGamePage = "game" in props && props.game != null;
  const sectionTitle = isGamePage
    ? t.gamePage.about.title
    : t.about.title;
  const sectionDescription = isGamePage
    ? ((t.gamePage.games as Record<string, { description: string }>)[props.game.slug]?.description ?? "")
    : t.about.description;

  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <Container>
        <h2 id="about-title" className="section-title">
          {sectionTitle}
        </h2>

        <div className={styles["about__textContainer"]}>
          <p className={styles["about__text"]}>{sectionDescription}</p>
        </div>
      </Container>
    </section>
  );
}
