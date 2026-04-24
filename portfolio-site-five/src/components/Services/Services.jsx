import { useEffect, useRef, useState } from "react";
import "./Services.css";
import { SERVICES, SECTION_HEADER } from "./ServicesData";

const ICONS = {
  consulting: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  development: (
    <svg viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  infrastructure: (
    <svg viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  nlp: (
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  influencer: (
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Services() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            SERVICES.forEach((_, i) => {
              setTimeout(() => {
                setCardsVisible((prev) => [...prev, i]);
              }, 100 + i * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-root" id="services" ref={sectionRef}>
      <div className="services-grid-bg" aria-hidden="true" />

      {/* Header */}
      <div className={`services-header${headerVisible ? " visible" : ""}`}>
        <div className="services-eyebrow" aria-hidden="true">
          <div className="services-eyebrow-line" />
          <span className="services-eyebrow-label">{SECTION_HEADER.eyebrow}</span>
          <div className="services-eyebrow-line" />
        </div>
        <h2 className="services-heading">
          {SECTION_HEADER.heading} <em>{SECTION_HEADER.headingAccent}</em>
        </h2>
        <p className="services-subheading">{SECTION_HEADER.subheading}</p>
      </div>

      {/* Grid */}
      <div className="services-grid" role="list">
        {SERVICES.map((service, i) => (
          <div
            key={service.number}
            className={`service-card${service.featured ? " featured" : ""}${
              cardsVisible.includes(i) ? " visible" : ""
            }`}
            style={{ transitionDelay: `${i * 0.08}s` }}
            role="listitem"
          >
            <span className="service-card-number">{service.number}</span>

            <div className="service-icon" aria-hidden="true">
              {ICONS[service.icon]}
            </div>

            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>

            <div className="service-card-arrow" aria-hidden="true">
              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}