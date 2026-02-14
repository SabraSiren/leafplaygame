import type { GameItem } from "@/content/games";
import { Container } from "@/components/layout/Container/Container";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { About } from "@/components/sections/About/About";
import { GameCard } from "@/components/sections/Games/GameCard";
import { Contact } from "@/components/sections/Contact/Contact";
import dividerStyles from "@/styles/divider.module.scss";
import geohellStyles from "@/styles/games/geohell/geohell.module.scss";
import shootStyles from "@/styles/games/shoot/shoot.module.scss";
import styles from "./GamePageLayout.module.scss";

const GAME_PAGE_STYLES: Record<string, string> = {
  geohell: geohellStyles.root,
  shoot: shootStyles.root,
};

interface GamePageLayoutProps {
  game: GameItem;
  children?: React.ReactNode;
}

export function GamePageLayout({ game, children }: GamePageLayoutProps) {
  return (
    <>
      <Header />

      <main className={[styles.main, GAME_PAGE_STYLES[game.slug]].filter(Boolean).join(" ")}>
        <Container>
          <section
            className={styles.content}
            data-game-slug={game.slug}
            aria-labelledby="game-page-title"
          >
            <h1 id="game-page-title" className="section-title">
              {game.title}
            </h1>
            <div className={styles.cardWrap}>
              {game.slug === "geohell" ? (
                <div className={geohellStyles.cardBorderWrap}>
                  <GameCard game={game} linkToPage={false} />
                </div>
              ) : (
                <GameCard game={game} linkToPage={false} />
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

      <Footer />
    </>
  );
}
