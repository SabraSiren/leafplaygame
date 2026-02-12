"use client";

import { Container } from "@/components/layout/Container/Container";
import styles from "./Footer.module.scss";
import { useLocale } from "@/context/LocaleContext";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <Container>
        <a href="/privacy" className={styles["footer__privacyLink"]}>
          {t.footer.privacyPolicy}
        </a>
        <p className={styles["footer__copy"]}>
          {`\u00A9 ${year} ${t.studioName}. ${t.footer.copyright}`}
        </p>
      </Container>
    </footer>
  );
}

