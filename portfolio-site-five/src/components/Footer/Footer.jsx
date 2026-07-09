import "./Footer.css";
import { FOOTER_DATA } from "./FooterData";

const ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">

        {/* Logo */}
        <a href="/" className="footer-logo" aria-label="MaasAI Solutions home">
          <div className="footer-logo-diamond" aria-hidden="true">
            <div className="footer-logo-diamond-inner" />
          </div>
          <div className="footer-logo-wordmark">
            <span className="footer-logo-name">MaasAI</span>
            <span className="footer-logo-tagline">Solutions</span>
          </div>
        </a>

        {/* Copyright */}
        <p className="footer-copyright">{FOOTER_DATA.copyright}</p>

        {/* Socials */}
        <div className="footer-socials" aria-label="Social media links">
          {FOOTER_DATA.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="footer-social-link"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ICONS[social.icon]}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}