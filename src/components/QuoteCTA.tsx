import Link from "next/link";

interface QuoteCTAProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  dark?: boolean;
}

export default function QuoteCTA({
  headline = "Ready to get started?",
  subtext = "Request a free cleaning quote — no obligation, usually within 24 hours.",
  ctaLabel = "Request a Free Quote",
  dark = false,
}: QuoteCTAProps) {
  if (dark) {
    return (
      <section className="honeycomb-bg-dark py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-honey-300/10 border border-honey-300/20">
            <span className="text-honey-300 text-sm font-medium">Let&apos;s get started</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            {headline}
          </h2>
          <p className="text-warmGray-300 text-lg mb-8 leading-relaxed">{subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-warm hover:shadow-warm-lg text-base"
            >
              {ctaLabel}
            </Link>
            <a
              href="tel:5037526609"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-all duration-200 text-base"
            >
              Call 503-752-6609
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="honeycomb-bg-gold py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg text-base"
          >
            {ctaLabel}
          </Link>
          <a
            href="tel:5037526609"
            className="px-8 py-4 bg-white/60 hover:bg-white/80 border border-charcoal/20 text-charcoal font-semibold rounded-lg transition-all duration-200 text-base"
          >
            Call 503-752-6609
          </a>
        </div>
      </div>
    </section>
  );
}
