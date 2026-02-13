export const en = {
  about: {
    title: "About",
    description: `We are an independent game development studio passionate about crafting immersive digital
     experiences. Our team brings together artists, engineers, and storytellers who share a vision of creating games that push boundaries and captivate players worldwide.
    From concept art to final release, every detail is meticulously designed to deliver unforgettable gameplay. 
    We believe in the power of interactive entertainment to inspire, challenge, and connect people across the globe.`,
  },
  games: {
    title: "Games",
  },
  footer: {
    privacyPolicy: "Privacy Policy",
    copyright: "All rights reserved.",
    privacyLink: {} as Record<string, string>,
  },
  contact: {
    title: "Contact",
  },
} as const;

export type LocaleEn = typeof en;
