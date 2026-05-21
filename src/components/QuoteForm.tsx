"use client";

import { useState } from "react";

const serviceTypes = [
  "Commercial Cleaning",
  "Residential Cleaning",
  "Short-Term Rental Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Custom Cleaning Plan",
];

const propertyTypes = [
  "Office / Business",
  "School / Educational",
  "Medical Office",
  "Retail Space",
  "Commercial Building",
  "Single Family Home",
  "Apartment / Condo",
  "Short-Term Rental / Airbnb / VRBO",
  "Multi-Unit Property",
  "Other",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder: integrate with Formspree, Resend, or similar
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-card border border-warmGray-100">
        <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl">🐝</span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
          Thank you — we&apos;re on it!
        </h3>
        <p className="text-warmGray-500 leading-relaxed mb-6">
          Sarah will review your request and reach out within 24 hours. You can also call or email directly for faster response.
        </p>
        <a
          href="tel:5037526609"
          className="inline-flex items-center gap-2 text-honey-600 font-medium hover:text-honey-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          503-752-6609
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-warmGray-100 space-y-6"
    >
      {/* Row 1: Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
            Your Name <span className="text-honey-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1.5">
            Company / Property Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Office Building"
            className="form-input"
          />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email Address <span className="text-honey-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="503-000-0000"
            className="form-input"
          />
        </div>
      </div>

      {/* Row 3: Service Type + Property Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-charcoal mb-1.5">
            Service Type <span className="text-honey-600">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            required
            className="form-input appearance-none bg-white"
          >
            <option value="" disabled>Select a service...</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-charcoal mb-1.5">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            className="form-input appearance-none bg-white"
          >
            <option value="" disabled>Select type...</option>
            {propertyTypes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Square Footage + Schedule */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sqft" className="block text-sm font-medium text-charcoal mb-1.5">
            Square Footage / Property Size
          </label>
          <input
            id="sqft"
            name="sqft"
            type="text"
            placeholder="e.g. 2,500 sq ft or 3 bedrooms"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="schedule" className="block text-sm font-medium text-charcoal mb-1.5">
            Preferred Schedule
          </label>
          <input
            id="schedule"
            name="schedule"
            type="text"
            placeholder="e.g. Weekly, Mon & Thu, as-needed"
            className="form-input"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us more about your space, any specific needs, or questions..."
          className="form-input resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-honey-300 hover:bg-honey-400 text-charcoal font-semibold text-base rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-warm hover:shadow-warm-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Quote Request"
        )}
      </button>

      <p className="text-xs text-warmGray-400 text-center">
        We&apos;ll never share your information. Sarah personally reviews every inquiry.
      </p>
    </form>
  );
}
