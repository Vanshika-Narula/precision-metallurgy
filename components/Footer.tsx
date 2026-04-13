"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0C0F] border-t border-white/10 text-gray-400">
      
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-20">

        {/* Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-14">

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Work Rolls</Link></li>
              <li><Link href="#">Backup Rolls</Link></li>
              <li><Link href="#">Intermediate Rolls</Link></li>
              <li><Link href="#">Rolling Mill Rolls</Link></li>
              <li><Link href="#">Custom Rolls</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Infrastructure</Link></li>
              <li><Link href="#">R&D</Link></li>
              <li><Link href="#">Quality</Link></li>
              <li><Link href="#">Certifications</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Rolling Mill Solutions</Link></li>
              <li><Link href="#">Custom Engineering</Link></li>
              <li><Link href="#">Metallurgical Consulting</Link></li>
              <li><Link href="#">Turnkey Projects</Link></li>
            </ul>
          </div>

          

          

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>+91-9876543210</li>
              <li>sales@precisionmetallurgy.com</li>
              <li>Industrial Area, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Precision Metallurgy. All rights reserved.</p>
          <div className="flex gap-3">
  <Link
    href="#"
    className="group p-2 border border-white/10 rounded-md transition duration-300 hover:border-blue-500 hover:bg-blue-500/10"
  >
    <Facebook
      size={16}
      className="text-gray-400 group-hover:text-blue-500 transition duration-300"
    />
  </Link>

  <Link
    href="#"
    className="group p-2 border border-white/10 rounded-md transition duration-300 hover:border-blue-500 hover:bg-blue-500/10"
  >
    <Linkedin
      size={16}
      className="text-gray-400 group-hover:text-blue-500 transition duration-300"
    />
  </Link>

  <Link
    href="#"
    className="group p-2 border border-white/10 rounded-md transition duration-300 hover:border-blue-500 hover:bg-blue-500/10"
  >
    <Twitter
      size={16}
      className="text-gray-400 group-hover:text-blue-500 transition duration-300"
    />
  </Link>

  <Link
    href="#"
    className="group p-2 border border-white/10 rounded-md transition duration-300 hover:border-blue-500 hover:bg-blue-500/10"
  >
    <Instagram
      size={16}
      className="text-gray-400 group-hover:text-blue-500 transition duration-300"
    />
  </Link>
</div>
        </div>

      </div>
    </footer>
  );
}