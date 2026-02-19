export const en = {
  header: {
    nav: {
      games: "Games",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
    },
  },
  about: {
    title: "About",
    description: `We are an independent game development studio passionate about crafting immersive digital experiences. Our team brings together artists, engineers, and storytellers who share a vision of creating games that push boundaries and captivate players worldwide.
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
    playDemo: " demo",
    games: {
      geohell: {
        description: [
          `GeoHell is a minimalist 2D endless platformer where precision matters more than speed. You control a black cube running to the right through procedurally generated levels filled with lava, spikes, and deadly enemies. One mistake can end your run — and push you to try again.`,
          `Gameplay`,
          `Run, jump, and crouch using a virtual joystick to survive shifting platforms, narrow gaps, and sudden hazards. The further you go, the tougher it gets. Your score is simple: distance in meters.`,
          `Beat your best run. Then beat it again.`,
          `Hazards`,
          `Expect lava pools, spike traps, low ceilings, and flying enemies. Learn patterns, time your jumps, and stay in control. GeoHell rewards focus, precision, and smart movement.`,
          `Power-ups`,
          `Use rare power-ups wisely:
• Clear all enemies on screen
• Get a short speed boost
• Respawn at the last checkpoint`,
          `Earn daily bonuses by reaching distance goals.`,
          `Progress & Competition`,
          `Track your all-time best and daily distance. Send your record to the online leaderboard and see how far others made it. A short tutorial gets you started in seconds.`,
          `Why you'll like GeoHell`,
          `• Fast, skill-based runs
• Simple controls, deep challenge
• Procedurally generated levels
• Dark, stylish geometric visuals
• One goal: go farther than ever before`,
          `One cube. One run. One number that matters.`,
        ],
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
    lastUpdated: "Last updated: 19.02.2026",
    paragraphs: [
      `This Privacy Policy describes how LeafPlay collects, uses, and protects information when you visit our website and use our services. By accessing this site, you agree to the practices described below.`,
      `Scope`,
      `This policy applies to the LeafPlay website. For privacy practices specific to our games, please refer to the individual game privacy policies linked from their respective pages.`,
      `Information We Collect`,
      `When you visit our website, we may automatically collect certain technical data necessary for the site to function, such as:
• Device and browser information
• IP address and general location.`,
      `We do not require you to create an account to browse our website. If you contact us (for example, via email), we will receive and store the information you provide.`,
      `How We Use the Information`,
      `We use the collected information to:
• Operate and improve our website
• Understand how visitors use our site
• Respond to your inquiries
• Ensure security and prevent abuse`,
      `We do not sell, rent, or trade your personal data to third parties for marketing purposes.`,
      `Third-Party Services`,
      `Our website may use third-party services (such as hosting, analytics, or embedded content) that have their own privacy policies. When you interact with demo versions of our games or follow links to external stores (Google Play, Steam) and social networks, those services may collect data according to their own policies. We encourage you to review their terms before sharing information.`,
      `Data Security`,
      `We take reasonable measures to protect your information. Data transmitted over the internet is encrypted where possible. However, no method of transmission or storage is completely secure.`,
      `Children's Privacy`,
      `Our website is not directed at children under 3. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.`,
      `Changes to This Policy`,
      `We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the most recent changes. Continued use of our website after updates constitutes acceptance of the revised policy.`,
      `Contact`,
      `If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at: leafplaybusiness@gmail.com.`,
    ],
    games: {
      geohell: {
        title: "GeoHell — Privacy Policy",
        lastUpdated: "Last updated: 16.02.2026",
        paragraphs: [
          `The app does not require account creation and can be played offline. Certain data is collected automatically to support gameplay features and improve app stability.`,
          `Information We Collect
The app may collect the following types of data:
• Gameplay data, such as completed levels, scores, and leaderboard entries
• User-provided name, such as a nickname generated by the player for leaderboards
• App usage data, including in-game events and interactions (via Firebase Analytics)
• Crash and diagnostic data, such as crash logs and device information (via Firebase Crashlytics)
• Device or installation identifiers, generated automatically to associate gameplay data with a device or app instance`,
          `Optional Online Features
The game includes optional online features such as global leaderboards. Participation in these features is optional and not required to play the game.

The game may also offer optional sign-in using Google Play Games Services. If you choose to sign in, Google may provide a player identifier and display name, which may be used for leaderboards and achievements.`,
          `How We Use the Data
• To store and restore game progress
• To display leaderboard rankings
• To analyze gameplay behavior and improve game balance
• To detect, diagnose, and fix crashes and technical issues`,
          `Data Sharing
We do not sell or share personal data for advertising or marketing purposes. Data is processed and stored securely using trusted third-party service providers, including Google Firebase and Google Play Games Services, solely for app functionality and analytics purposes.`,
          `Data Security
Data transmitted by the app is encrypted in transit using industry-standard security measures.`,
          `Children's Privacy
The game does not knowingly collect personal information such as real names, email addresses, phone numbers, or precise location data.`,
          `Changes to This Policy
This Privacy Policy may be updated from time to time. Any changes will be reflected on this page.`,
          `Contact
If you have any questions about this Privacy Policy, you can contact the developer at: leafplaybusiness@gmail.com`,
        ],
      },
      deadblok: {
        title: "Dead Blok — Privacy Policy",
        lastUpdated: "Last updated: 16.02.2026",
        paragraphs: [
          `This Privacy Policy applies to the game Dead Blok. By playing Dead Blok, you agree to the practices described below.`,
          `We may collect minimal data necessary to run and improve the game (for example, in-game progress or device information). We do not sell your personal data to third parties.`,
          `Dead Blok may use third-party services (such as analytics or advertising) that have their own privacy policies. We encourage you to review those policies.`,
          `We may update this policy from time to time. Continued use of Dead Blok after changes constitutes acceptance of the updated policy.`,
          `If you have questions about this Privacy Policy, please contact us through the channels provided on our website.`,
        ],
      },
    },
  },
} as const;

export type LocaleEn = typeof en;
