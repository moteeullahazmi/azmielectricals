"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold">Azmi Electricals</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About Us</Link>
          <Link href="/products" className="hover:text-yellow-400">Products</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-800 px-4 py-3 space-y-2">
          <Link href="/" className="block hover:text-yellow-400">Home</Link>
          <Link href="/about" className="block hover:text-yellow-400">About Us</Link>
          <Link href="/products" className="block hover:text-yellow-400">Products</Link>
          <Link href="/contact" className="block hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
