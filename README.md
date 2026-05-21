# Bizzy Bees Cleaning — Website

Production-ready Next.js 14 website for **Bizzy Bees Cleaning**, an Oregon-based cleaning company owned by Sarah Felix.

---

## 🐝 About This Project

- **Owner:** Sarah Felix
- **Phone:** 503-752-6609
- **Email:** Sarah@bizzybeescleaning.org
- **Services:** Commercial Cleaning, Residential Cleaning, Short-Term Rental / Airbnb Cleaning

---

## 🛠 Tech Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Playfair Display + DM Sans
- **Vercel** — deployment target

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts, nav, footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles, Tailwind directives
│   ├── commercial/
│   │   └── page.tsx         # Commercial Cleaning page
│   ├── residential/
│   │   └── page.tsx         # Residential Cleaning page
│   ├── short-term-rental/
│   │   └── page.tsx         # STR / Airbnb Cleaning page
│   ├── about/
│   │   └── page.tsx         # About / Sarah Felix page
│   └── contact/
│       └── page.tsx         # Contact & Quote Request page
├── components/
│   ├── Navigation.tsx       # Sticky nav with mobile hamburger
│   ├── Footer.tsx           # Full footer with links & contact
│   ├── QuoteCTA.tsx         # Reusable CTA banner (light/dark)
│   ├── ServiceCard.tsx      # Reusable service card
│   ├── HoneycombAccent.tsx  # Decorative SVG honeycomb shape
│   └── QuoteForm.tsx        # Quote request form (client component)
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/bizzy-bees-cleaning.git
cd bizzy-bees-cleaning

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Your site will be live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts to link your project
# Production deploy:
vercel --prod
```

### Custom Domain (bizzybeescleaning.org)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `bizzybeescleaning.org` and `www.bizzybeescleaning.org`
3. Update DNS at your domain registrar to point to Vercel's nameservers (shown in dashboard)

---

## 📝 Content Updates

### Contact Information
Edit in `src/components/Footer.tsx` and `src/app/contact/page.tsx`:
- Phone: `503-752-6609`
- Email: `Sarah@bizzybeescleaning.org`

### Form Handling
The quote form in `src/components/QuoteForm.tsx` currently has a placeholder `handleSubmit`. To go live, integrate one of:

**Option A — Formspree** (easiest, free tier available)
```typescript
// Replace the handleSubmit function body with:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
});
```

**Option B — Resend + Email API**  
See [resend.com](https://resend.com) for transactional email integration.

**Option C — Netlify Forms / Vercel Edge Functions**  
Add `data-netlify="true"` to the form or create an `/api/quote` route handler.

### Testimonials
The testimonials section on the home page shows a placeholder. When you have real testimonials, replace the placeholder in `src/app/page.tsx` in the `TESTIMONIALS PLACEHOLDER` section.

### Owner Photo
On the About page (`src/app/about/page.tsx`), replace the placeholder div with:
```tsx
import Image from "next/image";
<Image
  src="/sarah-felix.jpg"
  alt="Sarah Felix, owner of Bizzy Bees Cleaning"
  width={400}
  height={400}
  className="rounded-3xl object-cover"
/>
```
Place the photo at `public/sarah-felix.jpg`.

---

## 🎨 Design System

### Colors
```
Honey Yellow:    #F5C842  (primary accent)
Honey Gold:      #D4A017  (deeper accent)
Charcoal:        #2C2C2C  (headings, dark text)
Cream:           #FAF8F4  (page background)
Warm Gray:       #F2F0EC  (cards, sections)
Oregon Green:    #4A7C59  (local/nature accent)
```

### Fonts
- **Display:** Playfair Display (headings) — `font-display`
- **Body:** DM Sans (body text) — `font-body`

---

## 🔧 Build

```bash
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # ESLint check
```

---

## 📞 Support

Questions? Contact Sarah Felix:  
📧 Sarah@bizzybeescleaning.org  
📞 503-752-6609
