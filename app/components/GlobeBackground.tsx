"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function GlobeBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = 0;

    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.32,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 14000,
      mapBrightness: 6,
      baseColor: [0.92, 0.88, 0.78],
      markerColor: [0.87, 0.62, 0.13],
      glowColor: [0.87, 0.72, 0.42],
      markers: [
        { location: [25.2, 55.3], size: 0.06 },
        { location: [40.7, -74.0], size: 0.06 },
        { location: [1.35, 103.8], size: 0.06 },
        { location: [51.5, -0.12], size: 0.045 },
        { location: [35.68, 139.69], size: 0.045 },
        { location: [-33.87, 151.21], size: 0.045 },
        { location: [-23.55, -46.63], size: 0.04 },
        { location: [37.77, -122.42], size: 0.04 },
      ],
    });

    let frameId: number;
    const animate = () => {
      phi += 0.008;
      globe.update({ phi, width: width * 2, height: width * 2 });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", contain: "layout paint size" }}
    />
  );
}
