import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentBySlug, contentPages } from "../content";
import { CookiePreferencesButton } from "../CookieConsent";
import { CheckCircle2, Facebook, Instagram, Mail } from "lucide-react";
import { absoluteUrl, emailHref, leadFormAction, leadHref, leadSubject, siteConfig, whatsappHref } from "../site-config";
import { FormSubmit } from "../FormSubmit";
import { BrandLockup } from "../BrandLockup";

const seoH1BySlug: Record<string, string> = {
  "vakantieverhuur-san-pedro": "Vakantieverhuur in San Pedro de Alcántara vanaf 18%",
  "midterm-verhuur-san-pedro": "Midterm verhuur in San Pedro de Alcántara",
  "langetermijnverhuur-san-pedro": "Langetermijnverhuur in San Pedro de Alcántara",
  "vastgoedbeheer-san-pedro": "Vastgoedbeheer in San Pedro de Alcántara",
  "schoonmaak-onderhoud-san-pedro": "Schoonmaak en onderhoud in San Pedro de Alcántara",
  "renovatie-inrichting-san-pedro": "Renovatie en inrichting in San Pedro de Alcántara",
  "kosten-verhuurbeheer-san-pedro": "Wat kost verhuurbeheer in San Pedro de Alcántara?",
  "dynamische-prijzen-vakantiewoning":
    "Dynamische prijzen voor een vakantiewoning in San Pedro de Alcántara",
  "zelf-verhuren-of-verhuurbeheer":
    "Zelf verhuren of verhuurbeheer in San Pedro de Alcántara?",
  "verhuurlicentie-san-pedro":
    "Verhuurlicentie in San Pedro de Alcántara aanvragen en controleren",
  "over-ons": "Over Verhuurbeheer San Pedro de Alcántara",
  werkwijze: "Werkwijze voor verhuurbeheer in San Pedro de Alcántara",
  contact: "Contact met Verhuurbeheer San Pedro de Alcántara",
  "woning-aanmelden": "Woning aanmelden voor verhuurbeheer in San Pedro de Alcántara",
  blog: "Blogs over verhuurbeheer in San Pedro de Alcántara",
};

const team = [
  {
    name: "Martijn",
    role: "Relatiemanager",
    languages: "NL · EN · ES",
    image: "/martijn-verhuurbeheer-san-pedro.webp",
    alt: "Martijn, relatiemanager bij Verhuurbeheer Spanje aan de Costa del Sol",
  },
  {
    name: "Geert",
    role: "Manager Bouw",
    languages: "NL · EN",
    image: "/geert-vastgoedbeheer-san-pedro.webp",
    alt: "Geert, manager bouw en vastgoedbeheer bij Verhuurbeheer Spanje",
  },
  {
    name: "Sophie",
    role: "Backoffice",
    languages: "NL · EN · ES",
    image: "/sophie-san-pedro.webp",
    alt: "Sophie, Nederlandstalig aanspreekpunt en backoffice bij Verhuurbeheer Spanje",
  },
  {
    name: "Päivi",
    role: "Administratie",
    languages: "NL · EN · FI",
    image: "/paivi-administratie-verhuurbeheer.webp",
    alt: "Päivi van de administratie van Verhuurbeheer Spanje",
  },
  {
    name: "Joachim",
    role: "Marketing",
    languages: "EN · DA",
    image: "/joachim-marketing-verhuurbeheer.webp",
    alt: "Joachim van het marketingteam van Verhuurbeheer Spanje",
  },
  {
    name: "Leon",
    role: "Ambassadeur",
    languages: "NL · EN",
    image: "/leon-ambassadeur-verhuurbeheer.webp",
    alt: "Leon, ambassadeur van Verhuurbeheer Spanje aan de Costa del Sol",
  },
  {
    name: "Jacob",
    role: "Tax & Legal",
    languages: "ES · EN",
    image: "/jacob-tax-legal-verhuurbeheer.webp",
    alt: "Jacob van Tax & Legal bij Verhuurbeheer Spanje",
  },
];

