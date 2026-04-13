"use client";

import { motion } from "framer-motion";

export default function PremiumBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        background:
          "linear-gradient(120deg, #0B0D10, #111827, #1e293b, #0f172a, #0B0D10)",
        backgroundSize: "300% 300%",
      }}
    />
  );
}