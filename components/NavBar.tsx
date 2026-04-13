"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-blue-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md border-b border-white/10 bg-white/[0.02]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo/logo.png"
              alt="Precision Metallurgy"
              width={40}
              height={40}
            />
            <span className="text-white text-lg font-medium">
              Precision Metallurgy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 text-sm">
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>

            <Link href="/products" className={linkClass("/products")}>
              Products
            </Link>

            <Link href="/industries" className={linkClass("/industries")}>
              Industries
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link
  href="/contact"
  className="px-6 py-2.5 border border-white/30 rounded-full text-sm text-white transition-colors duration-200 hover:bg-white hover:text-black"
>
  Contact Us
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>
      </motion.nav>


      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-[#0B0D10] z-50 p-8 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-12">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl"
                >
                  ×
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col space-y-8 text-xl">

                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/about")}
                >
                  About
                </Link>

                <Link
                  href="/products"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/products")}
                >
                  Products
                </Link>

                <Link
                  href="/industries"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/industries")}
                >
                  Industries
                </Link>

              </div>

              {/* Mobile Contact Button */}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-2.5 border border-white/30 rounded-full text-sm text-white transition-colors duration-200 hover:bg-white hover:text-black"
                  >
                Contact Us
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}