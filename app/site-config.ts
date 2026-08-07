export const siteConfig = {
  template: {
    version: "1.0.0",
    citySlug: "san-pedro",
    leadPath: "/woning-aanmelden/",
    thankYouPath: "/bedankt/",
    sourceWebsite: "verhuurbeheersanpedro.nl",
  },
  brand: {
    name: "Verhuurbeheer San Pedro de Alcántara",
    legalName: "Verhuurbeheer Spanje",
    parentUrl: "https://www.verhuurbeheerspanje.nl/",
  },
  location: {
    city: "San Pedro de Alcántara",
    region: "Costa del Sol",
    language: "nl-NL",
    areas: [
      "San Pedro centrum",
      "Nueva Alcántara",
      "Cortijo Blanco",
      "Guadalmina",
      "Guadalmina Baja",
      "Linda Vista",
      "Marbella west",
      "Puerto Banús",
      "Nueva Andalucía",
    ],
  },
  assets: {
    logo: "/vbs-logo-san-pedro.png",
    hero: "/san-pedro-hero.webp",
    social: "/luxe-woning-san-pedro-zeezicht.webp",
    signup: "/zonnig-terras-zeezicht-san-pedro.webp",
  },
  domain: "https://verhuurbeheersanpedro.nl",
  contact: {
    email: "contact@verhuurbeheerspanje.nl",
    whatsapp: "31852128105",
  },
  pricing: {
    holidayRental: "Vanaf 18%",
    midterm: "Eenmalig 1 maand huur",
    longterm: "Eenmalig 1 maand huur",
  },
  social: {
    instagram: "https://www.instagram.com/verhuurbeheer_spanje/",
    facebook: "https://www.facebook.com/verhuurbeheerspanje/",
  },
  seo: {
    title: "Verhuurbeheer San Pedro de Alcántara | Voor Nederlandse eigenaren",
    description:
      "Fullservice verhuurbeheer in San Pedro de Alcántara voor Nederlandse eigenaren. Vakantieverhuur vanaf 18%, midterm, langetermijn en lokaal vastgoedbeheer.",
    primaryKeywords: [
      "verhuurbeheer San Pedro de Alcántara",
      "vakantieverhuurbeheer San Pedro de Alcántara",
      "vastgoedbeheer San Pedro de Alcántara",
      "woningbeheer San Pedro de Alcántara",
      "vakantiewoning verhuren San Pedro de Alcántara",
      "Airbnb beheer San Pedro de Alcántara",
      "verhuurlicentie San Pedro de Alcántara",
      "appartement verhuren San Pedro de Alcántara",
      "villa verhuren San Pedro de Alcántara",
    ],
    longTailKeywords: [
      "Nederlandstalig verhuurbeheer voor woningeigenaren in San Pedro de Alcántara",
      "vakantiewoning professioneel laten verhuren in San Pedro de Alcántara",
      "Airbnb en Booking beheer voor appartement in San Pedro de Alcántara",
      "fullservice vakantieverhuurbeheer aan de Costa del Sol",
      "lokaal vastgoedbeheer voor tweede woning in San Pedro de Alcántara",
      "villa verhuren met beheer in San Pedro de Alcántara",
    ],
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "G-V461988EJ0",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const leadHref = siteConfig.template.leadPath;
export const leadSubject = (context = "woningaanmelding") =>
  `Nieuwe ${context} via ${siteConfig.brand.name}`;
export const whatsappHref = (
  message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`,
) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
