"use client";

import { STUDIO_NAME } from "@/content/site";
import { Container } from "@/components/layout/Container/Container";
import styles from "./Footer.module.scss";
import { useLocale } from "@/context/LocaleContext";

interface FooterProps {
  gameSlug?: string;
}

export function Footer({ gameSlug }: FooterProps) {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  const privacyHref = gameSlug ? `/games/${gameSlug}/privacy` : "/privacy";

  return (
    <footer className={styles.footer} role="contentinfo">
      <Container>
        <a href={privacyHref} className={styles["footer__privacyLink"]}>
          {t.footer.privacyPolicy}
        </a>
        <p className={styles["footer__copy"]}>
          {`\u00A9 ${year} ${STUDIO_NAME}. ${t.footer.copyright}`}
        </p>
      </Container>
    </footer>
  );
}

