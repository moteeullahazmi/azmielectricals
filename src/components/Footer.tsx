"use client"
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white shadow-lg mt-auto  ">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-3 md:py-4 max-w-6xl mx-auto">

        {/* Copyright */}
        <p className="text-center sm:text-left text-sm md:text-base hover:text-yellow-400">
          © 1980-{new Date().getFullYear()} Azmi Electricals, Bindra Bazar, Azamgarh. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-end mt-2 sm:mt-0 gap-4">
          <a
            href="https://www.facebook.com/azmielectricals"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors "
          >
            <FaFacebookF className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.instagram.com/azmiagencies"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
