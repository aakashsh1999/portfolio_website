import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { RESUME_URL } from "../constants";
import { heliumAttrs } from "../helium-animation/utils";
import { useMagnetic } from "../hooks/useMagnetic";
import GreetingCycle from "../components/GreetingCycle";
import SplitText from "../components/SplitText";
import StatusPill from "../components/StatusPill";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const panelRef = useRef(null);
  const ctaPrimary = useMagnetic(0.28);
  const ctaGhost = useMagnetic(0.28);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      const rect = panel.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      panel.style.transform = `perspective(1000px) rotateY(${px * 8}deg) rotateX(${
        -py * 8
      }deg) translateZ(0)`;
    };
    const onLeave = () => {
      panel.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    };

    panel.addEventListener("mousemove", onMove);
    panel.addEventListener("mouseleave", onLeave);
    return () => {
      panel.removeEventListener("mousemove", onMove);
      panel.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <StatusPill />
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__greeting" {...heliumAttrs("fade")}>
            <GreetingCycle />
            <span className="hero__greeting-sep">—</span>
            <span className="hero__role">
              Software engineer · Product experiences
            </span>
          </p>

          <h1 className="hero__brand">
            <span className="hero__brand-line">
              <SplitText text="Akash" mode="chars" animation="textRevealUp" />
            </span>
            <span className="hero__brand-line hero__brand-line--accent">
              <SplitText text="Sharma" mode="chars" animation="textRevealUp" />
            </span>
          </h1>

          <p className="hero__headline">
            <SplitText
              text="I craft motion-led web & mobile products that feel intentional."
              mode="words"
              animation="slideInUp"
            />
          </p>

          <p className="hero__support" {...heliumAttrs("bottomFadeIn")}>
            Front-end and full-stack engineer shipping Next.js / React product
            experiences for Noise, Leaf, FIKN, Lumineve, and AI-powered
            platforms.
          </p>

          <div className="hero__cta" {...heliumAttrs("fade")}>
            <span ref={ctaPrimary} className="magnetic">
              <Link
                to="projects"
                spy
                smooth
                offset={-72}
                className="btn btn--primary"
              >
                View projects
              </Link>
            </span>
            <span ref={ctaGhost} className="magnetic">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                Resume
              </a>
            </span>
          </div>

          <div {...heliumAttrs("fade")}>
            <SocialLinks />
          </div>
        </div>

        <div
          className="hero__visual"
          {...heliumAttrs("revealRightToLeft", {
            viewSettings: { once: true },
            transitionSettings: { duration: 1.1 },
          })}
        >
          <div className="hero__panel" ref={panelRef}>
            <span className="hero__panel-label">Currently</span>
            <strong>Helium</strong>
            <p>
              Full-stack / frontend-heavy engineer — website builder, brand
              PDPs, and Impulse analytics.
            </p>
            <ul>
              <li>Helium · May 2024 — Present</li>
              <li>Vaionex · 2023 — 2024</li>
              <li>Cloudstok · 2021 — 2023</li>
            </ul>
            <div className="hero__panel-glow" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
};

export default Home;
