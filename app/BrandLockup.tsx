import { siteConfig } from "./site-config";

type BrandLockupProps = {
  className?: string;
  ariaLabel?: string;
};

export function BrandLockup({
  className = "logo-lockup",
  ariaLabel = `${siteConfig.brand.name} – naar Home`,
}: BrandLockupProps) {
  return (
    <a className={`${className} brand-lockup`} href="/" aria-label={ariaLabel}>
      <img
        className="brand-logo"
        src="/verhuurbeheer-san-pedro-logo.png"
        alt=""
        width="72"
        height="72"
        aria-hidden="true"
      />
    </a>
  );
}
