"use client";

import { motion } from "framer-motion";

const BADGE_SIZE = "clamp(30px, 11cqw, 52px)";
const ICON_SIZE = "clamp(14px, 5cqw, 22px)";

const floatingIcons = [
  { icon: "settings", top: "4%", left: "50%", delay: 0, duration: 5 },
  { icon: "psychology", top: "16%", left: "42%", delay: 0.6, duration: 6 },
  { icon: "neurology", top: "13%", left: "68%", delay: 1.1, duration: 5.5 },
  { icon: "cloud", top: "30%", left: "78%", delay: 0.3, duration: 6.5 },
  { icon: "neurology", top: "57%", left: "74%", delay: 0.9, duration: 5 },
];

export function HeroVisual() {
  return (
    <motion.div
      className="relative w-full aspect-square"
      style={{ containerType: "inline-size" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
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
          src="https://res.cloudinary.com/dfhuyzaxw/image/upload/q_auto:good,f_auto,w_1280,c_limit/v1784039689/heroimage_qxwbn4.png"
        />
      </div>

      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-2xl glass-card border border-primary/20 shadow-lg text-primary -translate-x-1/2 -translate-y-1/2"
          style={{
            top: item.top,
            left: item.left,
            width: BADGE_SIZE,
            height: BADGE_SIZE,
          }}
          animate={{ y: [0, -12, 0], rotate: [0, 4, 0, -4, 0] }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: ICON_SIZE }}
          >
            {item.icon}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
