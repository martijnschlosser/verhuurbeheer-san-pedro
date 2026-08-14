import { CookiePreferencesButton } from "../CookieConsent";
import {
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Facebook,
  Hammer,
  Instagram,
  KeyRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  absoluteUrl,
  emailHref,
  siteConfig,
  whatsappHref,
} from "../site-config";

const homepageTeam = [
  {
    name: "Martijn",
    role: "Relationship manager",
    image: "/martijn-verhuurbeheer-san-pedro.webp",
    alt: "Martijn, relationship manager at Verhuurbeheer Spanje on the Costa del Sol",
  },
  {
    name: "Geert",
    role: "Construction manager",
    image: "/geert-vastgoedbeheer-san-pedro.webp",
    alt: "Geert, construction and property management manager at Verhuurbeheer Spanje",
  },
  {
    name: "Sophie",
    role: "Operations",
    image: "/sophie-san-pedro.webp",
    alt: "Sophie, owner support contact at Verhuurbeheer Spanje",
  },
  {
    name: "Päivi",
    role: "Administration",
    image: "/paivi-administratie-verhuurbeheer.webp",
    alt: "Päivi from the administration team at Verhuurbeheer Spanje",
  },
];

const services = [
  {
    title: "Holiday rental management",
    slug: "vakantieverhuur-san-pedro",
    price: siteConfig.pricing.holidayRental,
    icon: BedDouble,
    text: "We create the property presentation, manage pricing and calendars, and coordinate guest communication and local changeovers.",
  },
  {
    title: "Seasonal and mid-term rentals",
    slug: "midterm-verhuur-san-pedro",
    price: siteConfig.pricing.midterm,
    icon: CalendarDays,
    text: "A flexible option for seasonal and temporary residents, with screening, clear agreements and a personal handover.",
  },
  {
    title: "Long-term rentals",
    slug: "langetermijnverhuur-san-pedro",
    price: siteConfig.pricing.longterm,
    icon: KeyRound,
    text: "We find a suitable long-term tenant and manage viewings, selection, the agreement, deposit and key handover.",
  },
  {
    title: "Property management",
    slug: "vastgoedbeheer-san-pedro",
    price: "Tailored",
    icon: ShieldCheck,
    text: "We also look after non-rental properties through inspections, key holding, contractor access and practical follow-up.",
  },
  {
    title: "Cleaning & maintenance",
    slug: "schoonmaak-onderhoud-san-pedro",
    price: "After property assessment",
    icon: Sparkles,
    text: "Local teams handle changeover cleaning and linen, while issues, minor repairs and maintenance are followed up promptly.",
  },
  {
    title: "Renovation & furnishing",
    slug: "renovatie-inrichting-san-pedro",
    price: "Tailored quote",
    icon: Hammer,
    text: "From a focused refresh to complete furnishing or renovation, tailored to durable use and a strong rental presentation.",
  },
];

const faqs = [
  [
    "How much does holiday rental management in San Pedro de Alcántara cost?",
    "Full-service holiday rental management starts at 18% of realised rental income. After assessing the property, we clearly define what is included and which rate fits the home.",
  ],
  [
    "How much do mid-term and long-term rental services cost?",
    "Tenant sourcing, screening and placement carry a one-off fee equal to one month’s rent. Ongoing management can be agreed separately.",
  ],
  [
    "Are cleaning costs deducted from rental income?",
    "Standard departure cleaning and laundry are charged to the guest. Deep cleaning, damage repairs and technical maintenance are separate.",
  ],
  [
    "Can I continue using my own property?",
    "Of course. We block your own stays in advance and align the rental strategy with the periods when you want to visit San Pedro de Alcántara.",
  ],
  [
    "Which rental platforms will list my property?",
    "We select the channels that fit the property and target guests, including Airbnb and Booking.com. Central calendar management prevents double bookings.",
  ],
  [
    "Do you provide property management without rentals?",
    "Yes. Without rentals, we can still provide inspections, key holding, property access and maintenance coordination.",
  ],
  [
    "Which areas of San Pedro de Alcántara do you cover?",
    "We support owners in San Pedro de Alcántara Pueblo, Nueva Alcántara, La Cala de San Pedro de Alcántara, Guadalmina, Guadalmina Baja, San Pedro de Alcántara Golf, Marbella west and Puerto Banús. Every property and location is assessed individually.",
  ],
  [
    "Do I need a rental licence for holiday rentals in San Pedro de Alcántara?",
    "Tourist rentals must meet current regional, municipal and registration requirements. Have the situation checked before listing the property on booking platforms.",
  ],
];

