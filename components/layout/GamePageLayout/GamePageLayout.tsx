import type { GameItem } from "@/content/games";
import { Container } from "@/components/layout/Container/Container";
import { GamePageCard } from "./GamePageCard";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { About } from "@/components/sections/About/About";
import { Contact } from "@/components/sections/Contact/Contact";
import dividerStyles from "@/styles/divider.module.scss";
import geohellStyles from "@/styles/games/geohell/geohell.module.scss";
import deadblokStyles from "@/styles/games/deadblok/deadblok.module.scss";
import styles from "./GamePageLayout.module.scss";

const GAME_PAGE_STYLES: Record<string, string> = {
  geohell: geohellStyles.root,
  deadblok: deadblokStyles.root,
};

interface GamePageLayoutProps {
  game: GameItem;
  children?: React.ReactNode;
}

export function GamePageLayout({ game, children }: GamePageLayoutProps) {
  const cardContent = <GamePageCard game={game} />;

  return (
    <>
      <Header game={game} />

      <main className={[styles.main, GAME_PAGE_STYLES[game.slug]].filter(Boolean).join(" ")}>
        <Container>
          <section
            id="game"
            className={styles.content}
            data-game-slug={game.slug}
            aria-labelledby="game-page-title"
          >
            <h1 id="game-page-title" className="section-title">
              {game.title}
            </h1>
            <div className={styles.cardWrap}>
              {game.slug === "geohell" ? (
                <div className={geohellStyles.cardBorderWrap}>{cardContent}</div>
              ) : (
                cardContent
              )}
            </div>
            {children}
          </section>
        </Container>

        <hr className={dividerStyles.divider} />

        <About game={game} />

        <hr className={dividerStyles.divider} />

        <Contact
          variant="download"
          storeUrl={game.storeUrl}
          storeIconSrc={game.storeIconSrc}
        />
      </main>

      <Footer gameSlug={game.slug} />
    </>
  );
}
