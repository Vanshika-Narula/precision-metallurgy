"use client";

import { motion } from "framer-motion";
import PremiumBackground from "@/components/PremiumBackground";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white px-6 md:px-16 pt-32 pb-20">
      <PremiumBackground />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <p className="text-xs tracking-[0.4em] text-blue-400 uppercase mb-4">
          Contact
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Let’s Talk About Your <span className="text-blue-500">Steel Plant</span>
        </h1>

        <p className="text-gray-400 leading-relaxed">
          Reach out to our team for product inquiries, technical consultation,
          or partnership opportunities. We help steel plants optimize rolling
          mill performance with precision-engineered rolls.
        </p>
      </motion.div>


      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl">

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-xl"
        >

          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mt-2 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Company</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full mt-2 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              rows={4}
              placeholder="How can we help?"
              className="w-full mt-2 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-blue-600 rounded-full text-sm hover:bg-blue-500 transition"
          >
            Send Inquiry
          </button>

        </motion.form>


        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >

          <div>
            <h3 className="text-xl font-medium mb-2">Head Office</h3>
            <p className="text-gray-400">
              Precision Metallurgy Pvt. Ltd.  
              <br />
              Industrial Area, Haryana, India
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Email</h3>
            <p className="text-gray-400">
              sales@precisionmetallurgy.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Phone</h3>
            <p className="text-gray-400">
              +91 98765 43210
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Business Hours</h3>
            <p className="text-gray-400">
              Monday – Saturday  
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>

        </motion.div>

      </div>

    </main>
  );
}