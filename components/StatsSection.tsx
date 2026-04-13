"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "+" }: { end: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-28 px-8 md:px-20 overflow-hidden">

      {/* Background Image Effect (Industrial Feel) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/industrial-texture.jpg')] bg-cover bg-center" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

        <div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white">
            <Counter end={60} />
          </h3>
          <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
            Countries Served
          </p>
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white">
            <Counter end={2500} />
          </h3>
          <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
            Product Variants
          </p>
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white">
            <Counter end={800} />
          </h3>
          <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
            Dealer Network
          </p>
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white">
            <Counter end={6} suffix="" />
          </h3>
          <p className="mt-4 text-gray-400 uppercase tracking-widest text-sm">
            Manufacturing Plants
          </p>
        </div>

      </div>
    </section>
  );
}