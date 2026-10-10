/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface CountryItem {
  name: string;
  code: string;
  lang: string;
  dialCode: string;
  isBadge?: boolean;
}

const COUNTRIES: CountryItem[] = [
  { name: 'United Kingdom', code: 'GB', lang: 'en', dialCode: '+44' },
  { name: 'United States', code: 'US', lang: 'en', dialCode: '+1' },
  { name: 'Nigeria', code: 'NG', lang: 'en', dialCode: '+234' },
  { name: 'Ghana', code: 'GH', lang: 'en', dialCode: '+233' },
  { name: 'South Africa', code: 'ZA', lang: 'en', dialCode: '+27' },
  { name: 'Kenya', code: 'KE', lang: 'en', dialCode: '+254' },
  { name: 'Canada', code: 'CA', lang: 'en', dialCode: '+1' },
  { name: 'Germany', code: 'DE', lang: 'de', dialCode: '+49' },
  { name: 'France', code: 'FR', lang: 'fr', dialCode: '+33' },
  { name: 'Spain', code: 'ES', lang: 'es', dialCode: '+34' },
  { name: 'Italy', code: 'IT', lang: 'en', dialCode: '+39' },
  { name: 'Portugal', code: 'PT', lang: 'pt', dialCode: '+351' },
  { name: 'Netherlands', code: 'NL', lang: 'en', dialCode: '+31' },
  { name: 'Belgium', code: 'BE', lang: 'fr', dialCode: '+32' },
  { name: 'Switzerland', code: 'CH', lang: 'de', dialCode: '+41' },
  { name: 'Austria', code: 'AT', lang: 'de', dialCode: '+43' },
  { name: 'Sweden', code: 'SE', lang: 'en', dialCode: '+46' },
  { name: 'Norway', code: 'NO', lang: 'en', dialCode: '+47' },
  { name: 'Denmark', code: 'DK', lang: 'en', dialCode: '+45' },
  { name: 'Finland', code: 'FI', lang: 'en', dialCode: '+358' },
  { name: 'Ireland', code: 'IE', lang: 'en', dialCode: '+353' },
  { name: 'Poland', code: 'PL', lang: 'en', dialCode: '+48' },
  { name: 'Ukraine', code: 'UA', lang: 'uk', dialCode: '+380' },
  { name: 'Romania', code: 'RO', lang: 'en', dialCode: '+40' },
  { name: 'Greece', code: 'GR', lang: 'en', dialCode: '+30' },
  { name: 'Turkey', code: 'TR', lang: 'en', dialCode: '+90' },
  { name: 'Egypt', code: 'EG', lang: 'ar', dialCode: '+20', isBadge: true },
  { name: 'Morocco', code: 'MA', lang: 'ar', dialCode: '+212', isBadge: true },
  { name: 'Algeria', code: 'DZ', lang: 'ar', dialCode: '+213', isBadge: true },
  { name: 'Tunisia', code: 'TN', lang: 'ar', dialCode: '+216', isBadge: true },
  { name: 'Senegal', code: 'SN', lang: 'fr', dialCode: '+221' },
  { name: 'Ivory Coast', code: 'CI', lang: 'fr', dialCode: '+225' },
  { name: 'Cameroon', code: 'CM', lang: 'fr', dialCode: '+237' },
  { name: 'Ethiopia', code: 'ET', lang: 'en', dialCode: '+251' },
  { name: 'Uganda', code: 'UG', lang: 'en', dialCode: '+256' },
  { name: 'Tanzania', code: 'TZ', lang: 'en', dialCode: '+255' },
  { name: 'Rwanda', code: 'RW', lang: 'en', dialCode: '+250' },
  { name: 'Zimbabwe', code: 'ZW', lang: 'en', dialCode: '+263' },
  { name: 'Zambia', code: 'ZM', lang: 'en', dialCode: '+260' },
  { name: 'India', code: 'IN', lang: 'en', dialCode: '+91' },
  { name: 'Pakistan', code: 'PK', lang: 'en', dialCode: '+92' },
  { name: 'Bangladesh', code: 'BD', lang: 'en', dialCode: '+880' },
  { name: 'UAE', code: 'AE', lang: 'ar', dialCode: '+971', isBadge: true },
  { name: 'Saudi Arabia', code: 'SA', lang: 'ar', dialCode: '+966', isBadge: true },
  { name: 'Qatar', code: 'QA', lang: 'ar', dialCode: '+974', isBadge: true },
  { name: 'Kuwait', code: 'KW', lang: 'ar', dialCode: '+965', isBadge: true },
  { name: 'Oman', code: 'OM', lang: 'ar', dialCode: '+968', isBadge: true },
  { name: 'Brazil', code: 'BR', lang: 'pt', dialCode: '+55' },
  { name: 'Mexico', code: 'MX', lang: 'es', dialCode: '+52' },
  { name: 'Colombia', code: 'CO', lang: 'es', dialCode: '+57' },
  { name: 'Argentina', code: 'AR', lang: 'es', dialCode: '+54' },
  { name: 'Australia', code: 'AU', lang: 'en', dialCode: '+61' },
  { name: 'New Zealand', code: 'NZ', lang: 'en', dialCode: '+64' },
  { name: 'Japan', code: 'JP', lang: 'en', dialCode: '+81' },
  { name: 'South Korea', code: 'KR', lang: 'en', dialCode: '+82' },
  { name: 'China', code: 'CN', lang: 'en', dialCode: '+86' }
];

