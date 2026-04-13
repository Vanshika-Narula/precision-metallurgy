"use client";
import Link from "next/link";


const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Looking for Precision You Can Trust?
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with Precision Metallurgy for high-quality manufacturing,
          advanced infrastructure, and reliable delivery.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get a Quote
          </button>

          <Link href="/contact">
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTASection;