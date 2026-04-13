"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import AuthoritySection from "../components/AuthoritySection";
import PremiumBackground from "../components/PremiumBackground";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import TrustedBySection from "../components/TrustedBySection";
import EngineeringSection from "@/components/EngineeringSection";
import CTAsection from "../components/CTAsection";

export default function Home() {
  return (
    <main className="relative  text-white">

      {/* Background gradient */}
      <div className="fixed -z-20 inset-0 bg-gradient-to-br from-[#0B0D10] via-[#111827] to-[#0B0D10]" />

      <PremiumBackground />


      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden">

  {/* 🔥 Ambient glow (premium depth) */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px]" />
  </div>

  <div className="relative max-w-3xl mx-auto text-center">

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]
      bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent"
    >
      Precision.
    </motion.h1>

    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mt-2"
    >
      Engineered for{" "}
      <span className="relative inline-block">
        <span className="text-blue-500">performance</span>
        {/* subtle underline glow */}
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500/40 blur-sm" />
      </span>
      .
    </motion.h1>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed"
    >
      Manufacturers of high-performance rolling mill rolls
      for modern steel plants worldwide.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
    >
      {/* Primary CTA */}
      <Link
        href="#"
        className="group relative w-full sm:w-auto px-6 py-3 text-sm font-semibold tracking-wide rounded-md text-white
        bg-gradient-to-r from-blue-600 to-blue-500
        shadow-[0_8px_30px_rgba(37,99,235,0.35)]
        transition-all duration-300

        hover:from-blue-500 hover:to-blue-400
        hover:shadow-[0_12px_50px_rgba(37,99,235,0.6)]

        active:scale-95"
      >
        {/* glow layer */}
        <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-400/20 blur-xl" />
        <span className="relative z-10">Explore Products</span>
      </Link>

      {/* Secondary CTA */}
      <a
        href="/catalogue.pdf"
        download
        className="group relative w-full sm:w-auto px-6 py-3 text-sm font-semibold tracking-wide rounded-md
        text-white/80 border border-white/20
        bg-white/5 backdrop-blur-md
        transition-all duration-300

        hover:bg-white hover:text-black hover:border-white
        hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]

        active:scale-95"
      >
        <span className="relative z-10">Download Catalogue</span>
      </a>
    </motion.div>

    {/*  */}

  </div>

</section>

      <AuthoritySection />

      {/* <TrustedBySection /> */}
      <EngineeringSection />
    
      <StatsSection />

      <ProductSection />

      <CTAsection />

      

      
    </main>
  );
}