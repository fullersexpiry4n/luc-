import type { ServiceSlug } from "@/lib/services";

export interface PageMeta {
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface PriceRow {
  name: string;
  price: string;
  note?: string;
}

export interface QA {
  q: string;
  a: string;
}

export interface Step {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceCopy {
  title: string;
  short: string;
}

export interface ServiceDetailCopy {
  meta: PageMeta;
  hero: {
    tag: string;
    title: string;
    subtitle: string;
  };
  intro: string[];
  included: {
    title: string;
    items: string[];
  };
  details: {
    title: string;
    turnaroundLabel: string;
    turnaround: string;
    materialsLabel: string;
    materials: string;
    guaranteeLabel: string;
    guarantee: string;
  };
  steps: {
    title: string;
    items: [Step, Step, Step];
  };
  pricingTitle: string;
  pricingSubtitle: string;
  faq: {
    title: string;
    items: QA[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export interface Dictionary {
  meta: {
    home: PageMeta;
  };
  nav: {
    services: string;
    prices: string;
    faq: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    menuTitle: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    imageAlt: string;
    floating: string[];
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: Record<ServiceSlug, ServiceCopy>;
  };
  stats: {
    tag: string;
    title: string;
    subtitle: string;
    items: StatItem[];
  };
  pricing: {
    tag: string;
    title: string;
    subtitle: string;
    fromLabel: string;
    disclaimer: string;
    services: {
      slug: ServiceSlug;
      label: string;
      rows: PriceRow[];
    }[];
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    items: QA[];
  };
  location: {
    tag: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    hoursTitle: string;
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
    directions: string;
    mapTitle: string;
    days: string[];
    hours: string[];
    closedLabel: string;
  };
  form: {
    tag: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    service: string;
    servicePlaceholder: string;
    serviceOptions: { value: string; label: string }[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    privacy: string;
    success: {
      title: string;
      message: string;
      again: string;
    };
    errorToast: string;
    errors: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    };
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    contactTitle: string;
    hoursTitle: string;
    languageTitle: string;
    rights: string;
    disclaimer: string;
    backToTop: string;
  };
  serviceDetail: {
    breadcrumbHome: string;
    breadcrumbServices: string;
    includedDefaultTitle: string;
    stepsDefaultTitle: string;
    items: Record<ServiceSlug, ServiceDetailCopy>;
  };
}
