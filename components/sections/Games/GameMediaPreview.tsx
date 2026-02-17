"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function isVideoSrc(src: string): boolean {
  const lower = src.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".ogg");
}

interface GameMediaPreviewProps {
  src: string;
  alt: string;
  className?: string;
  mediaClassName?: string;
}

export function GameMediaPreview({
  src,
  alt,
  className = "",
  mediaClassName = "",
}: GameMediaPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isVideo = isVideoSrc(src);

  useEffect(() => {
    if (!isVideo || !wrapRef.current || !videoRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = src;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "50px", threshold: 0.1 }
    );

    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [isVideo, src]);

  return (
    <div className={className} ref={wrapRef}>
      {isVideo ? (
        <video
          ref={videoRef}
          className={mediaClassName}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          className={mediaClassName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      )}
    </div>
  );
}
