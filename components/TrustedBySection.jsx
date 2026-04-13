"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedBySection() {

  const companies = [
    "/images/logo/tata.png",
    "/images/logo/jsw.jpg",
    "/images/logo/sail.png",
    "/images/logo/jindal.png",
    "/images/logo/arcelor.jpg",
  ];

  return (
    <section className="relative py-24 px-6 md:px-16">

      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.35em] text-gray-400 uppercase mb-14"
        >
          Trusted by leading steel plants
        </motion.p>

        <div className="flex flex-wrap justify-center gap-16 items-center opacity-70">

          {companies.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Image
                src={logo}
                alt="Steel Plant"
                width={140}
                height={60}
                className="h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}