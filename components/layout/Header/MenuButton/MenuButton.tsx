"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./MenuButton.module.scss";

export interface MenuItem {
  label: string;
  targetId?: string; // Для scroll-навигации — id секции
  href?: string; // Для перехода по ссылке Privacy Policy
}

interface MenuButtonProps {
  items: MenuItem[];
  onScrollTo?: (id: string) => void;
}

export function MenuButton({ items, onScrollTo }: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDownOutside = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleItemClick = (item: MenuItem) => {
    if (item.targetId && onScrollTo) onScrollTo(item.targetId);
    setIsOpen(false);
  };

  return (
    <div className={styles.menuButton}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.menuButton__trigger}
        data-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Image
          src="/menu.svg"
          alt=""
          width={24}
          height={24}
          className={styles.menuButton__icon}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className={styles.menuButton__dropdown}
          role="menu"
        >
          {items.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className={styles.menuButton__item}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.targetId}
                type="button"
                className={styles.menuButton__item}
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
