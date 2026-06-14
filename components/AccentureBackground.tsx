"use client";

import { useEffect, useRef } from "react";

export function AccentureBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let t = 0;
    let animationId: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawWave = (
      offset: number,
      color: string,
      width: number,
      glow: number,
      speed: number,
      amp: number
    ) => {
      ctx.beginPath();

      for (let x = -100; x <= w + 100; x += 8) {
        const y =
          h * 0.65 +
          Math.sin(x * 0.006 + t * speed + offset) * amp +
          Math.sin(x * 0.012 + t * speed * 0.7) * amp * 0.45;

        if (x === -100) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.shadowColor = color;
      ctx.shadowBlur = glow;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(1, "#020814");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      drawWave(0, "rgba(160,210,255,0.35)", 2, 18, 0.018, 70);
      drawWave(1.4, "rgba(255,255,255,0.55)", 1.5, 25, 0.022, 55);
      drawWave(2.6, "rgba(255,150,45,0.35)", 1.3, 22, 0.016, 45);
      drawWave(4.2, "rgba(110,170,255,0.25)", 3, 35, 0.012, 90);

      ctx.globalCompositeOperation = "source-over";

      t++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 w-full h-full"
      />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_70%,rgba(80,160,255,0.12),transparent_35%)]" />

      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent to-black/70" />
    </>
  );
}