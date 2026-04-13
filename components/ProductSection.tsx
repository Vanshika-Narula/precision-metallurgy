"use client";

import { motion } from "framer-motion";

export default function ProductSection() {
  const products = [
    {
      title: "Work Rolls",
      desc: "High-performance rolls engineered for precision surface finish and dimensional accuracy.",
    },
    {
      title: "Backup Rolls",
      desc: "Designed for extreme load-bearing and structural integrity in heavy rolling operations.",
    },
    {
      title: "Intermediate Rolls",
      desc: "Optimized for advanced mill configurations requiring superior balance and durability.",
    },
    {
      title: "Custom Mill Solutions",
      desc: "Tailor-engineered roll solutions developed for specific plant requirements.",
    },
  ];

  return (
    <section className="relative py-32 px-8 md:px-20 overflow-hidden">

      {/* Top Fade Transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />

      {/* Radial Glow (Right Side) */}
      <div
        className="absolute top-1/3 right-0 w-[900px] h-[900px] bg-blue-600/6 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.35em] text-blue-500"
        >
          Core Product Portfolio
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mt-6 text-4xl md:text-6xl font-medium tracking-tight"
        >
          Engineered for modern
          <br />
          rolling mills.
        </motion.h2>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative border border-white/10 p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/5" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}