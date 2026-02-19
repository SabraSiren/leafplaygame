"use client";

import type { GameItem } from "@/content/games";
import { Container } from "@/components/layout/Container/Container";
import { MenuButton, type MenuItem } from "@/components/layout/Header/MenuButton/MenuButton";
import styles from "./Header.module.scss";
import { useLocale } from "@/context/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  targetId?: string;
  href?: string;
}

interface HeaderProps {
  game?: GameItem;
}

export function Header({ game }: HeaderProps) {
  const { t } = useLocale();
  const pathname = usePathname();

  const slugFromPath = (() => {
    if (!pathname.startsWith("/games/")) return undefined;
    const parts = pathname.split("/");
    return parts[2] ?? undefined;
  })();

  const slug = game?.slug ?? slugFromPath;
  const isPrivacyPage = pathname === "/privacy" || pathname.endsWith("/privacy");
  const isGamePage = Boolean(game);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems: NavItem[] = isGamePage
    ? [
        { label: game!.title, targetId: "game" },
        { label: t.header.nav.about, targetId: "about" },
        { label: t.gamePage.download.title, targetId: "download" },
        { label: t.header.nav.privacy, href: `/games/${slug}/privacy` },
      ]
    : [
        { label: t.header.nav.games, targetId: "games" },
        { label: t.header.nav.about, targetId: "about" },
        { label: t.header.nav.contact, targetId: "contact" },
      ];

  const menuItems: MenuItem[] = navItems.map(({ label, targetId, href }) => ({
    label,
    ...(targetId && { targetId }),
    ...(href && { href }),
  }));

  const showNav = !isPrivacyPage;
  const showMenuButton = !isPrivacyPage;

  return (
    <header className={styles.header} role="banner">
      <Container className={styles.header__container}>
        <a
          href="/"
          className={styles["header__logo"]}
          aria-label="Home"
          onClick={handleLogoClick}
        >
          <Image
            src="/icons/logo.svg"
            alt="Studio logo"
            className={styles["header__logoImg"]}
            width={240}
            height={45}
            priority
          />
        </a>

        {showNav && (
          <nav className={styles["header__nav"]} aria-label="Main navigation">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles["header__navLink"]}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.targetId}
                  className={styles["header__navLink"]}
                  onClick={() => item.targetId && scrollTo(item.targetId)}
                  type="button"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>
        )}

        {showMenuButton && (
          <div className={styles["header__menuButton"]}>
            <MenuButton items={menuItems} onScrollTo={scrollTo} />
          </div>
        )}
      </Container>
    </header>
  );
}
