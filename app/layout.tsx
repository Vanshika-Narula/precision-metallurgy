import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Precision Metallurgy",
  description: "High-performance rolling mill rolls engineered for precision and durability.",
  // icons: {
  //   icon: "/images/logo/logo.png", 
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 👇 FORCE favicon */}
        <link rel="icon" href="/images/logo/logo.png" />
      </head>
      <body className="bg-[#0B0D10] text-white">

        {/* Navbar (Global) */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-28">
          {children}
        </main>

        {/* Footer (Global) */}
        <Footer />

      </body>
    </html>
  );
}