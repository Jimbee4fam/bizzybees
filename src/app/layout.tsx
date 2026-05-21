import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bizzybeescleaning.org"),
  title: {
    default: "Bizzy Bees Cleaning | Oregon Commercial & Residential Cleaning",
    template: "%s | Bizzy Bees Cleaning",
  },
  description:
    "Bizzy Bees Cleaning provides professional commercial, residential, and short-term rental cleaning services in Oregon. Reliable scheduling, detailed work, and friendly local service.",
  keywords: [
    "cleaning service Oregon",
    "commercial cleaning Oregon",
    "janitorial services Oregon",
    "residential cleaning",
    "Airbnb cleaning Oregon",
    "short-term rental cleaning",
    "office cleaning",
    "Bizzy Bees Cleaning",
    "Sarah Felix",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizzybeescleaning.org",
    siteName: "Bizzy Bees Cleaning",
    title: "Bizzy Bees Cleaning | Oregon Commercial & Residential Cleaning",
    description:
      "Professional cleaning services for Oregon businesses, homes & short-term rentals. Reliable, detailed, and locally owned.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bizzy Bees Cleaning | Oregon Cleaning Services",
    description:
      "Commercial, residential & short-term rental cleaning in Oregon. Get a free quote today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased bg-cream text-charcoal">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
