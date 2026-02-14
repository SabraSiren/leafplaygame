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
  gamePage: {
    about: {
      title: "About",
    },
    download: {
      title: "Download",
    },
    games: {
      geohell: {
        description: `GeoHell is a fast-paced 2D platformer where you control a cube trapped in a dark and unforgiving world. Navigate through deadly obstacles and relentless enemies that can eliminate you with a single touch. The further you progress, the more intense and challenging the journey becomes.
         Dodge every hazard, survive as long as you can, and beat your highest distance record.`,
      },
      shoot: {
        description: `Shoot is a fast-paced action game. Master the controls and clear the levels.`,
      },
    },
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
