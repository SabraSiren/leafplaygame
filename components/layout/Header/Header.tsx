"use client";

import type { GameItem } from "@/content/games";
import { Container } from "@/components/layout/Container/Container";
import styles from "./Header.module.scss";
import { useLocale } from "@/context/LocaleContext";
import { usePathname } from "next/navigation";

interface HeaderProps {
  /** При передаче — навигация для страницы игры: название игры, About, Download */
  game?: GameItem;
}

export function Header({ game }: HeaderProps) {
  const { t } = useLocale();
  const pathname = usePathname();
  const isGamePage = Boolean(game);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = isGamePage
    ? [
        { label: game!.title, targetId: "game" },
        { label: t.header.nav.about, targetId: "about" },
        { label: t.gamePage.download.title, targetId: "download" },
      ]
    : [
        { label: t.header.nav.games, targetId: "games" },
        { label: t.header.nav.about, targetId: "about" },
        { label: t.header.nav.contact, targetId: "contact" },
      ];

  const hideNavOnMobile =
    pathname === "/privacy" || pathname.startsWith("/games/");

  return (
    <header
      className={styles.header}
      role="banner"
      data-hide-nav-mobile={hideNavOnMobile ? "true" : undefined}
    >
      <Container className={styles.header__container}>
        <a
          href="/"
          className={styles["header__logo"]}
          aria-label="Home"
          onClick={handleLogoClick}
        >
          <img
            src="/logo.svg"
            alt="Studio logo"
            className={styles["header__logoImg"]}
            width={240}
            height={45}
            fetchPriority="high"
          />
        </a>

        <nav className={styles["header__nav"]} aria-label="Main navigation">
          {navItems.map(({ label, targetId }) => (
            <button
              key={targetId}
              className={styles["header__navLink"]}
              onClick={() => scrollTo(targetId)}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>
      </Container>
    </header>
  );
}
