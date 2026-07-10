"use client";

import { motion } from "framer-motion";

const floatingIcons = [
  { icon: "settings", top: "4%", left: "50%", size: 52, delay: 0, duration: 5 },
  { icon: "psychology", top: "16%", left: "42%", size: 46, delay: 0.6, duration: 6 },
  { icon: "neurology", top: "13%", left: "68%", size: 46, delay: 1.1, duration: 5.5 },
  { icon: "cloud", top: "30%", left: "78%", size: 46, delay: 0.3, duration: 6.5 },
  { icon: "neurology", top: "57%", left: "74%", size: 46, delay: 0.9, duration: 5 },
];

export function HeroVisual() {
  return (
    <motion.div
      className="relative w-full aspect-square"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Simulated globe rotation: a slow-spinning light sweep blended over the artwork */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "-8%",
          left: "-12%",
          width: "78%",
          height: "78%",
          background:
            "conic-gradient(from 0deg, transparent 0%, color-mix(in srgb, var(--color-primary) 70%, transparent) 8%, transparent 22%, transparent 60%, color-mix(in srgb, var(--color-primary-fixed) 50%, transparent) 68%, transparent 82%, transparent 100%)",
          mixBlendMode: "overlay",
          filter: "blur(3px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="relative w-full h-full"
        style={{
          maskImage:
            "radial-gradient(circle at 50% 48%, black 68%, transparent 96%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 48%, black 68%, transparent 96%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          alt="A highly sophisticated 3D abstract visualization of neural network connections glowing in soft gold and metallic silver, set against a minimalist architectural background."
          src="/heroimage.png"
        />
      </div>

      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-2xl glass-card border border-primary/20 shadow-lg text-primary -translate-x-1/2 -translate-y-1/2"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
          }}
          animate={{ y: [0, -12, 0], rotate: [0, 4, 0, -4, 0] }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="material-symbols-outlined text-[22px]">
            {item.icon}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
