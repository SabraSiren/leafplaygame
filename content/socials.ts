export interface SocialLink {
  id: string;
  href: string;
  label: string;
  iconSrc: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "x", href: "#", label: "X (Twitter)", iconSrc: "/socials_icons/x.svg" },
  { id: "youtube", href: "https://www.youtube.com/@LeafPlayGames", label: "YouTube", iconSrc: "/socials_icons/youtube.svg" },
  { id: "discord", href: "#", label: "Discord", iconSrc: "/socials_icons/discord.svg" },
  { id: "email", href: "leafplaybusiness@gmail.com", label: "Email", iconSrc: "/socials_icons/mail.svg" },
];
