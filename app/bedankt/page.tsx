import type { Metadata } from "next";
import { BrandLockup } from "../BrandLockup";

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag | Verhuurbeheer San Pedro de Alcántara",
  description: "Uw casa is succesvol aangemeld. Wij nemen binnen twee werkdagen contact met u op.",
  robots: { index: false, follow: false },
};

export default function BedanktPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-sky" aria-hidden="true">
        <span className="thanks-ray ray-one" />
        <span className="thanks-ray ray-two" />
        <span className="thanks-ray ray-three" />
        <span className="thanks-sun"><span>✓</span></span>
        <span className="thanks-horizon" />
      </div>

      <BrandLockup
        className="thanks-logo"
        ariaLabel="Terug naar Verhuurbeheer San Pedro de Alcántara"
      />

      <section className="thanks-card">
        <p className="thanks-kicker">¡Perfecto!</p>
        <h1>Je casa is succesvol<br />aangemeld.</h1>
        <p className="thanks-copy">
          We nemen binnen <strong>twee werkdagen</strong><br className="desktop-break" /> persoonlijk contact met je op.
        </p>
        <div className="thanks-signoff">
          <span>Muchas gracias</span>
          <span className="sun-emoji" role="img" aria-label="zon">☀️</span>
        </div>
        <a className="thanks-button" href="/">Terug naar de website <span>→</span></a>
      </section>

      <p className="thanks-footer">Verhuurbeheer San Pedro de Alcántara · Costa del Sol</p>
    </main>
  );
}
