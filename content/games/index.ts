import type { GameItem } from "./types";
import { geoHellGame } from "./geohell";
import { deadblokGame } from "./deadblok";

export type { GameItem };

export const GAMES: GameItem[] = [geoHellGame, deadblokGame];

export function getGameBySlug(slug: string): GameItem | undefined {
  return GAMES.find((g) => g.slug === slug);
}
