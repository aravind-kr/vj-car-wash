"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-50 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200 border border-blue-100">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v7c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-7l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
                  <path d="M8 8h8" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                  <path d="M10 6.5l4 3M14 6.5l-4 3" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.7"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-200">
                  VJ Car Wash
                </span>
                <div className="text-xs text-blue-200 font-medium -mt-1">Premium Service</div>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="relative px-4 py-2 text-white hover:text-blue-100 transition-colors duration-200 rounded-lg hover:bg-white/10 group">
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link href="/services" className="relative px-4 py-2 text-white hover:text-blue-100 transition-colors duration-200 rounded-lg hover:bg-white/10 group">
                Services
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link href="/about" className="relative px-4 py-2 text-white hover:text-blue-100 transition-colors duration-200 rounded-lg hover:bg-white/10 group">
                About
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link href="/booking" className="ml-4 px-6 py-2 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-transparent hover:border-white/20">
                Book Now
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-700 to-blue-800 border-t border-blue-500/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/booking"
              className="block px-3 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
      
      {/* Subtle bottom gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
    </nav>
  );
}