"use client";
import React, { useMemo } from 'react';

const COLORS = [
  '#39C6FF', // neon blue
  '#FFD479', // neon gold
  '#7AF5D4', // mint
  '#FF87C1', // pink
  '#9DB3FF'  // soft indigo
];

const BULBS = 20;

const ChristmasLights: React.FC = () => {
  const bulbs = useMemo(() => {
    const arr = [] as Array<{ left: string; top: string; color: string; delay: string; rot: string; }>
    const amplitude = 14; // vertical droop
    const base = 24; // baseline from top
    const freq = 2.5; // wave frequency across width
    for (let i = 0; i < BULBS; i++) {
      const t = i / (BULBS - 1);
      const x = t * 100; // percent
      const y = base + amplitude * Math.sin((t * Math.PI * freq));
      const color = COLORS[i % COLORS.length];
      const delay = `${(i % 5) * 0.35}s`;
      const rot = `${-8 + Math.sin(t * Math.PI * freq) * 6}deg`;
      arr.push({ left: `${x}%`, top: `${y}px`, color, delay, rot });
    }
    return arr;
  }, []);

  return (
    <div className="christmas-lights">
      <div className="lights-wire" aria-hidden />
      {bulbs.map((b, idx) => (
        <div
          key={idx}
          className="bulb"
          style={{ left: b.left, top: b.top, ['--bulb' as any]: b.color, ['--d' as any]: b.delay, rotate: b.rot }}
        />
      ))}
    </div>
  );
};

export default ChristmasLights;
