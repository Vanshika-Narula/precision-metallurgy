"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/products.js";

type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string;
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

  const filtered = products.filter((p: Product) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen px-6 md:px-16 py-20 text-white relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-semibold mb-10 text-center"
      >
        Our Products
      </motion.h1>

      {/* Search */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full sm:w-2/3 md:w-1/2">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg
            bg-white/5 border border-white/10 backdrop-blur-xl
            text-white placeholder-gray-400
            outline-none transition-all duration-300
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((product: Product, index: number) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            onClick={() => setSelected(product)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-white/5 border border-white/10
            backdrop-blur-md hover:border-blue-500 transition"
          >
            <div className="h-40 sm:h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {product.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0B0D10] rounded-xl max-w-lg w-full overflow-hidden border border-white/10"
          >
            <div className="h-52 overflow-hidden">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold">{selected.name}</h2>

              <p className="text-gray-400 mt-2 text-sm">
                {selected.description}
              </p>

              <p className="text-blue-400 mt-3 text-sm">
                {selected.specs}
              </p>

              <button
                onClick={() => {
                  setQuoteProduct(selected);
                  setSelected(null);
                }}
                className="mt-5 w-full bg-blue-600 py-2 rounded-md"
              >
                Request Quote
              </button>

              <button
                onClick={() => setSelected(null)}
                className="mt-3 w-full text-gray-400 text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quote Modal */}
      {quoteProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0B0D10] rounded-xl max-w-md w-full p-6 border border-white/10"
          >
            <h2 className="text-xl font-semibold mb-4">
              Request a Quote
            </h2>

            <input placeholder="Your Name" className="input" />
            <input placeholder="Email" className="input mt-3" />
            <input placeholder="Phone Number" className="input mt-3" />

            <input
              value={quoteProduct.name}
              readOnly
              className="input mt-3 text-blue-400"
            />

            <textarea placeholder="Your requirements..." className="input mt-3" />

            <button className="mt-4 w-full bg-blue-600 py-2 rounded-md">
              Submit Request
            </button>

            <button
              onClick={() => setQuoteProduct(null)}
              className="mt-3 w-full text-gray-400 text-sm"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

    </main>
  );
}