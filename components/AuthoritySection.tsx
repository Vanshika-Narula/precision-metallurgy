"use client";

import { motion } from "framer-motion";

export default function AuthoritySection() {
  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-20 overflow-hidden">

      {/* Moving Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(120deg, #0B0D10, #111827, #0B0D10)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/10 blur-[140px] rounded-full -z-10" />

      {/* Subtle Floating Particles */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/40 rounded-full" />
        <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-white/20 rounded-full" />
        <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-white/30 rounded-full" />
      </motion.div>

      <div className="max-w-5xl mx-auto w-full space-y-10">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.35em] text-black-700"
        >
          Our Expertise
        </motion.p>

        {/* Metallic Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[1px] w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent origin-left overflow-hidden"
        >
          {/* Shimmer Sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]"
        >
          Built for extreme
          <br />
          rolling conditions.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          Advanced metallurgical solutions engineered for durability,
          precision, and extended pass life across modern steel plants.
        </motion.p>

      </div>
    </section>
  );
}