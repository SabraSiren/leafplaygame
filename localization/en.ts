export const en = {
  header: {
    nav: {
      games: "Games",
      about: "About",
      contact: "Contact",
    },
  },
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
      deadblok: {
        description: `Dead Blok is a fast-paced action game. Master the controls and clear the levels.`,
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
  privacyPage: {
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    paragraphs: [
      `This Privacy Policy describes how we collect, use, and protect information when you use our games and visit our website. By using our services, you agree to the practices described below.`,
      `We may collect minimal data necessary to provide and improve our games (for example, in-game progress or device information). We do not sell your personal data to third parties.`,
      `Our games may use third-party services (such as analytics or ads) that have their own privacy policies. We encourage you to review those policies.`,
      `We may update this policy from time to time. Continued use of our services after changes constitutes acceptance of the updated policy.`,
      `If you have questions about this Privacy Policy, please contact us through the channels provided on our website.`,
    ],
  },
} as const;

export type LocaleEn = typeof en;
