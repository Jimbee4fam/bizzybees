import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import QuoteCTA from "@/components/QuoteCTA";
import HoneycombAccent from "@/components/HoneycombAccent";

export const metadata: Metadata = {
  title: "Bizzy Bees Cleaning | Oregon Commercial & Residential Cleaning",
  description:
    "Reliable commercial, residential, and short-term rental cleaning services in Oregon. Bizzy Bees Cleaning delivers professional results with dependable scheduling and friendly local service.",
};

const serviceCategories = [
  {
    href: "/commercial",
    icon: "🏢",
    label: "Commercial",
    tagline: "For businesses, offices & property managers",
    description:
      "Keep your workplace clean, professional, and healthy. We handle recurring janitorial, deep cleans, and everything between.",
    accent: false,
  },
  {
    href: "/residential",
    icon: "🏠",
    label: "Residential",
    tagline: "For homeowners & renters",
    description:
      "From recurring home cleaning to deep cleans and move-in/move-out services — we treat your home with care.",
    accent: true,
  },
  {
    href: "/short-term-rental",
    icon: "🛏",
    label: "Short-Term Rental",
    tagline: "For Airbnb, VRBO & property owners",
    description:
      "Fast, thorough turnover cleans that leave your rental guest-ready every time. We work with your booking calendar.",
    accent: false,
  },
];

