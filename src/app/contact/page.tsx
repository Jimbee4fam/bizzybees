import type { Metadata } from "next";
import React from "react";
import QuoteForm from "@/components/QuoteForm";
import HoneycombAccent from "@/components/HoneycombAccent";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Contact Bizzy Bees Cleaning to request a free quote. Reach Sarah Felix by phone, email, or through the quote request form. Commercial, residential, and short-term rental cleaning.",
};

const contactMethods = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "503-752-6609",
    href: "tel:5037526609",
    note: "Best for quick questions",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "Sarah@bizzybeescleaning.org",
    href: "mailto:Sarah@bizzybeescleaning.org",
    note: "We respond within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-cream pt-[72px]">
        <div className="absolute inset-0 honeycomb-bg opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-honey-200/20 rounded-full translate-x-1/4 -translate-y-1/3 blur-3xl pointer-events-none" />
        <HoneycombAccent
          className="absolute bottom-0 right-16 hidden lg:block"
          size={140}
          opacity={0.1}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-100 border border-honey-200 mb-7">
            <span className="text-sm font-medium text-charcoal">Get in Touch</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-charcoal leading-tight mb-5">
            Request a Free Quote
          </h1>
          <p className="text-warmGray-500 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Tell us about your space and what you need. Sarah personally reviews every request and responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact info card */}
                <div className="bg-cream rounded-2xl border border-warmGray-100 p-7 shadow-card">
                  <h2 className="font-display font-semibold text-charcoal text-lg mb-5">
                    Contact Sarah Directly
                  </h2>
                  <div className="space-y-5">
                    {contactMethods.map((method) => (
                      <a
                        key={method.label}
                        href={method.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-honey-100 flex items-center justify-center flex-shrink-0 text-honey-700 group-hover:bg-honey-200 transition-colors duration-200">
                          {method.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-warmGray-400 mb-0.5">
                            {method.label}
                          </p>
                          <p className="font-medium text-charcoal group-hover:text-honey-600 transition-colors duration-200 text-sm">
                            {method.value}
                          </p>
                          <p className="text-xs text-warmGray-400 mt-0.5">{method.note}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Location badge */}
                <div className="bg-oregonGreen/5 border border-oregonGreen/15 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🌲</span>
                    <h3 className="font-semibold text-charcoal">Oregon Based</h3>
                  </div>
                  <p className="text-warmGray-500 text-sm leading-relaxed">
                    Bizzy Bees Cleaning is a locally owned Oregon business. Contact us to confirm service availability in your area.
                  </p>
                </div>

                {/* What to expect */}
                <div className="bg-white rounded-2xl border border-warmGray-100 p-6 shadow-card">
                  <h3 className="font-semibold text-charcoal mb-4 text-sm uppercase tracking-wider">
                    After You Submit
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Sarah personally reviews your request",
                      "Response within 24 hours",
                      "Free, no-obligation quote",
                      "Custom plan built for your space",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-honey-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-warmGray-500 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE REMINDER ── */}
      <section className="honeycomb-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-honey-600 mb-8">
            Services Available
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: "🏢", label: "Commercial Cleaning" },
              { icon: "🏠", label: "Residential Cleaning" },
              { icon: "🛏", label: "STR / Airbnb" },
              { icon: "🧽", label: "Deep Cleaning" },
              { icon: "📦", label: "Move-In/Out" },
              { icon: "📋", label: "Custom Plans" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl border border-warmGray-100 p-4 text-center service-card shadow-card"
              >
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <span className="text-xs font-medium text-charcoal leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
