"use client";

const GEOHELL_DEMO_URL = "https://geohell.ru.tuna.am/";

interface GeoHellDemoProps {
  className?: string;
}

export function GeoHellDemo({ className }: GeoHellDemoProps) {
  return (
    <iframe
      src={GEOHELL_DEMO_URL}
      title="GeoHell Demo"
      className={className}
      allow="gamepad; fullscreen"
      loading="eager"
      tabIndex={0}
    />
  );
}
