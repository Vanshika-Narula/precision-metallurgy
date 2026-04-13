"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PremiumBackground from "@/components/PremiumBackground";

export default function AboutPage() {

  const capabilities = [
    { icon: "🧪", text: "Advanced Metallurgical Design" },
    { icon: "⚙️", text: "Precision Machining" },
    { icon: "🔍", text: "Strict Quality Control" },
    { icon: "🛠", text: "Custom Roll Solutions" },
    { icon: "🏭", text: "High Durability Materials" },
    { icon: "📊", text: "Performance Testing" },
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "100+", label: "Steel Plant Clients" },
    { number: "5000+", label: "Rolls Manufactured" },
    { number: "24/7", label: "Technical Support" },
  ];

  const process = [
    "Metallurgical Design",
    "Material Casting",
    "Precision Machining",
    "Heat Treatment",
    "Quality Testing",
    "Final Inspection",
  ];

  return (
    <main className="relative min-h-screen text-white">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed -z-20 inset-0 bg-gradient-to-br from-[#0B0D10] via-[#111827] to-[#0B0D10]" />
      <PremiumBackground />

      <div className="relative px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">

        {/* HERO */}
        <section className="max-w-3xl mb-32 mx-auto text-center">

          <p className="text-xs tracking-[0.4em] text-blue-400 uppercase mb-4">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Engineering Reliability for Modern Steel Plants
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Precision Metallurgy designs and manufactures high-performance
            rolling mill rolls engineered for demanding industrial environments.
            Our focus on metallurgy, durability, and engineering excellence
            ensures reliable performance for modern steel production.
          </p>

        </section>


        {/* STORY SECTION */}
        <section className="grid md:grid-cols-2 gap-20 items-center mb-32 bg-white/[0.02] border border-white/10 rounded-xl p-12">

          <div className="space-y-6">

            <h2 className="text-3xl font-semibold">
              Our Story
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Built on decades of metallurgical expertise, Precision Metallurgy
              focuses on manufacturing rolling mill rolls that deliver reliable
              performance and extended service life.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Through advanced manufacturing techniques and strict quality
              standards, we help steel plants operate efficiently while
              maintaining consistent production quality.
            </p>

          </div>

          <div className="relative h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/industrial.jpg"
              alt="Steel Plant"
              fill
              className="object-cover"
            />
          </div>

        </section>


        {/* DIRECTOR MESSAGE */}
        <section className="grid md:grid-cols-2 gap-20 items-center mb-32 bg-gradient-to-r from-blue-900/20 to-blue-700/10 border border-blue-500/20 rounded-xl p-12">

          <div className="relative h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/director.jpg"
              alt="Managing Director"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">

            <p className="text-xs tracking-[0.4em] text-blue-400 uppercase">
              Director's Message
            </p>

            <h2 className="text-3xl font-semibold">
              A Commitment to Engineering Excellence
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our mission has always been to deliver metallurgical solutions
              that help steel producers operate with reliability and confidence.
              Every product we manufacture reflects our dedication to
              engineering precision and long-term performance.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As the steel industry evolves, we continue investing in research,
              advanced manufacturing technologies, and metallurgical expertise
              to support modern steel plants.
            </p>

            <p className="text-gray-300 font-medium">
              — Managing Director
            </p>

          </div>

        </section>


        {/* CAPABILITIES */}
        <section className="mb-32 bg-black/30 border border-white/10 rounded-xl p-16">

          <h2 className="text-3xl font-semibold mb-14 text-center">
            Manufacturing Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 border border-white/10 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition hover:shadow-lg hover:shadow-blue-500/10"
              >

                <div className="text-3xl mb-4">
                  {item.icon}
                </div>

                <p className="text-gray-300">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </section>


        {/* MANUFACTURING PROCESS TIMELINE */}
        <section className="mb-32">

          <h2 className="text-3xl font-semibold mb-16 text-center">
            Manufacturing Process
          </h2>

          <div className="relative">

            {/* line */}
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-white/10" />

            <div className="grid md:grid-cols-6 gap-10">

              {process.map((step, i) => (
                <div key={i} className="text-center relative">

                  <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </div>

                  <p className="text-sm text-gray-300">
                    {step}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* STATS BAND */}
        <section className="py-24 mb-32 bg-gradient-to-r from-blue-900/30 via-blue-800/20 to-blue-900/30 rounded-xl border border-blue-500/20">

          <div className="grid md:grid-cols-4 gap-12 text-center">

            {stats.map((stat, i) => (
              <div key={i}>

                <p className="text-4xl font-semibold text-blue-400 mb-2">
                  {stat.number}
                </p>

                <p className="text-gray-400 text-sm tracking-wide">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </section>


        {/* FINAL IMAGE SECTION */}
        <section className="relative h-[460px] rounded-xl overflow-hidden">

          <Image
            src="/images/rolling-mill.jpg"
            alt="Rolling Mill"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 flex items-center justify-center text-center px-6">

            <div className="max-w-2xl">

              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Precision Engineered for Steel Production
              </h2>

              <p className="text-gray-300">
                Our commitment to metallurgy and engineering excellence enables
                steel plants to operate with reliability, efficiency, and
                superior production performance.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}