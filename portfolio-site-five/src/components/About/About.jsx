import { useEffect, useRef, useState } from "react";
import "./About.css";
import {
  ABOUT_HEADER,
  ABOUT_STORY,
  ABOUT_VALUES,
  ABOUT_META,
  ABOUT_QUOTE,
  ABOUT_STATS,
} from "./AboutData.js";

export default function About() {
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
    <section className="about-root" id="about" ref={sectionRef}>
      <div className="about-grid-bg" aria-hidden="true" />
      <div className="about-glow" aria-hidden="true" />

      <div className="about-inner">

        {/* LEFT */}
        <div className={`about-left${visible ? " visible" : ""}`}>
          <div className="about-eyebrow" aria-hidden="true">
            <div className="about-eyebrow-line" />
            <span className="about-eyebrow-label">{ABOUT_HEADER.eyebrow}</span>
          </div>

          <h2 className="about-heading">
            {ABOUT_HEADER.heading}<br />
            <em>{ABOUT_HEADER.headingAccent}</em>
          </h2>

          {ABOUT_STORY.map((paragraph, i) => (
            <p className="about-story" key={i}>{paragraph}</p>
          ))}

          <div className="about-divider" aria-hidden="true" />

          <div className="about-values" aria-label="Our values">
            {ABOUT_VALUES.map((value) => (
              <div className="about-value" key={value.title}>
                <div className="about-value-dot" aria-hidden="true" />
                <div className="about-value-text">
                  <span className="about-value-title">{value.title}</span>
                  {value.description}
                </div>
              </div>
            ))}
          </div>

          <div className="about-meta" aria-label="Company details">
            {ABOUT_META.map((item) => (
              <div className="about-meta-item" key={item.label}>
                <span className="about-meta-label">{item.label}</span>
                <span className="about-meta-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={`about-right${visible ? " visible" : ""}`}>
          <div className="about-corner-mark" aria-hidden="true" />

          <div className="about-visual-frame">
            <blockquote className="about-quote">
              {ABOUT_QUOTE.text.map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="about-quote-accent">{line}</span>
                  ) : (
                    line
                  )}
                  {i < ABOUT_QUOTE.text.length - 1 && <br />}
                </span>
              ))}
            </blockquote>
            <cite className="about-quote-attr">{ABOUT_QUOTE.attribution}</cite>
          </div>

          <div className="about-stats-row" aria-label="Company stats">
            {ABOUT_STATS.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <div className="about-stat-num">{stat.num}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}