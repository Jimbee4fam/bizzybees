import type { Metadata } from "next";
import Link from "next/link";
import QuoteCTA from "@/components/QuoteCTA";
import HoneycombAccent from "@/components/HoneycombAccent";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Oregon",
  description:
    "Professional commercial cleaning for Oregon offices, schools, medical offices, retail, and commercial buildings. Recurring janitorial, disinfection, floor care, and more. Get a free quote from Bizzy Bees Cleaning.",
};

const commercialServices = [
  {
    icon: "🧹",
    title: "Recurring Janitorial Services",
    description:
      "Consistent, scheduled cleaning for offices and commercial spaces. Daily, weekly, or custom frequency — we build a plan around your operations.",
  },
  {
    icon: "🚻",
    title: "Restroom Cleaning & Sanitizing",
    description:
      "Thorough restroom cleaning with attention to hygiene, disinfection, supply restocking, and odor control.",
  },
  {
    icon: "🗑",
    title: "Trash Removal",
    description:
      "Reliable trash collection and liner replacement for all areas of your facility on your schedule.",
  },
  {
    icon: "🪟",
    title: "Dusting & Surface Cleaning",
    description:
      "Desks, shelves, windowsills, vents, and blinds — all dusted and wiped down to keep your space fresh.",
  },
  {
    icon: "🧺",
    title: "Vacuuming & Carpet Care",
    description:
      "Regular vacuuming for carpeted offices, hallways, and common areas. Spot treatment available.",
  },
  {
    icon: "✨",
    title: "Hard Floor Care",
    description:
      "Sweeping, mopping, and hard floor maintenance for tile, LVT, hardwood, and concrete flooring.",
  },
  {
    icon: "☕",
    title: "Breakroom Cleaning",
    description:
      "Sinks, counters, appliances, and communal surfaces kept clean so staff have a great space to recharge.",
  },
  {
    icon: "🦠",
    title: "High-Touch Disinfection",
    description:
      "Targeted disinfection of frequently touched surfaces — door handles, light switches, keyboards, and more.",
  },
  {
    icon: "📦",
    title: "Move-In / Move-Out Commercial Cleans",
    description:
      "Comprehensive deep cleaning for commercial spaces during transitions, renovations, or new occupancy.",
  },
];

const clientTypes = [
  { icon: "💼", label: "Offices & Professional Services" },
  { icon: "🏫", label: "Schools & Educational Facilities" },
  { icon: "🏪", label: "Retail & Storefronts" },
  { icon: "🏥", label: "Medical Offices & Clinics" },
  { icon: "🏢", label: "Commercial Buildings" },
  { icon: "🏘", label: "Property Managers" },
  { icon: "🔧", label: "Small Businesses" },
  { icon: "🏗", label: "Post-Construction Cleans" },
];

export default function CommercialPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative overflow-hidden bg-charcoal pt-[72px]">
        <div className="absolute inset-0 honeycomb-bg-dark opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-honey-500/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <HoneycombAccent
          className="absolute bottom-0 right-16 hidden lg:block"
          size={200}
          opacity={0.08}
          color="#F5C842"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-300/10 border border-honey-300/20 mb-7">
              <span className="text-honey-300 text-sm font-medium">🏢 Commercial Cleaning</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-6">
              Professional Commercial Cleaning for{" "}
              <span className="text-honey-gradient">Oregon Businesses</span>
            </h1>
            <p className="text-warmGray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Bizzy Bees helps Oregon businesses maintain clean, professional, and healthy spaces for staff, customers, and visitors. Dependable scheduling, thorough work, and direct communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-warm text-center"
              >
                Request a Commercial Quote
              </Link>
              <a
                href="tel:5037526609"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-all duration-200 text-center"
              >
                Call 503-752-6609
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY COMMERCIAL BUSINESSES CHOOSE US ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
                Built for Business
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5 leading-tight">
                A Clean Workplace Is a Professional Workplace
              </h2>
              <p className="text-warmGray-500 text-lg leading-relaxed mb-5">
                Your facility sends a message to clients, staff, and visitors before a word is spoken. Bizzy Bees helps you keep that message clean, professional, and consistent.
              </p>
              <p className="text-warmGray-500 leading-relaxed mb-8">
                We work around your business hours, follow your preferred schedule, and deliver the kind of consistent results that let you focus on running your business — not worrying about your facility.
              </p>
              <ul className="space-y-3">
                {[
                  "Recurring contracts and as-needed scheduling",
                  "Consistent team with high attention to detail",
                  "Communication-first approach with Sarah personally managing accounts",
                  "Flexible service plans built around your business",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-honey-300 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-warmGray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client types grid */}
            <div className="grid grid-cols-2 gap-3">
              {clientTypes.map((type) => (
                <div
                  key={type.label}
                  className="bg-cream rounded-xl border border-warmGray-100 px-5 py-4 flex items-center gap-3 service-card"
                >
                  <span className="text-xl">{type.icon}</span>
                  <span className="text-sm font-medium text-charcoal leading-snug">{type.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="honeycomb-bg section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
              Services Included
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Commercial Cleaning Services
            </h2>
            <p className="text-warmGray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Comprehensive cleaning for every area of your commercial space, on a schedule that works for your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialServices.map((service, i) => (
              <div
                key={service.title}
                className={`bg-white rounded-2xl border p-6 service-card ${
                  i === 0 ? "border-honey-200 bg-honey-50" : "border-warmGray-100"
                } shadow-card`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  i === 0 ? "bg-honey-100" : "bg-cream-dark"
                }`}>
                  <span className="text-xl">{service.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-charcoal text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-warmGray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM PLANS CTA ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-oregonGreen/5 border border-oregonGreen/15 rounded-3xl p-12">
            <span className="text-3xl mb-4 block">📋</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-charcoal mb-4">
              Every Business Is Different
            </h2>
            <p className="text-warmGray-500 leading-relaxed mb-7">
              We don&apos;t offer one-size-fits-all commercial contracts. Sarah will assess your facility, understand your needs, and build a custom cleaning plan that makes sense for your budget and schedule.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-oregonGreen hover:bg-oregonGreen-dark text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Start with a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTA
        headline="Let's keep your business clean."
        subtext="Contact Sarah to discuss your commercial cleaning needs. Free quote, no obligation."
        ctaLabel="Get a Commercial Cleaning Quote"
        dark={true}
      />
    </>
  );
}
