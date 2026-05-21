import type { Metadata } from "next";
import Link from "next/link";
import QuoteCTA from "@/components/QuoteCTA";
import HoneycombAccent from "@/components/HoneycombAccent";

export const metadata: Metadata = {
  title: "Residential Cleaning Services Oregon",
  description:
    "Professional home cleaning services in Oregon. Recurring cleaning, deep cleans, and move-in/move-out cleaning. Friendly, reliable, and locally owned by Sarah Felix.",
};

const residentialServices = [
  {
    icon: "🔄",
    title: "Recurring Home Cleaning",
    description:
      "Weekly, bi-weekly, or monthly cleaning visits to keep your home consistently clean without the hassle.",
  },
  {
    icon: "🧽",
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom clean that reaches every corner, ideal for first visits, seasonal resets, or after events.",
  },
  {
    icon: "📦",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Comprehensive cleaning to get a home truly move-in ready or to leave your old home in excellent condition.",
  },
  {
    icon: "🍳",
    title: "Kitchen Cleaning",
    description:
      "Counters, appliances, sink, stovetop, cabinet fronts, and floors — the kitchen done right every time.",
  },
  {
    icon: "🚿",
    title: "Bathroom Cleaning",
    description:
      "Toilets, tubs, showers, sinks, mirrors, and tile — disinfected and sparkling.",
  },
  {
    icon: "💨",
    title: "Dusting & Surface Wipe-Down",
    description:
      "Furniture, shelves, ceiling fans, baseboards, and surfaces — dusted and cleared of buildup.",
  },
  {
    icon: "🧴",
    title: "Floor Cleaning",
    description:
      "Vacuuming carpets and area rugs, sweeping and mopping hard floors throughout the home.",
  },
  {
    icon: "📝",
    title: "Custom Cleaning Plans",
    description:
      "We build a cleaning plan around what matters most to you — your priorities, your preferences, your home.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-cream pt-[72px]">
        <div className="absolute inset-0 honeycomb-bg pointer-events-none opacity-80" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-honey-200/20 rounded-full translate-x-1/4 -translate-y-1/3 blur-3xl pointer-events-none" />
        <HoneycombAccent
          className="absolute bottom-10 right-20 hidden lg:block animate-float"
          size={130}
          opacity={0.12}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-100 border border-honey-200 mb-7">
              <span className="text-sm font-medium text-charcoal">🏠 Residential Cleaning</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-[1.15] mb-6">
              A Cleaner Home,{" "}
              <span className="text-honey-gradient">More Time for You</span>
            </h1>
            <p className="text-warmGray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Bizzy Bees Cleaning provides friendly, professional residential cleaning services across Oregon. Whether you need regular upkeep or a one-time deep clean, we treat your home like it&apos;s our own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-warm text-center"
              >
                Request a Home Cleaning Quote
              </Link>
              <a
                href="tel:5037526609"
                className="px-8 py-4 bg-white hover:bg-warmGray-50 border border-warmGray-200 text-charcoal font-semibold rounded-lg transition-all duration-200 text-center shadow-sm"
              >
                Call 503-752-6609
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-cream rounded-3xl border border-warmGray-100 p-8 space-y-5">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
                  What to Expect
                </h3>
                {[
                  {
                    step: "01",
                    title: "Request a Quote",
                    body: "Tell us about your home and what you need. Sarah will respond within 24 hours.",
                  },
                  {
                    step: "02",
                    title: "Customize Your Plan",
                    body: "We'll discuss your priorities, preferences, and schedule to build the right plan.",
                  },
                  {
                    step: "03",
                    title: "We Clean, You Relax",
                    body: "Show up to a clean home. We handle the details so you don't have to.",
                  },
                  {
                    step: "04",
                    title: "Ongoing & Flexible",
                    body: "Adjust, pause, or update your service any time. No rigid contracts.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-honey-300 flex items-center justify-center flex-shrink-0 font-semibold text-charcoal text-xs">
                      {s.step}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm mb-0.5">{s.title}</p>
                      <p className="text-warmGray-500 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
                For Homeowners
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-5 leading-tight">
                Reliable Home Cleaning You Can Actually Count On
              </h2>
              <p className="text-warmGray-500 text-lg leading-relaxed mb-5">
                We know inviting someone into your home requires trust. That&apos;s why Bizzy Bees operates with care, consistency, and respect for your space and belongings.
              </p>
              <p className="text-warmGray-500 leading-relaxed mb-8">
                Sarah personally manages every residential client relationship. Your home gets the same quality attention every visit — not just the first one.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Weekly & Bi-Weekly", "Deep Cleaning", "Move-In / Move-Out", "Custom Plans"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-honey-50 border border-honey-200 text-charcoal text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="honeycomb-bg section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
              What We Clean
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Residential Cleaning Services
            </h2>
            <p className="text-warmGray-500 text-lg max-w-xl mx-auto">
              Every visit follows a detailed checklist tailored to your home. Nothing overlooked, nothing rushed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {residentialServices.map((service, i) => (
              <div
                key={service.title}
                className={`bg-white rounded-2xl border p-6 service-card shadow-card ${
                  i % 4 === 0 ? "border-honey-200 bg-honey-50" : "border-warmGray-100"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  i % 4 === 0 ? "bg-honey-100" : "bg-cream-dark"
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

      <QuoteCTA
        headline="Your home deserves to be clean."
        subtext="Get a free quote from Sarah — friendly, local, and ready to help."
        ctaLabel="Request a Home Cleaning Quote"
      />
    </>
  );
}
