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
    ? (t.gamePage.games as Record<string, { description: string | readonly string[] }>)[props.game.slug]
        ?.description ?? ""
    : t.about.description;

  const paragraphs = Array.isArray(sectionDescription)
    ? sectionDescription
    : [sectionDescription];

  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <Container>
        <h2 id="about-title" className="section-title">
          {sectionTitle}
        </h2>

        <div className={styles["about__textContainer"]}>
          {paragraphs.map((text, i) => (
            <p key={i} className={styles["about__text"]}>
              {text}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
