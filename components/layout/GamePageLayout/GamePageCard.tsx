"use client";

import type { GameItem } from "@/content/games";
import { useState, useEffect } from "react";
import { DemoCard } from "@/demo";
import { GameCard } from "@/components/sections/Games/GameCard";

interface GamePageCardProps {
  game: GameItem;
}

export function GamePageCard({ game }: GamePageCardProps) {
  const [demoServerOk, setDemoServerOk] = useState(false);

  useEffect(() => {
    if (!game.demoUrl) return;
    const controller = new AbortController();
    fetch(`/api/check-demo?url=${encodeURIComponent(game.demoUrl)}`, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((data) => setDemoServerOk(data.ok === true))
      .catch((err) => {
        if (err.name !== "AbortError") setDemoServerOk(false);
      });
    return () => controller.abort();
  }, [game.demoUrl]);

  if (!game.demoUrl) {
    return <GameCard game={game} linkToPage={false} />;
  }
  if (!demoServerOk) {
    return <GameCard game={game} linkToPage={false} />;
  }
  return <DemoCard game={game} />;
}
