import Link from "next/link";

const serviceLinks = [
  { href: "/commercial", label: "Commercial Cleaning" },
  { href: "/residential", label: "Residential Cleaning" },
  { href: "/short-term-rental", label: "Short-Term Rental Cleaning" },
  { href: "/contact", label: "Request a Quote" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="honeycomb-bg-dark text-white">
      {/* Top CTA strip */}
      <div className="bg-honey-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-charcoal">
              Ready for a cleaner space?
            </p>
            <p className="text-charcoal/70 mt-1 text-sm">
              Get a free, no-obligation quote from Sarah — usually within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-7 py-3.5 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-honey-300/20 border border-honey-300/30 flex items-center justify-center">
                <span className="text-xl">🐝</span>
              </div>
              <div>
                <span className="font-display font-semibold text-white text-lg block leading-tight">
                  Bizzy Bees
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-honey-300 block -mt-0.5">
                  Cleaning
                </span>
              </div>
            </div>
            <p className="text-warmGray-300 text-sm leading-relaxed mb-5">
              Professional cleaning services for Oregon businesses, homes, and short-term rentals. Locally owned and operated.
            </p>
            <div className="space-y-2">
              <a
                href="tel:5037526609"
                className="flex items-center gap-2 text-sm text-warmGray-300 hover:text-honey-300 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-honey-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                503-752-6609
              </a>
              <a
                href="mailto:Sarah@bizzybeescleaning.org"
                className="flex items-center gap-2 text-sm text-warmGray-300 hover:text-honey-300 transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-honey-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Sarah@bizzybeescleaning.org
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-honey-300 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warmGray-300 hover:text-white transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-honey-300 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warmGray-300 hover:text-white transition-colors duration-200 hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-honey-300 mb-5">
              Service Area
            </h3>
            <p className="text-sm text-warmGray-300 leading-relaxed">
              Proudly serving Oregon businesses and homeowners. Contact us to confirm availability in your area.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-oregonGreen-dark/40 border border-oregonGreen/30">
              <span className="w-2 h-2 rounded-full bg-oregonGreen-light animate-pulse"></span>
              <span className="text-xs text-oregonGreen-light font-medium">Oregon Based</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warmGray-500">
            © {currentYear} Bizzy Bees Cleaning. All rights reserved.
          </p>
          <p className="text-xs text-warmGray-500">
            Oregon-based · Locally owned & operated
          </p>
        </div>
      </div>
    </footer>
  );
}
