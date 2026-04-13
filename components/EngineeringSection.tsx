"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EngineeringSection() {

  const features = [
    "Advanced Metallurgy",
    "Precision Manufacturing",
    "Extended Roll Life",
    "Industrial Reliability",
  ];

  return (
    <section className="relative min-h-[720px] flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/roll-mill.jpg"
        alt="Rolling Mill"
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Left gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/80 to-transparent"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >

          <p className="text-xs tracking-[0.4em] text-blue-400 uppercase mb-6">
            Engineering Excellence
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Built for Modern <span className="text-blue-500"><br/> Steel Plants</span>
          </h2>

          <p className="text-gray-300 max-w-xl leading-relaxed text-lg">
            Precision Metallurgy manufactures high-performance rolling mill
            rolls engineered for extreme industrial environments. Our products
            deliver consistent surface quality, longer operational life, and
            superior reliability in demanding rolling operations.
          </p>

        </motion.div>


        {/* Capabilities */}
        <div className="mt-14 grid md:grid-cols-2 gap-x-20 gap-y-6 max-w-2xl">

          {features.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group cursor-default"
            >

              {/* vertical indicator */}
              <div className="w-[3px] h-6 bg-blue-500 group-hover:h-8 transition-all"></div>

              <p className="text-gray-200 text-sm tracking-wide group-hover:text-white transition">
                {item}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}