interface DestinationOption {
  code: string;
  name: string;
  dialCode: string;
  rate: number;
}

const DESTINATION_RATES: DestinationOption[] = [
  { code: 'NG', name: 'Nigeria', dialCode: '+234', rate: 0.08 },
  { code: 'GH', name: 'Ghana', dialCode: '+233', rate: 0.14 },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', rate: 0.09 },
  { code: 'KE', name: 'Kenya', dialCode: '+254', rate: 0.12 },
  { code: 'US', name: 'United States', dialCode: '+1', rate: 0.03 },
  { code: 'CA', name: 'Canada', dialCode: '+1', rate: 0.03 },
  { code: 'DE', name: 'Germany', dialCode: '+49', rate: 0.05 },
  { code: 'IN', name: 'India', dialCode: '+91', rate: 0.03 }
];

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    nav_about: 'About us',
    nav_services: 'Our Services',
    nav_sim: 'eSIM & SIM',
    nav_rates: 'Rates',
    nav_partners: 'Partners',
    contact_us: 'Contact us',
    hero_badge: 'WELCOME TO JETRING',
    hero_title: 'Affordable<br>International Calling',
    hero_desc: 'JetRing provides reliable global communication solutions connecting the UK, Africa and worldwide destinations through modern telecom technology.',
    hero_btn_start: 'Start Calling',
    hero_btn_more: 'Our Services',
    m_uptime: 'Uptime',
    m_countries: 'Countries',
    m_support: 'Support',
    m_latency: 'Latency',
    about_tag: 'UK-BASED TELECOM PROVIDER',
    why_title: 'Why Choose JetRing',
    why_sub: 'JetRing is a UK-based telecommunications company focused on making international communication simple and affordable. We provide reliable calling services and digital connectivity solutions designed to connect people and businesses across global markets.',
    hl_rates: 'Affordable international call rates',
    hl_tech: 'Reliable telecom technology',
    hl_secure: 'Secure global communication',
    hl_uk: 'UK-based telecommunications company',
    serv_tag: 'SOLUTIONS',
    serv_title: 'Our Services',
    srv1_h: 'International Calling',
    srv1_p: 'Affordable global calling solutions connecting the UK to Africa and international destinations with crystal-clear voice fidelity.',
    srv2_h: 'VoIP Communication',
    srv2_p: 'Internet-based calling services designed for clear and reliable global communication, tailored for high-volume modern callers.',
    srv3_h: 'Telecom Partnerships',
    srv3_p: 'Collaborating with telecom providers and technology partners to expand global connectivity and direct enterprise route access.',
    srv_btn: 'View Call Rates',
    srv3_btn: 'Partner with us',
    sim_tag: 'MOBILE CONNECTIVITY',
    sim_title: 'SIM & eSIM Connectivity',
    sim_sub: 'JetRing provides flexible SIM and eSIM connectivity solutions designed to keep you connected wherever you are. Our services allow individuals and businesses to access reliable mobile connectivity without the limitations of traditional telecom services.',
    esim_h: 'eSIM Technology',
    esim_p: 'Activate mobile connectivity instantly with digital eSIM technology. No physical SIM card required.',
    isim_h: 'International SIM',
    isim_p: 'Stay connected across multiple countries with international SIM options for global travellers.',
    plan_h: 'Flexible Data Plans',
    plan_p: 'Choose from a range of affordable voice and data plans designed to suit your exact needs.',
    act_h: 'Easy Activation',
    act_p: 'Get started quickly with simple activation and fast setup in minutes right from your device.',
    calc_badge: 'RATES CALCULATOR',
    calc_h: 'Calculate Your Global Call Rate',
    calc_sub: 'JetRing connects you with competitive per-minute rates. Select your destination country to estimate call rates instantly.',
    qr_title: 'Direct UK Routing',
    qr_sub: 'Crystal-clear telecom lines with no lag',
    contact_rate: 'Get Started',
    cs_badge: 'COMING SOON',
    cs_title: 'JetRing Calling App',
    cs_desc: 'Our mobile calling app will allow users to make affordable international calls directly from their smartphones. Stay connected with friends and family worldwide with low calling rates.',
    part_badge: 'GLOBAL INFRASTRUCTURE',
    part_title: 'Partners & Technology',
    part_sub: 'JetRing works with international telecom partners and communication technology providers to deliver reliable and affordable global calling services.',
    tech1_h: 'Carrier Grade Telephony',
    tech1_p: 'High-throughput circuits guarantee low latency and zero line interruptions across continents.',
    tech2_h: 'Global Satellite & Fiber Hubs',
    tech2_p: 'Interconnected routing hubs across the UK, Africa, Europe, and the Americas.',
    f_quick: 'Quick links',
    f_home: 'Home',
    f_about: 'About Us',
    f_contact: 'Contact Us',
    f_serv: 'Our Services',
    f_privacy: 'Privacy Policy',
    f_services_t: 'Services',
    f_touch: 'Get in touch'
  },
  fr: {
    nav_about: 'À propos',
    nav_services: 'Nos Services',
    nav_sim: 'eSIM & SIM',
    nav_rates: 'Tarifs',
    nav_partners: 'Partenaires',
    contact_us: 'Contactez-nous',
    hero_badge: 'BIENVENUE CHEZ JETRING',
    hero_title: 'Appels Internationaux<br>Abordables',
    hero_desc: 'JetRing fournit des solutions fiables reliant le Royaume-Uni, l\'Afrique et le monde entier grâce aux technologies télécoms modernes.',
    hero_btn_start: 'Commencer à appeler',
    hero_btn_more: 'Nos Services',
    m_uptime: 'Disponibilité',
    m_countries: 'Pays',
    m_support: 'Support',
    m_latency: 'Latence',
    about_tag: 'FOURNISSEUR TÉLÉCOM BRITANNIQUE',
    why_title: 'Pourquoi choisir JetRing',
    why_sub: 'JetRing est une société de télécommunications britannique dédiée à la simplification et à l\'accessibilité des communications internationales.',
    hl_rates: 'Tarifs d\'appels internationaux abordables',
    hl_tech: 'Technologie télécom fiable',
    hl_secure: 'Communication mondiale sécurisée',
    hl_uk: 'Entreprise de télécommunications basée au Royaume-Uni',
    serv_tag: 'SOLUTIONS',
    serv_title: 'Nos Services',
    srv1_h: 'Appels Internationaux',
    srv1_p: 'Solutions d\'appels reliant le Royaume-Uni à l\'Afrique et au monde avec une clarté vocale optimale.',
    srv2_h: 'Communication VoIP',
    srv2_p: 'Services d\'appels par Internet conçus pour une communication fluide et économique.',
    srv3_h: 'Partenariats Télécoms',
    srv3_p: 'Collaboration avec les opérateurs pour étendre la couverture mondiale et l\'accès direct aux réseaux.',
    srv_btn: 'Voir les tarifs',
    srv3_btn: 'Devenir partenaire',
    sim_tag: 'CONNECTIVITÉ MOBILE',
    sim_title: 'Connectivité SIM & eSIM',
    sim_sub: 'JetRing propose des solutions SIM et eSIM flexibles pour rester connecté partout sans les contraintes habituelles.',
    esim_h: 'Technologie eSIM',
    esim_p: 'Activez votre ligne mobile instantanément sans carte SIM physique.',
    isim_h: 'SIM Internationale',
    isim_p: 'Restez connecté dans de nombreux pays pour tous vos déplacements.',
    plan_h: 'Forfaits Données Flexibles',
    plan_p: 'Choisissez parmi une gamme de forfaits voix et données adaptés à vos besoins.',
    act_h: 'Activation Facile',
    act_p: 'Prise en main rapide et configuration en quelques minutes.',
    calc_badge: 'CALCULATEUR DE TARIFS',
    calc_h: 'Calculez votre tarif d\'appel',
    calc_sub: 'Profitez de nos tarifs à la minute avantageux vers vos destinations favorites.',
    qr_title: 'Routage direct Royaume-Uni',
    qr_sub: 'Lignes télécoms claires et sans latence',
    contact_rate: 'Commencer',
    cs_badge: 'BIENTÔT DISPONIBLE',
    cs_title: 'Application JetRing Calling',
    cs_desc: 'Passez des appels internationaux économiques directement depuis votre smartphone avec notre application mobile.',
    part_badge: 'INFRASTRUCTURE MONDIALE',
    part_title: 'Partenaires & Technologie',
    part_sub: 'Nous collaborons avec les acteurs majeurs des télécoms pour assurer une excellente qualité d\'appel.',
    tech1_h: 'Téléphonie de niveau opérateur',
    tech1_p: 'Des circuits haute capacité garantissant une continuité de service irréprochable.',
    tech2_h: 'Liaisons Satellites & Fibre',
    tech2_p: 'Réseau interconnecté à travers le Royaume-Uni, l\'Afrique et l\'Europe.',
    f_quick: 'Liens rapides',
    f_home: 'Accueil',
    f_about: 'À propos',
    f_contact: 'Contact',
    f_serv: 'Nos Services',
    f_privacy: 'Confidentialité',
    f_services_t: 'Services',
    f_touch: 'Contactez-nous'
  }
};

