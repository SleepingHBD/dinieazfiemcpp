"use client";

import { useEffect, useRef } from "react";

export function ArticleProgress() {
  const indicator = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.max(0, Math.min(1, window.scrollY / height)) : 0;
      if (indicator.current) indicator.current.style.transform = `scaleX(${progress})`;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return <div className="article-progress" aria-hidden="true"><span ref={indicator} /></div>;
}
