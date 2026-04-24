import { useEffect, useRef, useState } from "react";
import "./Home.css";
import Services from "../../components/Services/Services.jsx";
import About from "../../components/About/About.jsx"
import { NAV_LINKS, STATS, WIDE_STAT, TICKER_ITEMS } from "./HomeData.js";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
    <div className="hero-root" ref={rootRef}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      {/* NAV */}
      <nav className={`hero-nav${visible ? " visible" : ""}`} aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="MaasAI Solutions home">
          <div className="logo-diamond" aria-hidden="true">
            <div className="logo-diamond-inner" />
          </div>
          <div className="logo-wordmark">
            <span className="logo-name">MaasAI</span>
            <span className="logo-tagline">Solutions</span>
          </div>
        </a>

        <ul className="nav-links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        <button className="nav-cta" type="button">Get Started</button>
      </nav>

      {/* HERO BODY */}
      <div className="hero-body">

        {/* Left column */}
        <div className="hero-left">
          <div className={`hero-eyebrow${visible ? " visible" : ""}`} aria-hidden="true">
            <div className="eyebrow-line" />
            <span className="eyebrow-label">Enterprise AI Solutions</span>
          </div>

          <h1 className={`hero-heading${visible ? " visible" : ""}`}>
            Intelligence<br />
            <em>Refined.</em><br />
            Results Delivered.
          </h1>

          <p className={`hero-description${visible ? " visible" : ""}`}>
            MaasAI Solutions architects bespoke artificial intelligence systems
            for enterprises that demand precision, performance, and a
            competitive edge.
          </p>

          <div className={`hero-actions${visible ? " visible" : ""}`}>
            <button className="btn-primary" type="button">Explore Solutions</button>
            <button className="btn-ghost" type="button">View Case Studies</button>
          </div>
        </div>

        {/* Right column - stat cards */}
        <div className={`hero-right${visible ? " visible" : ""}`} aria-label="Key metrics">
          <div className="stat-row">
            {STATS.map((s) => (
              <div
                key={s.num}
                className="stat-card"
                style={s.offset ? { marginTop: "32px" } : undefined}
              >
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="stat-card" style={{ width: "100%" }}>
            <div className="stat-num" style={{ fontSize: "36px" }}>{WIDE_STAT.num}</div>
            <div className="stat-label">{WIDE_STAT.label}</div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="hero-divider" aria-hidden="true" />

      {/* TICKER */}
      <div
        className={`hero-ticker${visible ? " visible" : ""}`}
        aria-label="Service areas"
      >
        {TICKER_ITEMS.map((item) => (
          <div className="ticker-item" key={item}>
            <div className="ticker-dot" aria-hidden="true" />
            <span className="ticker-text">{item}</span>
          </div>
        ))}
        
      </div>
    </div>
    <Services/>
    <About/>
    </>
  );
}