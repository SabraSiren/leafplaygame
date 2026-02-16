"use client";

import type { GameItem } from "@/content/games";
import { Container } from "@/components/layout/Container/Container";
import { MenuButton, type MenuItem } from "@/components/layout/Header/MenuButton/MenuButton";
import styles from "./Header.module.scss";
import { useLocale } from "@/context/LocaleContext";
import { usePathname } from "next/navigation";

interface HeaderProps {
  /** При передаче — навигация для страницы игры: название игры, About, Download */
  game?: GameItem;
  /** Для страницы политики игры — slug игры (для ссылки на Privacy) */
  gameSlug?: string;
}

export function Header({ game, gameSlug }: HeaderProps) {
  const { t } = useLocale();
  const pathname = usePathname();
  const isGamePage = Boolean(game);

  const slugFromPath = (() => {
    if (!pathname.startsWith("/games/")) return undefined;
    const parts = pathname.split("/");
    return parts[2] ?? undefined;
  })();

  const slug = game?.slug ?? gameSlug ?? slugFromPath;

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

  const fullNavItems = isGamePage
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

  /** Пункты для мобильного меню (без первой секции Game/Games). Меню показывается только на главной и страницах игр. */
  const menuItems: MenuItem[] = (() => {
    const itemsWithoutFirst = fullNavItems.slice(1);
    const result: MenuItem[] = itemsWithoutFirst.map(({ label, targetId }) => ({
      label,
      targetId,
    }));

    const privacyHref = slug ? `/games/${slug}/privacy` : "/privacy";
    result.push({ label: t.footer.privacyPolicy, href: privacyHref });
    return result;
  })();

  const showMenuButton = !pathname.endsWith("/privacy");

  return (
    <header className={styles.header} role="banner">
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
          {fullNavItems.map(({ label, targetId }) => (
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

        {showMenuButton && (
          <div className={styles["header__menuButton"]}>
            <MenuButton
              items={menuItems}
              onScrollTo={scrollTo}
            />
          </div>
        )}
      </Container>
    </header>
  );
}
