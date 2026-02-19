export interface SocialLink {
  id: string;
  href: string;
  label: string;
  iconSrc: string;
  email?: string; // Для mailto-ссылок
}

const CONTACT_EMAIL = "leafplaybusiness@gmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "x", href: "#", label: "X (Twitter)", iconSrc: "/socials_icons/x.svg" },
  { id: "youtube", href: "https://www.youtube.com/@LeafPlayGames", label: "YouTube", iconSrc: "/socials_icons/youtube.svg" },
  { id: "discord", href: "#", label: "Discord", iconSrc: "/socials_icons/discord.svg" },
  { id: "email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`, label: "Email", iconSrc: "/socials_icons/mail.svg", email: CONTACT_EMAIL},
];
