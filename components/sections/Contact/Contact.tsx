"use client";

import type { SocialLink } from "@/content/socials";
import { Container } from "@/components/layout/Container/Container";
import { useLocale } from "@/context/LocaleContext";
import Image from "next/image";
import styles from "./Contact.module.scss";

interface ContactProps {
  links: SocialLink[];
}

export function Contact({ links }: ContactProps) {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <Container>
        <h2 id="contact-title" className="section-title">
          {t.contact.title}
        </h2>

        <div className={styles["contact__icons"]}>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={styles["contact__iconLink"]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <Image
                src={link.iconSrc}
                alt=""
                width={24}
                height={24}
                aria-hidden
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
