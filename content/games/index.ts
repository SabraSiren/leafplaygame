import type { GameItem } from "./types";
import { geoHellGame } from "./geohell";
import { shootGame } from "./shoot";

export type { GameItem };

export const GAMES: GameItem[] = [geoHellGame, shootGame];

export function getGameBySlug(slug: string): GameItem | undefined {
  return GAMES.find((g) => g.slug === slug);
}
