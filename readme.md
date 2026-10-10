# JetRing - Affordable International Calling & Telecom Solutions

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**JetRing Solutions Ltd** is a UK-based telecommunications provider delivering crystal-clear, low-latency global voice and digital connectivity solutions. JetRing connects callers in the United Kingdom, Africa, Europe, North America, and worldwide destinations with transparent per-minute calling rates and instant eSIM connectivity.

---

## 🌟 Key Features

- **Crystal-Clear International Calling**: Direct UK routing lines engineered for ultra-low latency, zero dropouts, and premium carrier-grade voice fidelity.
- **Global Rates Calculator**: Interactive, per-minute destination calculator supporting dozens of popular calling corridors (Nigeria, Ghana, Kenya, South Africa, US, Canada, Germany, India, and more).
- **50+ Country & Language Selector**: Dynamic locale switcher providing tailored dialing codes, currency options, and localized copy in English, French, Arabic, German, Spanish, and Portuguese.
- **eSIM & Digital SIM Provisioning**: Fast, instant activation of mobile data plans for frequent travelers and remote workforces without requiring physical SIM swap.
- **Carrier-Grade Telephony & VoIP Core**: High-throughput routing hubs across the UK, Africa, Europe, and the Americas.
- **Fully Responsive & Accessible UI**: Clean, high-contrast interface designed in JetRing Navy (`#0B3D5C`) and Golden Yellow (`#FED201`), optimized for desktops, tablets, and smartphones.
- **Official Brand Favicon & Meta Tags**: Pre-configured social sharing cards, SEO metadata, and brand logo favicon across all site pages.

---

## 📄 Site Pages & Structure

| Route | Page | Purpose |
|---|---|---|
| `/` or `index.html` | **Home Page** | Hero section, rates calculator, highlights, eSIM overview, and partner network. |
| `about.html` | **About JetRing** | Company background, ICO compliance, infrastructure overview, and core values. |
| `services.html` / `our-services.html` | **Our Services** | In-depth breakdown of International Calling, VoIP Systems, and Carrier Partnerships. |
| `contact.html` / `contact-us.html` | **Contact Us** | Support desk, corporate inquiries, callback requests, and office details. |

---

## 🛠️ Technology Stack

- **Bundler & Build Tool:** [Vite](https://vitejs.dev/)
- **UI Library & Runtime:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with Plus Jakarta Sans typography
- **Icons & Motion:** [Lucide React](https://lucide.dev/), [Motion](https://motion.dev/)
- **Server:** Node.js Express server (`server.ts`) with production static asset serving

---

## 📁 Project Directory

```text
├── public/                     # Static assets served at root
│   ├── favicon.ico             # Site logo favicon (.ico)
│   ├── favicon.jpg             # Site logo favicon (.jpg)
│   └── logo.jpg                # JetRing official brand logo
├── src/
│   ├── App.tsx                 # Core interactive application logic & rate calculation
│   ├── index.css               # Global Tailwind CSS and JetRing design system
│   └── main.tsx                # Client bootstrap entry point
├── index.html                  # Landing page & rates calculator
├── about.html                  # About Us page
├── services.html               # Telecom & VoIP services page
├── our-services.html           # Services alternate alias
├── contact.html                # Contact & inquiries page
├── contact-us.html             # Contact alternate alias
├── metadata.json               # AI Studio project descriptor
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Multi-page Vite configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18+ or 20+) installed.

### 2. Installation
Install project dependencies:
```bash
npm install
```

### 3. Local Development Server
Launch the development server on `http://localhost:3000`:
```bash
npm run dev
```

### 4. Production Build
Compile and bundle all multi-page HTML inputs and TypeScript assets:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🎨 Branding & Visual Identity

- **Primary Navy:** `#0B3D5C`
- **Dark Navy:** `#07263B`
- **Accent Yellow:** `#FED201`
- **Hover Yellow:** `#E5BE01`
- **Soft Background:** `#F8FAFC`
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 🏢 Company & Legal Information

- **Company:** JetRing Solutions Ltd
- **Jurisdiction:** United Kingdom
- **Regulatory Registration:** Registered with the UK Information Commissioner's Office (ICO)
- **Official Website:** [https://jetring.co.uk](https://jetring.co.uk)
