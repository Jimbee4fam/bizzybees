import type { Metadata } from "next";
import Link from "next/link";
import QuoteCTA from "@/components/QuoteCTA";
import HoneycombAccent from "@/components/HoneycombAccent";

export const metadata: Metadata = {
  title: "Short-Term Rental Cleaning | Airbnb & VRBO Turnover Oregon",
  description:
    "Fast, reliable turnover cleaning for Airbnb, VRBO, and short-term rentals in Oregon. Photo-ready results, linen resets, restocking, and flexible scheduling. Contact Bizzy Bees Cleaning.",
};

const strServices = [
  {
    icon: "⚡",
    title: "Turnover Cleaning",
    description:
      "Quick, thorough turnovers between guests — every room cleaned and reset to your standards, every time.",
    accent: true,
  },
  {
    icon: "🛏",
    title: "Linen & Towel Reset",
    description:
      "Beds made, linens replaced, and towels set up fresh. We follow your setup preferences precisely.",
    accent: false,
  },
  {
    icon: "📋",
    title: "Restocking Checklist",
    description:
      "We track and report consumables — toiletries, paper products, coffee supplies — so you&apos;re never caught off guard.",
    accent: false,
  },
  {
    icon: "📸",
    title: "Photo-Ready Presentation",
    description:
      "Everything staged and arranged so your property looks its best for arriving guests and listing photos.",
    accent: false,
  },
  {
    icon: "🔍",
    title: "Guest-Ready Inspections",
    description:
      "We walk through before departure to confirm everything is in order — nothing out of place before check-in.",
    accent: false,
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    description:
      "We work with your booking calendar, including short-notice turnovers and back-to-back cleans.",
    accent: false,
  },
  {
    icon: "💬",
    title: "Owner / Manager Communication",
    description:
      "We communicate directly with owners and property managers — reports, issues, and confirmations handled promptly.",
    accent: false,
  },
  {
    icon: "🏠",
    title: "Full Property Walkthroughs",
    description:
      "We cover every room top-to-bottom — kitchen, bathrooms, bedrooms, living areas, and outdoor spaces.",
    accent: false,
  },
];

const hostReasons = [
  {
    icon: "⭐",
    title: "Protect Your Ratings",
    body: "Guest reviews live or die on cleanliness. A consistently clean rental keeps your ratings high and bookings steady.",
  },
  {
    icon: "😌",
    title: "Stop Stressing Turnovers",
    body: "Stop scrambling between checkouts and check-ins. Bizzy Bees handles the turnover so you don't have to.",
  },
  {
    icon: "📲",
    title: "Stay Informed",
    body: "We communicate after every clean — any damage, supply needs, or issues are reported directly to you.",
  },
  {
    icon: "🗓",
    title: "Works With Your Calendar",
    body: "Whether you have 3 nights between guests or 3 hours, we build a schedule that works for your bookings.",
  },
];

export default function ShortTermRentalPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[72px] bg-charcoal">
        <div className="absolute inset-0 honeycomb-bg-dark pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-oregonGreen/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
        <HoneycombAccent
          className="absolute top-10 right-16 hidden lg:block animate-float"
          size={180}
          opacity={0.1}
          color="#F5C842"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-300/10 border border-honey-300/20 mb-7">
              <span className="text-honey-300 text-sm font-medium">🛏 Short-Term Rental Cleaning</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-6">
              Guest-Ready Every Time.{" "}
              <span className="text-honey-gradient">Reliable Turnover Cleaning</span>{" "}
              for Oregon Rentals.
            </h1>
            <p className="text-warmGray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Bizzy Bees Cleaning specializes in short-term rental and Airbnb turnover cleaning — photo-ready results, flexible scheduling, and the reliability that keeps guests happy and reviews strong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-warm text-center"
              >
                Request a Turnover Cleaning Quote
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

      {/* ── WHY HOSTS NEED US ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
              For Hosts & Property Managers
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Why Short-Term Rental Hosts Choose Bizzy Bees
            </h2>
            <p className="text-warmGray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Your cleaning service is the backbone of your rental operation. Here&apos;s why reliability matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hostReasons.map((reason) => (
              <div key={reason.title} className="bg-cream rounded-2xl border border-warmGray-100 p-6 service-card shadow-card text-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">{reason.icon}</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{reason.title}</h3>
                <p className="text-warmGray-500 text-sm leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="honeycomb-bg section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
              What We Handle
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Short-Term Rental Services
            </h2>
            <p className="text-warmGray-500 text-lg max-w-xl mx-auto leading-relaxed">
              From the moment guests leave to the moment the next ones arrive — we have every step covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strServices.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl border p-6 service-card shadow-card ${
                  service.accent
                    ? "bg-honey-50 border-honey-200"
                    : "bg-white border-warmGray-100"
                }`}
              >
                {service.accent && (
                  <span className="inline-block px-2 py-0.5 bg-honey-300 text-charcoal text-xs font-semibold rounded-full mb-3">
                    Core Service
                  </span>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  service.accent ? "bg-honey-100" : "bg-cream-dark"
                }`}>
                  <span className="text-xl">{service.icon}</span>
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-2">{service.title}</h3>
                <p className="text-warmGray-400 text-xs leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
                Simple Process
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                How Turnover Cleaning Works
              </h2>
            </div>

            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "Share Your Calendar",
                  body: "Give us your booking calendar or check-in/checkout schedule. We plan around your guest flow.",
                },
                {
                  number: "02",
                  title: "We Arrive After Checkout",
                  body: "Our team arrives after guests leave and works through your complete turnover checklist.",
                },
                {
                  number: "03",
                  title: "Full Reset & Inspection",
                  body: "Every room cleaned, linens reset, supplies checked, staging completed, and final walkthrough done.",
                },
                {
                  number: "04",
                  title: "Confirmation to You",
                  body: "You get a notification when the property is ready — plus any supply or damage reports.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 items-start bg-cream rounded-2xl border border-warmGray-100 p-6 service-card"
                >
                  <div className="w-10 h-10 rounded-full bg-honey-300 flex-shrink-0 flex items-center justify-center font-semibold text-charcoal text-sm">
                    {step.number}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal mb-1">{step.title}</p>
                    <p className="text-warmGray-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA
        headline="Your next guests deserve a spotless rental."
        subtext="Get in touch with Sarah to set up reliable turnover cleaning for your property."
        ctaLabel="Get a Turnover Cleaning Quote"
        dark={true}
      />
    </>
  );
}
