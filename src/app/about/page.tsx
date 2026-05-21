import type { Metadata } from "next";
import Link from "next/link";
import QuoteCTA from "@/components/QuoteCTA";
import HoneycombAccent from "@/components/HoneycombAccent";

export const metadata: Metadata = {
  title: "About Bizzy Bees Cleaning | Sarah Felix, Oregon",
  description:
    "Learn about Bizzy Bees Cleaning and owner Sarah Felix. A locally owned Oregon cleaning company built on dependable service, detailed work, and long-term client relationships.",
};

const values = [
  {
    icon: "🎯",
    title: "Dependability First",
    body: "We show up, we do the work, and we communicate. You can count on Bizzy Bees to do what we say we&apos;ll do — every visit.",
  },
  {
    icon: "🔍",
    title: "Attention to Detail",
    body: "Cleaning done right means nothing overlooked. Every surface, every corner, every time — that&apos;s the standard we hold ourselves to.",
  },
  {
    icon: "💬",
    title: "Strong Communication",
    body: "Sarah is easy to reach and direct in her communication. Questions answered, issues addressed, schedules kept.",
  },
  {
    icon: "🤝",
    title: "Long-Term Relationships",
    body: "We&apos;re not just a one-time service. Our goal is to be a trusted, long-term partner for every business and homeowner we serve.",
  },
  {
    icon: "🌿",
    title: "Oregon Proud",
    body: "We&apos;re a local Oregon business and we take pride in serving our community with the kind of care you&apos;d expect from someone who lives here too.",
  },
  {
    icon: "🏅",
    title: "High Standards",
    body: "We hold ourselves to the same standard we&apos;d want for our own spaces — professional, thorough, and consistently excellent.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-cream pt-[72px]">
        <div className="absolute inset-0 honeycomb-bg opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-honey-200/20 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl pointer-events-none" />
        <HoneycombAccent
          className="absolute bottom-0 right-20 hidden lg:block"
          size={160}
          opacity={0.1}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-honey-100 border border-honey-200 mb-7">
            <span className="text-sm font-medium text-charcoal">About Us</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-[1.15] mb-6 max-w-3xl mx-auto">
            Cleaning You Can Count On,{" "}
            <span className="text-honey-gradient">Service You Can Trust</span>
          </h1>
          <p className="text-warmGray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Bizzy Bees Cleaning is a locally owned Oregon business founded on the belief that reliable, professional cleaning makes a real difference — in businesses, in homes, and in people&apos;s lives.
          </p>
        </div>
      </section>

      {/* ── SARAH'S STORY ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl bg-honey-50 border-2 border-honey-200 flex flex-col items-center justify-center shadow-warm">
                  <span className="text-7xl mb-4">🐝</span>
                  <p className="font-display text-xl font-semibold text-charcoal">Sarah Felix</p>
                  <p className="text-warmGray-500 text-sm mt-1">Owner, Bizzy Bees Cleaning</p>
                  <p className="text-xs text-warmGray-400 mt-4 px-8 text-center">
                    Photo coming soon
                  </p>
                </div>
                <HoneycombAccent
                  className="absolute -bottom-8 -right-8"
                  size={100}
                  opacity={0.15}
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-oregonGreen rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">OR</span>
                </div>
              </div>
            </div>

            {/* Story */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
                Meet the Owner
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-6 leading-tight">
                Hi, I&apos;m Sarah Felix
              </h2>
              <div className="space-y-4 text-warmGray-500 leading-relaxed">
                <p>
                  I founded Bizzy Bees Cleaning with a clear mission: to provide businesses, homeowners, and rental property owners with professional cleaning services they can genuinely depend on.
                </p>
                <p>
                  I believe that a clean space isn&apos;t just about appearances — it&apos;s about health, professionalism, and the pride you take in where you live and work. That belief drives everything we do at Bizzy Bees.
                </p>
                <p>
                  I personally manage every client relationship. That means when you reach out, you hear back from me — not a call center or a scheduling bot. I understand your space, your preferences, and what matters most to you.
                </p>
                <p>
                  Whether we&apos;re cleaning your office every week or turning over your Airbnb between guests, we bring the same standard to every job: thorough, reliable, and done right.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:Sarah@bizzybeescleaning.org"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Email Sarah
                </a>
                <a
                  href="tel:5037526609"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-warmGray-200 text-charcoal font-semibold rounded-lg transition-all duration-200 hover:bg-warmGray-50 shadow-sm"
                >
                  503-752-6609
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY VALUES ── */}
      <section className="honeycomb-bg section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
              How We Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-warmGray-500 text-lg max-w-xl mx-auto leading-relaxed">
              These aren&apos;t just words on a page. They&apos;re the principles behind every job Bizzy Bees takes on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-warmGray-100 p-6 service-card shadow-card">
                <div className="w-10 h-10 rounded-xl bg-honey-50 flex items-center justify-center mb-4">
                  <span className="text-xl">{v.icon}</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{v.title}</h3>
                <p className="text-warmGray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SUMMARY ── */}
      <section className="bg-white section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-honey-600 mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-10">
            Services from Bizzy Bees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: "/commercial",
                icon: "🏢",
                title: "Commercial Cleaning",
                desc: "Offices, schools, medical facilities, retail, and commercial buildings.",
              },
              {
                href: "/residential",
                icon: "🏠",
                title: "Residential Cleaning",
                desc: "Regular home cleaning, deep cleans, and move-in/move-out services.",
              },
              {
                href: "/short-term-rental",
                icon: "🛏",
                title: "Short-Term Rental Cleaning",
                desc: "Turnover cleaning and guest-ready service for Airbnb and VRBO properties.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-cream rounded-2xl border border-warmGray-100 p-7 service-card group hover:border-honey-200 transition-colors duration-200"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-display font-semibold text-charcoal text-lg mb-2">{s.title}</h3>
                <p className="text-warmGray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-honey-600 font-medium text-sm group-hover:gap-3 flex items-center gap-2 justify-center transition-all duration-200">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA
        headline="Ready to work with Bizzy Bees?"
        subtext="Contact Sarah today to discuss your cleaning needs and get a free quote."
        ctaLabel="Request a Quote"
      />
    </>
  );
}