export function generateStaticParams() {
  return contentPages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = contentBySlug[slug];
  if (!p) return {};
  return {
    title: { absolute: p.seoTitle },
    description: p.description,
    keywords: [...siteConfig.seo.primaryKeywords, ...siteConfig.seo.longTailKeywords],
    alternates: { canonical: `/${p.slug}/` },
    authors: [
      {
        name: siteConfig.brand.legalName,
        url: siteConfig.brand.parentUrl,
      },
    ],
    openGraph: {
      title: p.seoTitle,
      description: p.description,
      type: p.type === "gids" ? "article" : "website",
      url: `/${p.slug}/`,
      siteName: siteConfig.brand.name,
      locale: "nl_NL",
      images: [
        {
          url: "/san-pedro-hero.webp",
          width: 1586,
          height: 992,
          alt: `${p.title} aan de Costa del Sol`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: p.seoTitle,
      description: p.description,
      images: ["/san-pedro-hero.webp"],
    },
  };
}

const relatedBySlug: Record<string, string[]> = {
  "vakantieverhuur-san-pedro": [
    "verhuurlicentie-san-pedro",
    "kosten-verhuurbeheer-san-pedro",
    "dynamische-prijzen-vakantiewoning",
  ],
  "vastgoedbeheer-san-pedro": [
    "schoonmaak-onderhoud-san-pedro",
    "vakantieverhuur-san-pedro",
    "zelf-verhuren-of-verhuurbeheer",
  ],
  "midterm-verhuur-san-pedro": [
    "langetermijnverhuur-san-pedro",
    "vastgoedbeheer-san-pedro",
    "kosten-verhuurbeheer-san-pedro",
  ],
  "langetermijnverhuur-san-pedro": [
    "midterm-verhuur-san-pedro",
    "vastgoedbeheer-san-pedro",
    "zelf-verhuren-of-verhuurbeheer",
  ],
  "verhuurlicentie-san-pedro": [
    "vakantieverhuur-san-pedro",
    "zelf-verhuren-of-verhuurbeheer",
    "kosten-verhuurbeheer-san-pedro",
  ],
  "kosten-verhuurbeheer-san-pedro": [
    "vakantieverhuur-san-pedro",
    "midterm-verhuur-san-pedro",
    "langetermijnverhuur-san-pedro",
  ],
  "dynamische-prijzen-vakantiewoning": [
    "vakantieverhuur-san-pedro",
    "kosten-verhuurbeheer-san-pedro",
    "zelf-verhuren-of-verhuurbeheer",
  ],
};

const contentVisualBySlug: Record<string, { src: string; alt: string }> = {
  "vakantieverhuur-san-pedro": {
    src: "/luxe-woning-san-pedro-zeezicht.webp",
    alt: "Luxe vakantiewoning in San Pedro de Alcántara met lichte woonkamer en uitzicht op zee",
  },
  "midterm-verhuur-san-pedro": {
    src: "/luxe-interieur-san-pedro.webp",
    alt: "Licht ingericht appartement voor seizoens- en midtermverhuur in San Pedro de Alcántara",
  },
  "langetermijnverhuur-san-pedro": {
    src: "/luxe-interieur-san-pedro.webp",
    alt: "Verzorgd interieur van een woning voor langetermijnverhuur in San Pedro de Alcántara",
  },
  "vastgoedbeheer-san-pedro": {
    src: "/villa-zwembad-san-pedro.webp",
    alt: "Zwembad en mediterrane tuin bij een professioneel beheerde villa in San Pedro de Alcántara",
  },
  "schoonmaak-onderhoud-san-pedro": {
    src: "/luxe-interieur-san-pedro.webp",
    alt: "Schoon en verzorgd interieur van een beheerde woning in San Pedro de Alcántara",
  },
  "renovatie-inrichting-san-pedro": {
    src: "/terras-zonsondergang-san-pedro.webp",
    alt: "Luxe terras van een ingerichte woning in San Pedro de Alcántara bij zonsondergang",
  },
  werkwijze: {
    src: "/zonnig-terras-zeezicht-san-pedro.webp",
    alt: "Zonnig terras van een beheerde vakantiewoning in San Pedro de Alcántara met zeezicht",
  },
};

const blogVisualBySlug: Record<
  string,
  { src: string; alt: string; category: string; readTime: string }
> = {
  "kosten-verhuurbeheer-san-pedro": {
    src: "/vastgoed-aan-zee-san-pedro.webp",
    alt: "Woningen aan zee bij San Pedro de Alcántara als illustratie bij de kosten van verhuurbeheer",
    category: "Kosten & tarieven",
    readTime: "4 min",
  },
  "dynamische-prijzen-vakantiewoning": {
    src: "/luxe-woning-san-pedro-zeezicht.webp",
    alt: "Luxe vakantiewoning met zeezicht in San Pedro de Alcántara voor een blog over dynamische prijzen",
    category: "Opbrengst",
    readTime: "4 min",
  },
  "zelf-verhuren-of-verhuurbeheer": {
    src: "/luxe-interieur-san-pedro.webp",
    alt: "Verzorgd interieur van een vakantiewoning bij een blog over zelf verhuren of uitbesteden",
    category: "Keuzehulp",
    readTime: "5 min",
  },
  "verhuurlicentie-san-pedro": {
    src: "/san-pedro-hero.webp",
    alt: "Uitzicht over San Pedro de Alcántara bij informatie over de verhuurlicentie",
    category: "Regelgeving",
    readTime: "6 min",
  },
};

export default async function ContentRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = contentBySlug[slug];
  if (!page) notFound();
  const displayTitle = seoH1BySlug[page.slug] ?? page.title;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  const pageUrl = absoluteUrl(`/${page.slug}/`);
  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.brand.name,
    url: absoluteUrl(),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/vbs-logo-san-pedro.png"),
    },
  };
  const pageSchema =
    page.type === "gids"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.description,
          url: pageUrl,
          mainEntityOfPage: pageUrl,
          image: absoluteUrl(siteConfig.assets.hero),
          inLanguage: "nl-NL",
          datePublished: "2026-08-02",
          dateModified: "2026-08-02",
          author: organization,
          publisher: organization,
        }
      : {
          "@context": "https://schema.org",
          "@type": page.type === "dienst" ? "Service" : "WebPage",
          name: page.title,
          description: page.description,
          url: pageUrl,
          inLanguage: "nl-NL",
          provider: organization,
          areaServed: [
            { "@type": "City", name: siteConfig.location.city },
            ...siteConfig.location.areas.map((name) => ({
              "@type": "Place",
              name,
            })),
          ],
        };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name:
          page.type === "gids"
            ? "Kennisbank"
            : page.type === "dienst"
              ? "Diensten"
              : "Bedrijf",
        item:
          page.type === "gids"
            ? absoluteUrl("/blog/")
            : absoluteUrl(),
      },
      { "@type": "ListItem", position: 3, name: page.title, item: pageUrl },
    ],
  };
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Team Verhuurbeheer Spanje",
    itemListElement: team.map((person, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: person.name,
        jobTitle: person.role,
        worksFor: {
          "@type": "Organization",
          name: siteConfig.brand.legalName,
          url: siteConfig.brand.parentUrl,
        },
        image: absoluteUrl(person.image),
      },
    })),
  };
  const relatedSlugs =
    relatedBySlug[page.slug] ??
    contentPages
      .filter((p) => p.slug !== page.slug && p.type !== "pagina")
      .slice(0, 3)
      .map((p) => p.slug);
  const related = relatedSlugs
    .map((relatedSlug) => contentBySlug[relatedSlug])
    .filter(Boolean);
  const contentVisual = contentVisualBySlug[page.slug];
  const blogArticles = contentPages.filter(
    (article) => article.type === "gids" && blogVisualBySlug[article.slug],
  );
  const featuredBlog = blogArticles[0];
  const trustItems =
    page.slug === "langetermijnverhuur-san-pedro"
      ? [
          <>
            <b>Professionele huurcontracten</b> met duidelijke afspraken
          </>,
          <>
            <b>Borg en eerste maand huur</b> zorgvuldig afgehandeld
          </>,
          <>
            <b>Inventariscontrole</b> bij aanvang en einde huur
          </>,
          <>
            <b>Persoonlijke check-in en check-out</b> bij de woning
          </>,
        ]
      : page.slug === "vastgoedbeheer-san-pedro"
        ? [
            <>
              <b>Maandelijkse woninginspecties</b> met foto’s en terugkoppeling
            </>,
            <>
              <b>Veilig sleutelbeheer</b> en toegang voor leveranciers
            </>,
            <>
              <b>Onderhoudscoördinatie</b> na je akkoord
            </>,
          ]
        : [
            <>
              <b>Airbnb &amp; Booking</b> op je eigen naam
            </>,
            <>
              <b>Vast Nederlandstalig</b> contactpersoon
            </>,
            <>
              <b>5-sterren beheer</b> voor maximale verhuurinkomsten
            </>,
          ];
  return (
    <main className="content-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {page.slug === "over-ons" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
        />
      )}
      <header className="content-header">
        <BrandLockup className="brand" />
        <nav>
          <a href="/">Home</a>
          <details className="services-menu">
            <summary>Diensten</summary>
            <div>
              <a href="/vakantieverhuur-san-pedro/">Vakantieverhuur</a>
              <a href="/midterm-verhuur-san-pedro/">
                Seizoens- en midtermverhuur
              </a>
              <a href="/langetermijnverhuur-san-pedro/">Langetermijnverhuur</a>
              <a href="/vastgoedbeheer-san-pedro/">Vastgoedbeheer</a>
              <a href="/schoonmaak-onderhoud-san-pedro/">
                Schoonmaak & onderhoud
              </a>
              <a href="/renovatie-inrichting-san-pedro/">
                Renovatie & inrichting
              </a>
              <a href="/verhuurlicentie-san-pedro/">Verhuurlicentie</a>
            </div>
          </details>
          <a href="/werkwijze/">Werkwijze</a>
          <a href="/over-ons/">Over ons</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
        </nav>
        <a className="button button-outline header-cta" href={leadHref}>
          Woning aanmelden
        </a>
        <details className="mobile-menu">
          <summary aria-label="Menu openen">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div>
            <a href="/">Home</a>
            <b>Diensten</b>
            <a href="/vakantieverhuur-san-pedro/">Vakantieverhuur</a>
            <a href="/midterm-verhuur-san-pedro/">Seizoens- en midtermverhuur</a>
            <a href="/langetermijnverhuur-san-pedro/">Langetermijnverhuur</a>
            <a href="/vastgoedbeheer-san-pedro/">Vastgoedbeheer</a>
            <a href="/schoonmaak-onderhoud-san-pedro/">Schoonmaak & onderhoud</a>
            <a href="/renovatie-inrichting-san-pedro/">Renovatie & inrichting</a>
            <a href="/verhuurlicentie-san-pedro/">Verhuurlicentie</a>
            <b>Bedrijf</b>
            <a href="/werkwijze/">Werkwijze</a>
            <a href="/over-ons/">Over ons</a>
            <a href="/blog/">Blog & kennisbank</a>
            <a href="/contact/">Contact</a>
            <a href="/woning-aanmelden/">Woning aanmelden</a>
          </div>
        </details>
      </header>
      <div className="breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <span>
          {page.type === "gids"
            ? "Kennisbank"
            : page.type === "dienst"
              ? "Diensten"
              : "Bedrijf"}
        </span>
        <span>›</span>
        <b>{page.title}</b>
      </div>
      <section className="content-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{displayTitle}</h1>
          <p>{page.intro}</p>
          {page.slug !== "contact" && page.slug !== "woning-aanmelden" && (
            <a className="button button-primary" href="/woning-aanmelden/">
              Bespreek je woning →
            </a>
          )}
        </div>
        <aside>
          <small>{page.price ? "Vanaf-prijs" : "Lokale expertise"}</small>
          <strong>{page.price ?? "San Pedro de Alcántara · Costa del Sol"}</strong>
          <p>
            Nederlandstalig contact en een lokale uitvoering rond je woning.
          </p>
        </aside>
      </section>
      <section
        className={`content-trustbar ${trustItems.length === 4 ? "content-trustbar-four" : ""}`}
        aria-label={`Voordelen van ${page.title}`}
      >
        {trustItems.map((item, index) => (
          <span key={index}>
            <CheckCircle2 aria-hidden="true" />
            {item}
          </span>
        ))}
      </section>
      {page.slug === "woning-aanmelden" && (
        <section className="signup-experience" id="woningformulier">
          <div className="signup-story">
            <p className="kicker orange">Je woning in goede handen</p>
            <h2>Een kleine eerste stap. Daarna regelen wij de rest.</h2>
            <p>Vertel ons kort over je woning. Binnen twee werkdagen neemt ons Nederlandstalige team persoonlijk contact met je op.</p>
            <div className="signup-photo">
              <img src={siteConfig.assets.signup} alt={`Zonnig terras met zeezicht in ${siteConfig.location.city}`} width="1600" height="1067" loading="eager" />
              <span>San Pedro de Alcántara · Costa del Sol</span>
            </div>
            <div className="signup-promises">
              <span><CheckCircle2 aria-hidden="true" /><b>Vrijblijvend</b><small>Je zit nergens aan vast</small></span>
              <span><CheckCircle2 aria-hidden="true" /><b>Binnen 2 werkdagen</b><small>Persoonlijk antwoord</small></span>
              <span><CheckCircle2 aria-hidden="true" /><b>Nederlandstalig</b><small>Een helder gesprek</small></span>
            </div>
          </div>
          <FormSubmit className="signup-form" action={leadFormAction} thankYouPath={siteConfig.template.thankYouPath}>
            <div className="form-heading"><span>01</span><div><small>Je woning aanmelden</small><h2>Vertel ons over je woning</h2></div></div>
            <input type="hidden" name="_subject" value={leadSubject()} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={absoluteUrl("/bedankt/")} />
            <input type="hidden" name="bron_website" value={siteConfig.template.sourceWebsite} />
            <input type="hidden" name="bron_formulier" value="Woning aanmelden" />
            <label>Naam<input name="naam" autoComplete="name" placeholder="Je voor- en achternaam" required /></label>
            <label>E-mailadres<input type="email" name="email" autoComplete="email" placeholder="naam@voorbeeld.nl" required /></label>
            <label>Telefoonnummer <small>(optioneel)</small><input type="tel" name="telefoon" autoComplete="tel" placeholder="+31 of +34" /></label>
            <label>Locatie woning<input name="locatie" placeholder="Bijv. San Pedro de Alcántara, Nueva Alcántara of Nueva Andalucía" required /></label>
            <label>Type woning<select name="type" defaultValue="" required><option value="" disabled>Kies je woningtype</option><option>Appartement</option><option>Villa</option><option>Townhouse</option><option>Anders</option></select></label>
            <label>Waar kunnen we bij helpen?<select name="dienst" defaultValue="" required><option value="" disabled>Kies een dienst</option><option>Vakantieverhuur</option><option>Seizoens- en midtermverhuur</option><option>Langetermijnverhuur</option><option>Vastgoedbeheer</option><option>Schoonmaak & onderhoud</option><option>Renovatie & inrichting</option><option>Ik wil graag advies</option></select></label>
            <label className="wide">Vertel kort iets over je woning en wensen <small>(optioneel)</small><textarea name="bericht" rows={4} placeholder="Bijvoorbeeld: aantal slaapkamers, eigen gebruik en gewenste startdatum" /></label>
            <button className="btn wide form-cta" type="submit">Woning vrijblijvend aanmelden →</button>
            <small className="wide privacy-note"><CheckCircle2 aria-hidden="true" /> Je gegevens worden veilig verwerkt volgens onze <a href="/privacyverklaring/">privacyverklaring</a>.</small>
          </FormSubmit>
        </section>
      )}
      {page.slug === "contact" && (
        <section className="contact contact-page-form" id="woningformulier">
          <div className="contact-intro">
            <p className="kicker">Persoonlijk kennismaken</p>
            <h2>Vertel ons over je woning</h2>
            <p>
              Deel kort je plannen. Ons Nederlandstalige team neemt persoonlijk
              contact met je op.
            </p>
            <div className="contact-options">
              <a href={emailHref}>
                <span>
                  <Mail aria-hidden="true" />
                </span>
                <small>E-mail</small>
                <strong>{siteConfig.contact.email}</strong>
              </a>
            </div>
          </div>
          <FormSubmit
            action={leadFormAction}
            thankYouPath={siteConfig.template.thankYouPath}
          >
            <input type="hidden" name="_subject" value={leadSubject("lead – contactpagina")} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={absoluteUrl("/bedankt/")} />
            <input type="hidden" name="bron_website" value={siteConfig.template.sourceWebsite} />
            <input type="hidden" name="bron_formulier" value="Contactpagina" />
            <label>
              Naam
              <input name="naam" autoComplete="name" required />
            </label>
            <label>
              E-mailadres
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Telefoonnummer
              <input type="tel" name="telefoon" autoComplete="tel" />
            </label>
            <label>
              Locatie woning
              <input
                name="locatie"
                placeholder="Bijv. San Pedro de Alcántara of Nueva Alcántara"
                required
              />
            </label>
            <label>
              Type woning
              <select name="type">
                <option>Appartement</option>
                <option>Villa</option>
                <option>Townhouse</option>
                <option>Anders</option>
              </select>
            </label>
            <label>
              Gewenste dienst
              <select name="dienst">
                <option>Vakantieverhuur</option>
                <option>Seizoens- en midtermverhuur</option>
                <option>Langetermijnverhuur</option>
                <option>Vastgoedbeheer</option>
                <option>Schoonmaak &amp; onderhoud</option>
                <option>Renovatie &amp; inrichting</option>
              </select>
            </label>
            <label className="wide">
              Is er al een verhuurlicentie?
              <select name="verhuurlicentie" defaultValue="">
                <option value="" disabled>
                  Kies een antwoord
                </option>
                <option>Ja</option>
                <option>Nee</option>
                <option>In aanvraag</option>
                <option>Niet van toepassing / weet ik niet</option>
              </select>
            </label>
            <label className="wide">
              Je vraag of toelichting
              <textarea name="bericht" rows={5} />
            </label>
            <button className="btn wide form-cta" type="submit">
              Verstuur je aanvraag →
            </button>
            <small className="wide privacy-note">
              Wij verwerken je gegevens volgens onze{" "}
              <a href="/privacyverklaring/">privacyverklaring</a>.
            </small>
          </FormSubmit>
        </section>
      )}
      {page.slug === "blog" && featuredBlog ? (
        <section
          className="blog-index"
          aria-label="Alle blogs over verhuurbeheer in San Pedro de Alcántara"
        >
          <div className="blog-index-heading">
            <p className="eyebrow">Nieuw &amp; belangrijk</p>
            <h2>Uitgelicht voor woningeigenaren</h2>
          </div>
          <a className="featured-article" href={`/${featuredBlog.slug}/`}>
            <img
              src={blogVisualBySlug[featuredBlog.slug].src}
              alt={blogVisualBySlug[featuredBlog.slug].alt}
              width="1600"
              height="1067"
              loading="eager"
            />
            <div>
              <span>
                {blogVisualBySlug[featuredBlog.slug].category} ·{" "}
                {blogVisualBySlug[featuredBlog.slug].readTime} lezen
              </span>
              <h3>{featuredBlog.title}</h3>
              <p>{featuredBlog.description}</p>
              <b>Lees het artikel →</b>
            </div>
          </a>
          <div className="blog-list-heading">
            <p className="eyebrow">Alle artikelen</p>
            <h2>Praktische kennis over je woning in Spanje</h2>
          </div>
          <div className="blog-card-grid">
            {blogArticles.slice(1).map((article) => {
              const visual = blogVisualBySlug[article.slug];
              return (
                <a
                  className="blog-card"
                  href={`/${article.slug}/`}
                  key={article.slug}
                >
                  <img src={visual.src} alt={visual.alt} width="1600" height="1067" loading="lazy" />
                  <div>
                    <span>
                      {visual.category} · {visual.readTime} lezen
                    </span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <b>Lees verder →</b>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      ) : (
        <>
          {contentVisual && (
            <figure className="content-visual">
              <img
                src={contentVisual.src}
                alt={contentVisual.alt}
                width="1600"
                height="1067"
                loading="lazy"
              />
              <figcaption>
                Lokale aandacht voor presentatie, beheer en uitvoering rond je
                woning.
              </figcaption>
            </figure>
          )}
          <article className="article-body">
            {page.sections.map((s, i) => (
              <section key={s.title}>
                <span>0{i + 1}</span>
                <div>
                  <h2>{s.title}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.bullets && (
                    <ul>
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </article>
        </>
      )}
      {page.slug === "verhuurlicentie-san-pedro" && (
        <aside className="official-sources" aria-label="Officiële bronnen">
          <strong>Officiële informatie controleren</strong>
          <p>
            Regels kunnen wijzigen. Controleer je situatie altijd aan de hand
            van de actuele informatie van de bevoegde instanties.
          </p>
          <a
            href="https://www.juntadeandalucia.es/organismos/turismoyandaluciaexterior/areas/registro-turismo/establecimientos-servicios/paginas/viviendas-turisticas.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Junta de Andalucía: viviendas de uso turístico →
          </a>
          <a
            href="https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-26931"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOE: Registro Único de Arrendamientos →
          </a>
        </aside>
      )}
      {page.slug === "over-ons" && (
        <section className="team-section">
          <div className="team-heading">
            <p className="eyebrow">Het team</p>
            <h2>Echte mensen. Ter plaatse.</h2>
            <p>
              Een Nederlandstalig team met verschillende specialismen, van
              verhuur en administratie tot vastgoedbeheer, marketing en Tax
              &amp; Legal.
            </p>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name}>
                <div className="team-photo">
                  <img src={person.image} alt={person.alt} width="640" height="640" loading="lazy" />
                </div>
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      <section className="page-faq">
        <div>
          <p className="eyebrow">Veelgestelde vragen</p>
          <h2>Vragen over {page.title.toLowerCase()}</h2>
        </div>
        <div>
          {page.faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      {page.slug !== "blog" && page.slug !== "contact" && page.slug !== "woning-aanmelden" && (
        <section className="related">
          <p className="eyebrow">Lees ook</p>
          <h2>Meer voor eigenaren in San Pedro de Alcántara</h2>
          <div>
            {related.map((r) => (
              <a href={`/${r.slug}/`} key={r.slug}>
                <small>{r.type}</small>
                <strong>{r.title}</strong>
                <span>Lees verder →</span>
              </a>
            ))}
          </div>
        </section>
      )}
      {page.type === "gids" && (
        <section className="blog-lead">
          <div className="blog-lead-person">
            <img
              src="/sophie-san-pedro.webp"
              alt="Sophie van Verhuurbeheer San Pedro de Alcántara"
              width={1088}
              height={1100}
              sizes="(max-width: 620px) 88vw, (max-width: 1000px) 40vw, 20vw"
            />
            <div>
              <p className="eyebrow">Persoonlijk advies</p>
              <h2>Meer weten over dit onderwerp?</h2>
              <p>
                Heeft u een vraag over dit artikel of wil je weten wat dit voor
                je woning betekent? Sophie denkt graag met u mee.
              </p>
              <strong>Sophie · Backoffice</strong>
              <a href={whatsappHref("Hallo Sophie, ik heb een vraag over dit artikel")}>
                Stel je vraag via WhatsApp →
              </a>
            </div>
          </div>
          <FormSubmit
            action={leadFormAction}
            thankYouPath={siteConfig.template.thankYouPath}
          >
            <input type="hidden" name="_subject" value={leadSubject(`lead – ${page.title}`)} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={absoluteUrl("/bedankt/")} />
            <input type="hidden" name="bron_website" value={siteConfig.template.sourceWebsite} />
            <input type="hidden" name="bron_formulier" value={`Kennisbank – ${page.title}`} />
            <input
              type="hidden"
              name="onderwerp"
              value={`Vraag over: ${page.title}`}
            />
            <label>
              Naam
              <input name="naam" autoComplete="name" required />
            </label>
            <label>
              E-mailadres
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Telefoonnummer
              <input type="tel" name="telefoon" autoComplete="tel" />
            </label>
            <label>
              Locatie van je woning
              <input
                name="locatie"
                placeholder="Bijv. San Pedro de Alcántara, Nueva Andalucía of Marbella"
              />
            </label>
            <label className="wide">
              Je vraag
              <textarea name="vraag" rows={5} required />
            </label>
            <button className="button button-primary wide" type="submit">
              Verstuur je vraag →
            </button>
            <small className="wide">
              Sophie neemt persoonlijk contact met je op.
            </small>
          </FormSubmit>
        </section>
      )}
      {page.slug !== "contact" && page.slug !== "woning-aanmelden" && (
        <section className="content-cta">
          <p className="eyebrow">Vrijblijvend kennismaken</p>
          <h2>Wil je weten welke aanpak bij je woning past?</h2>
          <p>
            Vertel ons kort waar je woning ligt en hoe je deze wilt gebruiken.
            Dan bespreken we de mogelijkheden voor beheer en verhuur in
            San Pedro de Alcántara.
          </p>
          <a className="button button-primary" href="/woning-aanmelden/">
            Vraag een verhuurindicatie aan →
          </a>
        </section>
      )}
      <footer className="site-footer">
        <div className="footer-brand">
          <BrandLockup className="brand" ariaLabel="Naar Home" />
          <p>
            Verhuurbeheer San Pedro de Alcántara is onderdeel van{" "}
            <a href="https://www.verhuurbeheerspanje.nl/">
              Verhuurbeheer Spanje
            </a>
            .
          </p>
          <div className="social-links">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Instagram"
            >
              <Instagram aria-hidden="true" /> Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verhuurbeheer Spanje op Facebook"
            >
              <Facebook aria-hidden="true" /> Facebook
            </a>
          </div>
        </div>
        <div>
          <b>Diensten</b>
          <a href="/vakantieverhuur-san-pedro/">Vakantieverhuur</a>
          <a href="/midterm-verhuur-san-pedro/">Seizoens- en midtermverhuur</a>
          <a href="/langetermijnverhuur-san-pedro/">Langetermijnverhuur</a>
          <a href="/vastgoedbeheer-san-pedro/">Vastgoedbeheer</a>
          <a href="/verhuurlicentie-san-pedro/">Verhuurlicentie</a>
        </div>
        <div>
          <b>Meer</b>
          <a href="/werkwijze/">Werkwijze</a>
          <a href="/over-ons/">Over ons</a>
          <a href="/blog/">Blog</a>
          <a href="/contact/">Contact</a>
          <a href="/privacyverklaring/">Privacyverklaring</a>
          <a href="/cookieverklaring/">Cookieverklaring</a>
          <CookiePreferencesButton />
        </div>
        <div>
          <b>Contact</b>
          <a href={whatsappHref()}>
            WhatsApp
          </a>
          <a href={emailHref}>E-mail</a>
          <small>© 2026 · San Pedro de Alcántara · Costa del Sol</small>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappHref()}
        aria-label="Contact via WhatsApp"
      >
        WhatsApp
      </a>
      <a className="to-top" href="#top" aria-label="Terug naar boven">
        ↑
      </a>
    </main>
  );
}
