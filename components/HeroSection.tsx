"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-12 md:px-20">

      <div className="max-w-6xl">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[1.05]"
        >
          Precision.
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[1.05]"
        >
          Engineered for <span className="text-blue-500">performance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.4, duration: 1.6 }}
          className="mt-10 text-xl md:text-2xl text-gray-400 max-w-3xl"
        >
          Manufacturers of high-performance rolling mill rolls for modern steel plants worldwide.
        </motion.p>

      </div>

    </section>
  );
}