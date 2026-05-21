"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/commercial", label: "Commercial" },
  { href: "/residential", label: "Residential" },
  { href: "/short-term-rental", label: "STR Cleaning" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(44,44,44,0.08)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-honey-300 flex items-center justify-center group-hover:bg-honey-400 transition-colors duration-200 shadow-sm">
                <span className="text-xl leading-none">🐝</span>
              </div>
              <div>
                <span className="font-display font-semibold text-charcoal text-lg leading-tight tracking-tight block">
                  Bizzy Bees
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-honey-600 font-medium block -mt-0.5">
                  Cleaning
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover-underline ${
                    pathname === link.href
                      ? "text-honey-600"
                      : "text-charcoal-light hover:text-honey-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-2 px-5 py-2.5 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold text-sm rounded-lg transition-all duration-200 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-charcoal hover:bg-warmGray-100 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-charcoal rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-warmGray-100">
              <span className="font-display font-semibold text-charcoal text-lg">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-warmGray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-1 flex-1">
              <Link
                href="/"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  pathname === "/" ? "bg-honey-50 text-honey-700" : "text-charcoal hover:bg-warmGray-100"
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-honey-50 text-honey-700"
                      : "text-charcoal hover:bg-warmGray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-warmGray-100">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-3.5 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold rounded-lg transition-colors duration-200"
              >
                Request a Quote
              </Link>
              <div className="mt-4 text-center">
                <a
                  href="tel:5037526609"
                  className="text-sm text-warmGray-500 hover:text-honey-600 transition-colors"
                >
                  📞 503-752-6609
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
