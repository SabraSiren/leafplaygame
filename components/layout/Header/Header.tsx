"use client";

import { Container } from "@/components/layout/Container/Container";
import styles from "./Header.module.scss";
import { useLocale } from "@/context/LocaleContext";
import { usePathname } from "next/navigation";

export function Header() {
  const { t } = useLocale();
  const pathname = usePathname();

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
          <button
            className={styles["header__navLink"]}
            onClick={() => scrollTo("games")}
            type="button"
          >
            {t.games.title}
          </button>
          <button
            className={styles["header__navLink"]}
            onClick={() => scrollTo("about")}
            type="button"
          >
            {t.about.title}
          </button>
          <button
            className={styles["header__navLink"]}
            onClick={() => scrollTo("contact")}
            type="button"
          >
            {t.contact.title}
          </button>
        </nav>
      </Container>
    </header>
  );
}
