"use client";

import type { SocialLink } from "@/content/socials";
import { Container } from "@/components/layout/Container/Container";
import { useLocale } from "@/context/LocaleContext";
import Image from "next/image";
import styles from "./Contact.module.scss";

interface ContactPropsDefault {
  variant?: "default";
  links: SocialLink[];
  storeUrl?: never;
  storeIconSrc?: never;
}

interface ContactPropsDownload {
  variant: "download";
  links?: never;
  /** URL страницы приложения в магазине (например, Google Play). Задаётся в content/games/<slug>.ts */
  storeUrl?: string;
  /** Путь к иконке магазина (например, /icons/play-store.svg). Задаётся в content/games/<slug>.ts */
  storeIconSrc?: string;
}

export type ContactProps = ContactPropsDefault | ContactPropsDownload;

export function Contact(props: ContactProps) {
  const { t } = useLocale();
  const isDownload = props.variant === "download";
  const sectionId = isDownload ? "download" : "contact";
  const titleId = isDownload ? "download-title" : "contact-title";
  const sectionTitle = isDownload ? t.gamePage.download.title : t.contact.title;
  const className = styles.contact;

  return (
    <section
      id={sectionId}
      className={className}
      aria-labelledby={titleId}
    >
      <Container>
        <h2 id={titleId} className="section-title">
          {sectionTitle}
        </h2>

        {isDownload ? (
          <div className={styles["contact__downloadContent"]}>
            {props.storeIconSrc ? (
              props.storeUrl ? (
                <a
                  href={props.storeUrl}
                  className={styles["contact__storeLink"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on Google Play"
                >
                  <img
                    src={props.storeIconSrc}
                    alt=""
                    width={64}
                    height={64}
                    className={styles["contact__storeIcon"]}
                  />
                </a>
              ) : (
                <span className={styles["contact__storeIconWrap"]}>
                  <img
                    src={props.storeIconSrc}
                    alt="Google Play"
                    width={64}
                    height={64}
                    className={styles["contact__storeIcon"]}
                  />
                </span>
              )
            ) : (
              <div className={styles["contact__storePlaceholder"]} aria-hidden />
            )}
          </div>
        ) : (
          <div className={styles["contact__icons"]}>
            {props.links.map((link) => (
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
        )}
      </Container>
    </section>
  );
}