function LocalizedHome() {
  const homeFaqs = faqs.slice(0, 5);
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.domain}/en/#organization`,
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    description:
      "Full-service property management, holiday rental management and second-home care for owners in San Pedro de Alcántara.",
    parentOrganization: {
      "@type": "Organization",
      name: "Verhuurbeheer Spanje",
      url: "https://www.verhuurbeheerspanje.nl/",
    },
    areaServed: [
      { "@type": "City", name: "San Pedro de Alcántara" },
      { "@type": "Place", name: "San Pedro de Alcántara Pueblo" },
      { "@type": "Place", name: "Nueva Alcántara" },
      { "@type": "Place", name: "La Cala de San Pedro de Alcántara" },
      { "@type": "Place", name: "Guadalmina" },
      { "@type": "Place", name: "Guadalmina Baja" },
      { "@type": "Place", name: "San Pedro de Alcántara Golf" },
      { "@type": "Place", name: "Marbella west" },
      { "@type": "Place", name: "Puerto Banús" },
      { "@type": "City", name: "Nueva Andalucía" },
      { "@type": "City", name: "Benalmádena" },
    ],
    email: siteConfig.contact.email,
    url: absoluteUrl("/en/"),
    logo: absoluteUrl("/terras-zonsondergang-san-pedro.webp"),
    image: absoluteUrl("/urbanisatie-zwembad-san-pedro.webp"),
    sameAs: [
      siteConfig.brand.parentUrl,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    knowsLanguage: ["nl", "en", "es"],
    knowsAbout: [
      "Property Management San Pedro de Alcántara",
      "Holiday rental management",
      "Property management",
      "Second-home management",
      "Mid-term rentals",
      "Long-term rentals",
      "Key holding",
      "Cleaning and maintenance",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/en/#website`,
    url: absoluteUrl("/en/"),
    name: siteConfig.brand.name,
    inLanguage: "en-GB",
    publisher: { "@id": `${siteConfig.domain}/en/#organization` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  return (
    <main lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="site-header">
        <a
          className="logo-lockup"
          href="/"
          aria-label="Property Management San Pedro de Alcántara – Home"
        >
          <img
            src="/terras-zonsondergang-san-pedro.webp"
            alt="Property Management San Pedro de Alcántara logo"
            width="54"
            height="54"
          />
        </a>
        <nav>
          <a href="/">Home</a>
          <details className="services-menu">
            <summary>Services</summary>
            <div>
              <a href="/vakantieverhuur-san-pedro/">Holiday rental management</a>
              <a href="/midterm-verhuur-san-pedro/">
                Seasonal and mid-term rentals
              </a>
              <a href="/langetermijnverhuur-san-pedro/">Long-term rentals</a>
              <a href="/vastgoedbeheer-san-pedro/">Property management</a>
              <a href="/schoonmaak-onderhoud-san-pedro/">
                Cleaning & maintenance
              </a>
              <a href="/renovatie-inrichting-san-pedro/">
                Renovation & furnishing
              </a>
              <a href="/verhuurlicentie-san-pedro/">Rental licence</a>
            </div>
          </details>
          <a href="/werkwijze/">How we work</a>
          <a href="/over-ons/">About us</a>
          <a href="/blog/">Guides</a>
          <a href="/contact/">Contact</a>
        </nav>
        <a className="btn btn-small header-cta" href="/woning-aanmelden/">
          List your property
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div>
            <a href="/">Home</a>
            <b>Services</b>
            <a href="/vakantieverhuur-san-pedro/">Holiday rental management</a>
            <a href="/midterm-verhuur-san-pedro/">Seasonal and mid-term rentals</a>
            <a href="/langetermijnverhuur-san-pedro/">Long-term rentals</a>
            <a href="/vastgoedbeheer-san-pedro/">Property management</a>
            <a href="/schoonmaak-onderhoud-san-pedro/">Cleaning & maintenance</a>
            <a href="/renovatie-inrichting-san-pedro/">Renovation & furnishing</a>
            <a href="/verhuurlicentie-san-pedro/">Rental licence</a>
            <b>Company</b>
            <a href="/werkwijze/">How we work</a>
            <a href="/over-ons/">About us</a>
            <a href="/blog/">Guides & knowledge base</a>
            <a href="/contact/">Contact</a>
            <a href="/woning-aanmelden/">List your property</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <p className="kicker">
            For international property owners on the Costa del Sol
          </p>
          <h1>Enjoy your second home in San Pedro de Alcántara. We take care of the rest.</h1>
          <p>
            From Nueva Alcántara and La Cala to San Pedro de Alcántara Pueblo, we combine smart rental management with trusted local people. You have one clear contact for bookings, guests, cleaning, maintenance and the day-to-day care of your property.
          </p>
          <div className="actions">
            <a className="btn hero-cta" href="/woning-aanmelden/">
              List your property
            </a>
            <a className="link-light" href="#diensten">
              View all services →
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Airbnb &amp; Booking</b> in your own name
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Dedicated</b> contact
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" />
            <b>Local service</b> in San Pedro de Alcántara and the surrounding area
          </span>
        </div>
      </section>

      <section
        className="property-showcase"
        aria-label="Homes and property in San Pedro de Alcántara"
      >
        <figure className="showcase-wide">
          <img
            src="/villa-zwembad-san-pedro.webp"
            alt="Modern villa in San Pedro de Alcántara with terrace, pool and sea views"
            width="1536"
            height="1024"
            loading="eager"
          />
          <figcaption>Homes with character and rental potential</figcaption>
        </figure>
        <figure>
          <img
            src="/terras-zonsondergang-san-pedro.webp"
            alt="Holiday home on the San Pedro de Alcántara coast"
            width="1800"
            height="1118"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="/urbanisatie-zwembad-san-pedro.webp"
            alt="Luxury holiday home in San Pedro de Alcántara with sea views"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="services" id="diensten">
        <div className="section-head">
          <p className="kicker orange">Our services</p>
          <h2>One local team for rentals and property care</h2>
          <p>
            No disconnected suppliers. We coordinate rentals, guest service, cleaning, inspections and maintenance as one team.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <a className="service-card" href={`/${s.slug}/`} key={s.slug}>
              <div className="service-card-top">
                <span className="service-icon">
                  <s.icon aria-hidden="true" />
                </span>
                <span className="number">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <strong>{s.price}</strong>
              <em>View service →</em>
            </a>
          ))}
        </div>
      </section>

      <aside className="license-note">
        <ShieldCheck aria-hidden="true" />
        <div>
          <b>Planning holiday rentals? Check the requirements in time.</b>
          <p>
            See which registration and licensing requirements may apply to your property.
          </p>
        </div>
        <a href="/verhuurlicentie-san-pedro/">Read about rental licensing →</a>
      </aside>

      <section className="rental-band">
        <div>
          <p className="kicker">Which rental model fits?</p>
          <h2>The right rental model starts with your plans.</h2>
          <p>
            Whether you want to visit regularly, maximise returns or prefer a long-term tenant, we compare the options and create an approach that fits your property and plans.
          </p>
        </div>
        <div className="rental-options">
          <a href="/vakantieverhuur-san-pedro/">
            <small>Short stays</small>
            <b>Holiday rental management</b>
            <span>From 18% →</span>
          </a>
          <a href="/midterm-verhuur-san-pedro/">
            <small>Temporary stays</small>
            <b>Mid-term</b>
            <span>One month’s rent →</span>
          </a>
          <a href="/langetermijnverhuur-san-pedro/">
            <small>Long-term tenant</small>
            <b>Langetermijn</b>
            <span>One month’s rent →</span>
          </a>
        </div>
      </section>

      <section className="process" id="werkwijze">
        <div className="section-head left">
          <p className="kicker orange">How we work</p>
          <h2>How we prepare your property for a strong start</h2>
        </div>
        <ol>
          <li>
            <b>01</b>
            <div>
              <h3>Introduction</h3>
              <p>
                We first map out the property, location, personal use and financial expectations.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Property assessment and proposal</h3>
              <p>
                We then inspect the property and provide a clear proposal without vague responsibilities or costs.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Preparation</h3>
              <p>
                We arrange the presentation, booking channels, pricing strategy, guest information, access and agreements with the local team.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Launch and ongoing management</h3>
              <p>
                Once everything is ready, we manage operations and keep you informed about bookings and important property matters.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="regions compact-regions" id="regios">
        <div className="section-head">
          <p className="kicker orange">Local coverage</p>
          <h2>Local knowledge across San Pedro de Alcántara</h2>
          <p>
            From coastal apartments and golf townhouses to hillside villas, we work throughout San Pedro de Alcántara Pueblo, La Cala de San Pedro de Alcántara, Nueva Alcántara, Guadalmina, Puerto Banús, Guadalmina Baja and San Pedro de Alcántara Golf.
          </p>
        </div>
        <div className="area-list" aria-label="Areas covered around San Pedro de Alcántara">
          <b>San Pedro de Alcántara Pueblo</b>
          <b>Nueva Alcántara</b>
          <b>La Cala de San Pedro de Alcántara</b>
          <b>Guadalmina</b>
          <b>Guadalmina Baja</b>
          <b>San Pedro de Alcántara Golf</b>
          <b>Nueva Andalucía</b>
          <b>Benalmádena</b>
        </div>
      </section>

      <section className="home-team">
        <div className="home-team-copy">
          <p className="kicker orange">Our team</p>
          <h2>Personal contact with people who know San Pedro de Alcántara.</h2>
          <p>
            Your contact knows your arrangements and our local team knows the property. Communication, administration and practical follow-up remain part of one process.
          </p>
          <a className="dark-link" href="/over-ons/">
            Meet the full team →
          </a>
        </div>
        <div className="home-team-grid">
          {homepageTeam.map((person) => (
            <article key={person.name}>
              <img src={person.image} alt={person.alt} loading="lazy" />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge compact-knowledge" id="kennisbank">
        <div className="section-head">
          <p className="kicker orange">Guidess &amp; advies</p>
          <h2>Practical guides for property owners</h2>
          <p>
            Clear guidance on costs, rental strategy, regulations and property management in San Pedro de Alcántara.
          </p>
        </div>
        <div className="knowledge-grid">
          <a href="/kosten-verhuurbeheer-san-pedro/">
            <small>Costs</small>
            <h3>What does property management cost?</h3>
            <span>Read guide →</span>
          </a>
          <a href="/dynamische-prijzen-vakantiewoning/">
            <small>Returns</small>
            <h3>Dynamic pricing</h3>
            <span>Read guide →</span>
          </a>
          <a href="/zelf-verhuren-of-verhuurbeheer/">
            <small>Decision guide</small>
            <h3>Self-manage or outsource?</h3>
            <span>Read guide →</span>
          </a>
        </div>
        <a className="knowledge-all" href="/blog/">
          View all guides and articles →
        </a>
      </section>

      <section className="faq">
        <div>
          <p className="kicker orange">Frequently asked questions</p>
          <h2>Clear answers</h2>
          <p>
            Key questions about our services and fees in San Pedro de Alcántara.
          </p>
        </div>
        <div>
          {homeFaqs.map(([q, a], i) => (
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

      <section className="contact" id="contact">
        <div>
          <p className="kicker">Free rental forecast</p>
          <h2>Get an informed rental forecast for San Pedro de Alcántara</h2>
          <p>
            Tell us where the property is, what type it is and how you want to use it. We will then discuss which approach and rental model are realistic.
          </p>
          <p>
            <a href={emailHref}>
              {siteConfig.contact.email}
            </a>
            <br />
          </p>
        </div>
        <form
          action={emailHref}
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="naam" required />
          </label>
          <label>
            Email address
            <input type="email" name="email" required />
          </label>
          <label>
            Property type
            <select name="type">
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Anders</option>
            </select>
          </label>
          <label>
            Preferred rental model
            <select name="verhuurvorm">
              <option>Holiday rental management</option>
              <option>Mid-term</option>
              <option>Langetermijn</option>
              <option>Property management</option>
            </select>
          </label>
          <label className="wide">
            Does the property already have a rental licence?
            <select name="verhuurlicentie" defaultValue="">
              <option value="" disabled>
                Select an answer
              </option>
              <option>Yes</option>
              <option>No</option>
              <option>Pending</option>
              <option>Not applicable / I don’t know</option>
            </select>
          </label>
          <label className="wide">
            Location and short description
            <textarea name="woning" rows={4} />
          </label>
          <button className="btn wide form-cta" type="submit">
            Request your forecast →
          </button>
          <small className="wide privacy-note">
            We process your data according to our{" "}
            <a href="/privacy policy/">privacy policy</a>.
          </small>
        </form>
      </section>
      <footer className="site-footer">
        <div className="footer-brand">
          <a className="logo-lockup" href="/" aria-label="Home">
            <img
              src="/terras-zonsondergang-san-pedro.webp"
              alt="Property Management San Pedro de Alcántara"
              width={640}
              height={640}
              sizes="54px"
            />
            <span>
              Verhuurbeheer <b>San Pedro de Alcántara</b>
            </span>
          </a>
          <p>
            Property Management San Pedro de Alcántara is part of{" "}
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
          <b>Services</b>
          <a href="/vakantieverhuur-san-pedro/">Holiday rental management</a>
          <a href="/midterm-verhuur-san-pedro/">Seasonal and mid-term rentals</a>
          <a href="/langetermijnverhuur-san-pedro/">Long-term rentals</a>
          <a href="/vastgoedbeheer-san-pedro/">Property management</a>
          <a href="/verhuurlicentie-san-pedro/">Rental licence</a>
        </div>
        <div>
          <b>More</b>
          <a href="/werkwijze/">How we work</a>
          <a href="/over-ons/">About us</a>
          <a href="/blog/">Guides</a>
          <a href="/contact/">Contact</a>
          <a href="/privacy policy/">Privacy policy</a>
          <a href="/cookieverklaring/">Cookie policy</a>
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
      <a className="to-top" href="#top" aria-label="Back to top">
        ↑
      </a>
    </main>
  );
}

export const metadata = { robots: { index: false, follow: true }, keywords: ["property management San Pedro de Alcántara","holiday rental management San Pedro de Alcántara","Airbnb management San Pedro de Alcántara","key holding San Pedro de Alcántara","home checks San Pedro de Alcántara","second home management San Pedro de Alcántara","villa management San Pedro de Alcántara","apartment management San Pedro de Alcántara"], title: "Property Management San Pedro de Alcántara | Holiday Rental & Key Holding", description: "Local property management in San Pedro de Alcántara for international owners: holiday rental management, Airbnb management, key holding, home checks, cleaning and maintenance.", alternates: { canonical: "/en/", languages: { "nl-NL": "/", en: "/en/", es: "/es/", "x-default": "/" } }, openGraph: { locale: "en_GB", url: "/en/", type: "website" as const } };
export default LocalizedHome;
