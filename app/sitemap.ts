import type { MetadataRoute } from "next";
import { GAMES } from "@/content/games";
import { routes } from "@/lib/routes";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof process.env.VERCEL_URL === "string" ? `https://${process.env.VERCEL_URL}` : "");

export default function sitemap(): MetadataRoute.Sitemap {
  if (!baseUrl) return [];

  const home = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const gamePages = GAMES.map((game) => ({
    url: `${baseUrl}${routes.game(game.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [home, ...gamePages];
}