export default function App() {
  // Dropdown & Language state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLabel, setCurrentLabel] = useState('Any | EN');
  const [currentLang, setCurrentLang] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Calculator state
  const [fromCountry, setFromCountry] = useState('GB');
  const [toCountry, setToCountry] = useState('NG');
  const [minutes, setMinutes] = useState(60);

  const selectedDestination = DESTINATION_RATES.find(d => d.code === toCountry) || DESTINATION_RATES[0];
  const rate = selectedDestination.rate;
  const totalCost = (rate * minutes).toFixed(2);

  // Helper translation function
  const t = (key: string, defaultText: string = '') => {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
    return dict[key] || TRANSLATIONS['en'][key] || defaultText;
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
    }
  }, [isDropdownOpen]);

  // Handle country selection
  const handleSelectCountry = (country: CountryItem) => {
    setCurrentLabel(`${country.code} | ${(country.lang || 'en').toUpperCase()}`);
    if (country.lang === 'ar') {
      setCurrentLang('en'); // fallback text with arabic indicator
    } else if (TRANSLATIONS[country.lang]) {
      setCurrentLang(country.lang);
    } else {
      setCurrentLang('en');
    }
    setIsDropdownOpen(false);
    setSearchQuery('');
  };

  const filteredCountries = COUNTRIES.filter(c =>
    `${c.name} ${c.code} ${c.dialCode}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="t360-page">
      {/* TOP UTILITY CONTACT BAR */}
      <div className="jr-topbar">
        <div className="t360-container jr-topbar-inner">
          <div className="jr-topbar-contact">
            <a href="tel:+447356068894">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +44 7356 068894
            </a>
            <a href="mailto:hello@jetring.co.uk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@jetring.co.uk
            </a>
          </div>
          <div className="jr-topbar-right">
            <span className="jr-uk-tag">Trusted UK Provider</span>
            <div className="jr-topbar-socials">
              <a href="#" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 1. HEADER & 50+ COUNTRY SWITCHER */}
      <header className="t360-header">
        <div className="t360-container t360-header-inner">
          <a href="#" className="jr-logo" aria-label="JetRing Home">
            <img src="https://jetring.co.uk/wp-content/uploads/2026/03/4b322074-8931-40ea-9507-193b33014269.jpg" alt="JetRing Logo" className="jr-logo-img" />
          </a>

          <nav className="t360-nav">
            <a href="about.html">{t('nav_about', 'About us')}</a>
            <a href="services.html">{t('nav_services', 'Our Services')}</a>
            <a href="#sim">{t('nav_sim', 'eSIM & SIM')}</a>
            <a href="#rates">{t('nav_rates', 'Rates')}</a>
            <a href="#partners">{t('nav_partners', 'Partners')}</a>
          </nav>

          <div className="t360-header-actions">
            <a href="#contact" className="t360-help-link">{t('contact_us', 'Contact us')}</a>

            {/* JetRing 50+ Country Dropdown */}
            <div className={`t360-lang-wrapper ${isDropdownOpen ? 'active' : ''}`} ref={dropdownRef}>
              <button
                type="button"
                className="t360-lang-btn"
                id="langToggleBtn"
                aria-label="Select Country and Language"
                onClick={() => setIsDropdownOpen(prev => !prev)}
              >
                <span className="lang-globe">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <span className="lang-label">{currentLabel}</span>
                <svg className="lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className="t360-lang-menu">
                {/* Search bar for 50+ countries */}
                <div className="jr-search-box">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search 50+ destinations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="menu-section-title">Global Destinations (50+)</div>
                <ul className="lang-list">
                  {filteredCountries.map((c) => (
                    <li key={c.code}>
                      <button
                        type="button"
                        className="lang-option"
                        onClick={() => handleSelectCountry(c)}
                      >
                        {c.isBadge ? (
                          <span className="badge-circle">{c.code}</span>
                        ) : (
                          <span className={`flag-circle flag-${c.code.toLowerCase()}`} />
                        )}
                        <span>{c.name} ({c.dialCode})</span>
                      </button>
                    </li>
                  ))}
                  {filteredCountries.length === 0 && (
                    <li className="px-3 py-2 text-xs text-slate-400">No destinations found</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION WITH CONTINUOUS SLIDING MOSAIC */}
      <section className="t360-hero">
        <div className="t360-container t360-hero-grid">
          <div className="t360-hero-content">
            <div className="jr-badge">{t('hero_badge', 'WELCOME TO JETRING')}</div>
            <h1
              className="t360-hero-title"
              dangerouslySetInnerHTML={{ __html: t('hero_title', 'Affordable<br>International Calling') }}
            />
            <p className="t360-hero-desc">
              {t('hero_desc', 'JetRing provides reliable global communication solutions connecting the UK, Africa and worldwide destinations through modern telecom technology.')}
            </p>

            <div className="t360-app-buttons">
              <a href="#rates" className="jr-btn-primary">{t('hero_btn_start', 'Start Calling')}</a>
              <a href="#services" className="jr-btn-secondary">{t('hero_btn_more', 'Our Services')}</a>
            </div>

            <div className="t360-metrics">
              <div className="metric-item">
                <div className="metric-value">99.9%</div>
                <div className="metric-label">{t('m_uptime', 'Uptime')}</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">50+</div>
                <div className="metric-label">{t('m_countries', 'Countries')}</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">24/7</div>
                <div className="metric-label">{t('m_support', 'Support')}</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">Low</div>
                <div className="metric-label">{t('m_latency', 'Latency')}</div>
              </div>
            </div>
          </div>

          {/* Right Mosaic Gallery: Infinite Dual-Sliding Animation */}
          <div className="t360-hero-mosaic">
            {/* Left Column: Slowly Slides UPWARDS */}
            <div className="mosaic-col col-up">
              <div className="mosaic-track track-up">
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80')" }} />
                {/* Duplicated loop set for seamless infinite animation */}
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80')" }} />
              </div>
            </div>
            {/* Right Column: Slowly Slides DOWNWARDS */}
            <div className="mosaic-col col-down">
              <div className="mosaic-track track-down">
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80')" }} />
                {/* Duplicated loop set for seamless infinite animation */}
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80')" }} />
                <div className="mosaic-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80')" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE JETRING */}
      <section className="jr-why-section" id="about">
        <div className="t360-container">
          <div className="t360-center-header">
            <div className="jr-sub-badge">{t('about_tag', 'UK-BASED TELECOM PROVIDER')}</div>
            <h2 className="t360-section-title">{t('why_title', 'Why Choose JetRing')}</h2>
            <p className="t360-section-sub">
              {t('why_sub', 'JetRing is a UK-based telecommunications company focused on making international communication simple and affordable. We provide reliable calling services and digital connectivity solutions designed to connect people and businesses across global markets.')}
            </p>
          </div>

          <div className="jr-highlights-grid">
            <div className="jr-highlight-card">
              <div className="jr-icon-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v12M16 10H9.5a2.5 2.5 0 0 0 0 5H14" />
                </svg>
              </div>
              <h4>{t('hl_rates', 'Affordable international call rates')}</h4>
            </div>
            <div className="jr-highlight-card">
              <div className="jr-icon-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <h4>{t('hl_tech', 'Reliable telecom technology')}</h4>
            </div>
            <div className="jr-highlight-card">
              <div className="jr-icon-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>{t('hl_secure', 'Secure global communication')}</h4>
            </div>
            <div className="jr-highlight-card">
              <div className="jr-icon-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="22" x2="9.01" y2="22" />
                  <line x1="15" y1="22" x2="15.01" y2="22" />
                  <line x1="9" y1="6" x2="9.01" y2="6" />
                  <line x1="15" y1="6" x2="15.01" y2="6" />
                </svg>
              </div>
              <h4>{t('hl_uk', 'UK-based telecommunications company')}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES */}
      <section className="t360-reasons" id="services">
        <div className="t360-container">
          <div className="t360-center-header">
            <div className="jr-sub-badge">{t('serv_tag', 'SOLUTIONS')}</div>
            <h2 className="t360-section-title">{t('serv_title', 'Our Services')}</h2>
          </div>

          <div className="t360-reasons-grid">
            <div className="t360-reason-card">
              <div
                className="card-thumb"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80')" }}
              />
              <div className="card-body">
                <h3>{t('srv1_h', 'International Calling')}</h3>
                <p>{t('srv1_p', 'Affordable global calling solutions connecting the UK to Africa and international destinations with crystal-clear voice fidelity.')}</p>
                <a href="#rates" className="jr-card-btn">{t('srv_btn', 'View Call Rates')}</a>
              </div>
            </div>

            <div className="t360-reason-card">
              <div
                className="card-thumb"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80')" }}
              />
              <div className="card-body">
                <h3>{t('srv2_h', 'VoIP Communication')}</h3>
                <p>{t('srv2_p', 'Internet-based calling services designed for clear and reliable global communication, tailored for high-volume modern callers.')}</p>
                <a href="#rates" className="jr-card-btn">{t('srv_btn', 'View Call Rates')}</a>
              </div>
            </div>

            <div className="t360-reason-card">
              <div
                className="card-thumb"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80')" }}
              />
              <div className="card-body">
                <h3>{t('srv3_h', 'Telecom Partnerships')}</h3>
                <p>{t('srv3_p', 'Collaborating with telecom providers and technology partners to expand global connectivity and direct enterprise route access.')}</p>
                <a href="#contact" className="jr-card-btn">{t('srv3_btn', 'Partner with us')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIM & eSIM CONNECTIVITY */}
      <section className="jr-sim-section" id="sim">
        <div className="t360-container">
          <div className="t360-center-header">
            <div className="jr-sub-badge">{t('sim_tag', 'MOBILE CONNECTIVITY')}</div>
            <h2 className="t360-section-title">{t('sim_title', 'SIM & eSIM Connectivity')}</h2>
            <p className="t360-section-sub">
              {t('sim_sub', 'JetRing provides flexible SIM and eSIM connectivity solutions designed to keep you connected wherever you are. Our services allow individuals and businesses to access reliable mobile connectivity without the limitations of traditional telecom services.')}
            </p>
          </div>

          <div className="jr-sim-grid">
            <div className="jr-sim-box">
              <div className="jr-sim-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h4>{t('esim_h', 'eSIM Technology')}</h4>
              <p>{t('esim_p', 'Activate mobile connectivity instantly with digital eSIM technology. No physical SIM card required.')}</p>
            </div>

            <div className="jr-sim-box">
              <div className="jr-sim-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h4>{t('isim_h', 'International SIM')}</h4>
              <p>{t('isim_p', 'Stay connected across multiple countries with international SIM options for global travellers.')}</p>
            </div>

            <div className="jr-sim-box">
              <div className="jr-sim-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <h4>{t('plan_h', 'Flexible Data Plans')}</h4>
              <p>{t('plan_p', 'Choose from a range of affordable voice and data plans designed to suit your exact needs.')}</p>
            </div>

            <div className="jr-sim-box">
              <div className="jr-sim-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h4>{t('act_h', 'Easy Activation')}</h4>
              <p>{t('act_p', 'Get started quickly with simple activation and fast setup in minutes right from your device.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RATE CALCULATOR */}
      <section className="t360-calc-section" id="rates">
        <div className="t360-container">
          <div className="t360-center-header">
            <div className="jr-badge">{t('calc_badge', 'RATES CALCULATOR')}</div>
            <h2 className="t360-section-title">{t('calc_h', 'Calculate Your Global Call Rate')}</h2>
            <p className="t360-section-sub">
              {t('calc_sub', 'JetRing connects you with competitive per-minute rates. Select your destination country to estimate call rates instantly.')}
            </p>
          </div>

          <div className="t360-calc-card">
            <div className="calc-selectors">
              <div className="calc-select-box">
                <span className={`flag-circle flag-${fromCountry.toLowerCase()}`} />
                <select
                  value={fromCountry}
                  onChange={(e) => setFromCountry(e.target.value)}
                  id="calcFromCountry"
                  aria-label="Calling from country"
                >
                  <option value="GB">United Kingdom (+44)</option>
                  <option value="US">United States (+1)</option>
                  <option value="NG">Nigeria (+234)</option>
                </select>
              </div>

              <div className="calc-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="calc-select-box">
                <span className={`flag-circle flag-${toCountry.toLowerCase()}`} id="destFlag" />
                <select
                  value={toCountry}
                  onChange={(e) => setToCountry(e.target.value)}
                  id="calcToCountry"
                  aria-label="Calling to destination country"
                >
                  {DESTINATION_RATES.map((dest) => (
                    <option key={dest.code} value={dest.code}>
                      {dest.name} ({dest.dialCode})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="calc-rate-display">
              <div className="calc-price-wrap">
                <span className="calc-rate-num" id="calcRateNum">£{rate.toFixed(2)}</span>
                <span className="calc-rate-unit"> / min</span>
              </div>
            </div>

            <div className="calc-slider-wrap">
              <div className="slider-labels">
                <span>Talk time: <strong id="sliderMinsLabel">{minutes}</strong> minutes</span>
                <span>Total cost: <strong id="sliderCostLabel">£{totalCost}</strong></span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="10"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                id="calcMinutesSlider"
                className="t360-range"
                aria-label="Talk time slider in minutes"
              />
            </div>

            <div className="calc-footer-banner">
              <div className="calc-qr-box">
                <svg className="qr-svg" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0 0h30v30H0zm6 6h18v18H6zM10 10h10v10H10zm60-10h30v30H70zm6 6h18v18H76zm4 4h10v10H80zM0 70h30v30H0zm6 6h18v18H6zm4 4h10v10H10zm40-70h10v10H50zm10 20h10v10H60zm-20 0h10v20H40zm20 20h20v10H60zm-20 20h10v20H40zm20 10h10v10H60zm20-10h10v30H80zm-10 20h10v10H70z" />
                </svg>
                <div className="qr-info">
                  <strong>{t('qr_title', 'Direct UK Routing')}</strong>
                  <span>{t('qr_sub', 'Crystal-clear telecom lines with no lag')}</span>
                </div>
              </div>

              <div className="calc-app-links">
                <a href="#contact" className="jr-btn-primary small">{t('contact_rate', 'Get Started')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JETRING CALLING APP (YELLOW COMING SOON SECTION WITH 35% SIDE-BY-SIDE BUTTONS) */}
      <section className="jr-app-banner">
        <div className="t360-container jr-banner-inner">
          <div className="jr-banner-visual">
            <div className="jr-mockup-frame">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80"
                alt="JetRing Mobile App Preview"
              />
            </div>
          </div>
          <div className="jr-banner-text">
            <span className="jr-pill-dark">{t('cs_badge', 'COMING SOON')}</span>
            <h2>{t('cs_title', 'JetRing Calling App')}</h2>
            <p>
              {t('cs_desc', 'Our mobile calling app will allow users to make affordable international calls directly from their smartphones. Stay connected with friends and family worldwide with low calling rates.')}
            </p>

            {/* SIDE BY SIDE BUTTONS SCALED TO 35% OF ORIGINAL DIMENSIONS */}
            <div className="jr-app-buttons-35">
              {/* App Store Badge at 35% */}
              <a href="#" className="jr-store-badge-35">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.8c.63-.77 1.06-1.85.94-2.93-1 .04-2.13.67-2.77 1.44-.57.66-1.07 1.74-.93 2.8 1.11.09 2.18-.55 2.76-1.31z" />
                </svg>
                <div className="store-text">
                  <span className="store-small">Download on the</span>
                  <span className="store-large">App Store</span>
                </div>
              </a>

              {/* Google Play Badge at 35% */}
              <a href="#" className="jr-store-badge-35">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 2.2c-.3.3-.4.8-.4 1.4v16.8c0 .6.2 1.1.4 1.4l9.7-9.8L3.6 2.2zm11.1 11.2l2.3-2.3c.6-.6.6-1.6 0-2.2l-2.3-2.3-3 3 3 3.8zm-1.4 1.4l-7.7 7.7c.3.1.7.1 1.2-.1l8.7-5-2.2-2.6zm-2.2-4.4l2.2-2.6-8.7-5c-.5-.3-.9-.2-1.2 0l7.7 7.6z" />
                </svg>
                <div className="store-text">
                  <span className="store-small">GET IT ON</span>
                  <span className="store-large">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PARTNERS & TECHNOLOGY */}
      <section className="t360-dark-section" id="partners">
        <div className="t360-container">
          <div className="t360-center-header light">
            <div className="jr-badge-dark">{t('part_badge', 'GLOBAL INFRASTRUCTURE')}</div>
            <h2 className="t360-section-title">{t('part_title', 'Partners & Technology')}</h2>
            <p className="t360-section-sub">
              {t('part_sub', 'JetRing works with international telecom partners and communication technology providers to deliver reliable and affordable global calling services.')}
            </p>
          </div>

          <div className="jr-tech-grid">
            <div
              className="jr-tech-box"
              style={{
                backgroundImage: "linear-gradient(rgba(11,61,92,0.82), rgba(11,61,92,0.92)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')"
              }}
            >
              <div className="jr-tech-content">
                <h3>{t('tech1_h', 'Carrier Grade Telephony')}</h3>
                <p>{t('tech1_p', 'High-throughput circuits guarantee low latency and zero line interruptions across continents.')}</p>
              </div>
            </div>
            <div
              className="jr-tech-box"
              style={{
                backgroundImage: "linear-gradient(rgba(11,61,92,0.82), rgba(11,61,92,0.92)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80')"
              }}
            >
              <div className="jr-tech-content">
                <h3>{t('tech2_h', 'Global Satellite & Fiber Hubs')}</h3>
                <p>{t('tech2_p', 'Interconnected routing hubs across the UK, Africa, Europe, and the Americas.')}</p>
              </div>
            </div>
          </div>

          <div className="jr-partners-strip">
            <span className="jr-partner-brand">TECHNET</span>
            <span className="jr-partner-brand">GLOBALCOM</span>
            <span className="jr-partner-brand">VODACON</span>
            <span className="jr-partner-brand">UK-TELE</span>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="t360-footer" id="contact">
        <div className="t360-container">
          <div className="t360-footer-top">
            <div className="t360-footer-brand">
              <a href="#" className="jr-logo light" aria-label="JetRing Home">
                <img src="https://jetring.co.uk/wp-content/uploads/2026/03/4b322074-8931-40ea-9507-193b33014269.jpg" alt="JetRing Logo" className="jr-logo-img" />
              </a>
              <p className="brand-desc">
                Reliable global communication powered by modern telecommunications technology.<br /><br />
                <strong>JetRing Solutions Ltd</strong><br />
                United Kingdom Registered with the UK Information Commissioner's Office (ICO)<br />
                Registration Number: <strong>ZC092955</strong>
              </p>
              <div className="t360-socials">
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                  </svg>
                </a>
                <a href="#" aria-label="X / Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="t360-footer-links">
              <div className="footer-col">
                <h4>{t('f_quick', 'Quick links')}</h4>
                <ul>
                  <li><a href="#">{t('f_home', 'Home')}</a></li>
                  <li><a href="about.html">{t('f_about', 'About Us')}</a></li>
                  <li><a href="#contact">{t('f_contact', 'Contact Us')}</a></li>
                  <li><a href="services.html">{t('f_serv', 'Our Services')}</a></li>
                  <li><a href="#">{t('f_privacy', 'Privacy Policy')}</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>{t('f_services_t', 'Services')}</h4>
                <ul>
                  <li><a href="#services">International Calling</a></li>
                  <li><a href="#services">VoIP Communication</a></li>
                  <li><a href="#sim">eSIM Technology</a></li>
                  <li><a href="#sim">International SIM</a></li>
                  <li><a href="#rates">Check Rates</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>{t('f_touch', 'Get in touch')}</h4>
                <ul className="jr-contact-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href="mailto:hello@jetring.co.uk">hello@jetring.co.uk</a>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:+447356068894">+44 7356 068894</a>
                  </li>
                  <li className="jr-address">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>71-75 Shelton Street, Covent Garden, London WC2H 9JQ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="t360-footer-bottom">
            <div className="copyright">© 2026 JetRing Solutions Ltd. All rights reserved.</div>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
