"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  gap?: number;
}

export default function Marquee({ children, speed = 40, reverse = false, className = "", gap = 32 }: Props) {
  return (
    <div className={`marquee-root ${className}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
          gap: `${gap}px`,
        }}
      >
        <div className="marquee-content" style={{ gap: `${gap}px` }}>{children}</div>
        <div className="marquee-content" style={{ gap: `${gap}px` }} aria-hidden>{children}</div>
      </div>
      <style jsx>{`
        .marquee-root {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-x linear infinite;
        }
        .marquee-content {
          display: flex;
          flex-shrink: 0;
          align-items: center;
        }
        .marquee-root:hover .marquee-track { animation-play-state: paused; }
        @keyframes scroll-x {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(calc(-50% - ${gap / 2}px), 0, 0); }
        }
      `}</style>
    </div>
  );
}