const whyReasons = [
  {
    icon: "📋",
    title: "Detailed & Consistent",
    body: "Every visit follows a thorough checklist so nothing gets missed and your expectations are always met.",
  },
  {
    icon: "📅",
    title: "Reliable Scheduling",
    body: "We show up when we say we will. Dependable service you can count on week after week.",
  },
  {
    icon: "💬",
    title: "Strong Communication",
    body: "Easy to reach, quick to respond. Sarah personally manages client relationships.",
  },
  {
    icon: "🌿",
    title: "Oregon Local",
    body: "We're proud to serve our Oregon community with the care and standards you'd expect from a neighbor.",
  },
  {
    icon: "🔒",
    title: "Trustworthy & Professional",
    body: "Your space is treated with respect and discretion. We build long-term relationships based on trust.",
  },
  {
    icon: "✨",
    title: "Custom to Your Space",
    body: "No two spaces are the same. We tailor our approach to your specific needs and preferences.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-cream min-h-[90vh] flex items-center pt-[72px]">
        {/* Decorative backgrounds */}
        <div className="absolute inset-0 honeycomb-bg opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-honey-200/20 rounded-full -translate-x-1/3 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-oregonGreen/5 rounded-full -translate-x-1/2 translate-y-1/3 blur-3xl pointer-events-none" />

        {/* Honeycomb decorative shapes */}
        <HoneycombAccent
          className="absolute top-20 right-12 hidden lg:block animate-float"
          size={160}
          opacity={0.12}
        />
        <HoneycombAccent
          className="absolute bottom-16 right-48 hidden lg:block animate-float"
          style={{ animationDelay: "2s" } as React.CSSProperties}
          size={80}
          opacity={0.08}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-100 border border-honey-200 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-oregonGreen rounded-full"></span>
              <span className="text-sm font-medium text-charcoal">
                Oregon-Based Cleaning Services
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-[1.15] mb-6 animate-fade-up">
              Reliable Cleaning Services for{" "}
              <span className="text-honey-gradient">Oregon Businesses,</span>{" "}
              Homes &amp; Rentals
            </h1>

            <p className="text-lg md:text-xl text-warmGray-500 leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "100ms" }}>
              Bizzy Bees Cleaning provides professional commercial, residential,
              and short-term rental cleaning services with dependable scheduling,
              detailed work, and friendly Oregon-based service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold text-base rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-warm hover:shadow-warm-lg text-center"
              >
                Request a Cleaning Quote
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white hover:bg-warmGray-50 border border-warmGray-200 text-charcoal font-semibold text-base rounded-lg transition-all duration-200 text-center shadow-card"
              >
                View Services
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
              {["Commercial Contracts", "Residential Cleaning", "Airbnb / VRBO Turnover"].map(
                (tag) => (
                  <div key={tag} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-honey-300 flex items-center justify-center">
                      <svg className="w-3 h-3 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-warmGray-500">{tag}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C360 0 720 60 1080 30C1260 15 1380 20 1440 25V60H0Z" fill="white" opacity="0.4" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section id="services" className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Cleaning Services for Every Space
            </h2>
            <p className="text-warmGray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Whether you manage a commercial building or a vacation rental, Bizzy Bees has a cleaning solution that fits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`service-card group relative overflow-hidden rounded-2xl border p-8 flex flex-col ${
                  cat.accent
                    ? "bg-honey-50 border-honey-200"
                    : "bg-cream border-warmGray-100"
                }`}
              >
                {cat.accent && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 bg-honey-300 text-charcoal text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl bg-white border border-warmGray-100 flex items-center justify-center mb-5 shadow-sm group-hover:shadow-warm transition-shadow duration-200">
                  <span className="text-2xl">{cat.icon}</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-honey-600 mb-1">
                  {cat.tagline}
                </p>
                <h3 className="font-display font-semibold text-charcoal text-xl mb-3">
                  {cat.label} Cleaning
                </h3>
                <p className="text-warmGray-500 text-sm leading-relaxed flex-1">
                  {cat.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-honey-600 font-medium text-sm group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BIZZY BEES ── */}
      <section className="honeycomb-bg section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              What Sets Bizzy Bees Apart
            </h2>
            <p className="text-warmGray-500 text-lg max-w-xl mx-auto leading-relaxed">
              We combine professional standards with genuine local care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-child">
            {whyReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-6 border border-warmGray-100 shadow-card service-card"
              >
                <div className="w-10 h-10 rounded-xl bg-honey-50 flex items-center justify-center mb-4">
                  <span className="text-xl">{reason.icon}</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{reason.title}</h3>
                <p className="text-warmGray-500 text-sm leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OREGON LOCAL ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-oregonGreen mb-3">
                Oregon Based
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5 leading-tight">
                Local to Oregon, Proud to Serve Our Community
              </h2>
              <p className="text-warmGray-500 text-lg leading-relaxed mb-6">
                Bizzy Bees Cleaning is a local Oregon business. That means we understand the community we serve, we&apos;re accountable to the people we work with, and we take real pride in the results we deliver.
              </p>
              <p className="text-warmGray-500 leading-relaxed mb-8">
                When you hire Bizzy Bees, you&apos;re supporting a small, locally owned business — not a national franchise. Sarah personally manages client relationships and is always just a call or email away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-oregonGreen hover:bg-oregonGreen-dark text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-center"
                >
                  About Bizzy Bees
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white border border-warmGray-200 text-charcoal font-semibold rounded-lg transition-all duration-200 hover:bg-warmGray-50 text-center shadow-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Visual block */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-oregonGreen/5 border border-oregonGreen/10 p-10">
                <HoneycombAccent
                  className="absolute -top-6 -right-6"
                  size={140}
                  opacity={0.12}
                  color="#4A7C59"
                />
                <div className="space-y-4">
                  {[
                    { label: "Service Types", value: "Commercial · Residential · STR" },
                    { label: "Based In", value: "Oregon 🌲" },
                    { label: "Response Time", value: "Within 24 hours" },
                    { label: "Scheduling", value: "Flexible & recurring options" },
                    { label: "Contracts", value: "Long-term & as-needed" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-oregonGreen/10 last:border-0"
                    >
                      <span className="text-sm font-medium text-charcoal/60">{item.label}</span>
                      <span className="text-sm font-semibold text-charcoal">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET THE OWNER ── */}
      <section className="honeycomb-bg-dark section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-300 mb-3">
              Meet the Owner
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
              Sarah Felix
            </h2>
            <div className="w-20 h-20 rounded-full bg-honey-300/20 border-2 border-honey-300/40 flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🐝</span>
            </div>
            <p className="text-warmGray-300 text-lg leading-relaxed mb-5">
              Sarah Felix founded Bizzy Bees Cleaning with a clear focus: deliver professional, reliable cleaning services that businesses and homeowners can truly count on. She brings high standards, direct communication, and a genuine commitment to getting every job done right.
            </p>
            <p className="text-warmGray-400 leading-relaxed mb-10">
              From commercial office buildings to short-term rental turnovers, Sarah leads every client relationship with care and professionalism. Her goal is simple — make sure every space Bizzy Bees touches is cleaner, healthier, and better than when we arrived.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5037526609"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call 503-752-6609
              </a>
              <a
                href="mailto:Sarah@bizzybeescleaning.org"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Sarah
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PLACEHOLDER ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">Client Feedback</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
            What Our Clients Say
          </h2>
          <div className="mt-10 max-w-2xl mx-auto bg-cream rounded-2xl border border-warmGray-100 p-12 shadow-card">
            <div className="w-14 h-14 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-2xl">⭐</span>
            </div>
            <p className="font-display text-xl text-charcoal/60 italic mb-2">
              Testimonials coming soon
            </p>
            <p className="text-warmGray-400 text-sm">
              Client references available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTE CTA ── */}
      <QuoteCTA
        headline="Ready for a cleaner space?"
        subtext="Request a free, no-obligation quote from Sarah. We'll get back to you within 24 hours."
        ctaLabel="Request a Cleaning Quote"
      />
    </>
  );
}
