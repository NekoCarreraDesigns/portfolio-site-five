import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import {
  CONTACT_HEADER,
  CONTACT_SUBTEXT,
  CONTACT_BUTTONS,
  CONTACT_INFO,
} from "./ContactData";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
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
    <section className="contact-root" id="contact" ref={sectionRef}>
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="contact-glow-left" aria-hidden="true" />
      <div className="contact-glow-right" aria-hidden="true" />

      <div className={`contact-inner${visible ? " visible" : ""}`}>

        {/* Eyebrow */}
        <div className="contact-eyebrow" aria-hidden="true">
          <div className="contact-eyebrow-line" />
          <span className="contact-eyebrow-label">{CONTACT_HEADER.eyebrow}</span>
          <div className="contact-eyebrow-line" />
        </div>

        {/* Heading */}
        <h2 className="contact-heading">
          {CONTACT_HEADER.heading}<br />
          <em>{CONTACT_HEADER.headingAccent}</em>
        </h2>

        {/* Subtext */}
        <p className="contact-subtext">{CONTACT_SUBTEXT}</p>

        {/* Buttons */}
        <div className="contact-actions">
          {CONTACT_BUTTONS.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={btn.primary ? "contact-btn-primary" : "contact-btn-ghost"}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="contact-divider" aria-hidden="true" />

        {/* Info row */}
        <div className="contact-info" aria-label="Contact details">
          {CONTACT_INFO.map((item, i) => (
            <>
              <div className="contact-info-item" key={item.label}>
                <span className="contact-info-label">{item.label}</span>
                <span className="contact-info-value">{item.value}</span>
              </div>
              {i < CONTACT_INFO.length - 1 && (
                <div className="contact-separator" aria-hidden="true" key={`sep-${i}`} />
              )}
            </>
          ))}
        </div>

      </div>
    </section>
  );
}
