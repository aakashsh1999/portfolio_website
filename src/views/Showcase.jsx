import React, { useEffect, useRef } from "react";
import { featuredProjects } from "../data/projects";
import { heliumAttrs } from "../helium-animation/utils";

/**
 * Sticky horizontal scroll gallery — pattern from award scroll portfolios
 * (vertical scroll drives horizontal track).
 */
const Showcase = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 860px)").matches) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollable)
      );
      const maxX = track.scrollWidth - window.innerWidth + 80;
      track.style.transform = `translate3d(${-progress * maxX}px, 0, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="showcase"
      className="showcase"
      ref={sectionRef}
      aria-label="Project showcase"
    >
      <div className="showcase__sticky">
        <div className="container showcase__intro">
          <p className="eyebrow" {...heliumAttrs("fade")}>
            Spotlight
          </p>
          <h2 {...heliumAttrs("blurScaleIn")}>Pinned brand stories</h2>
        </div>
        <div className="showcase__viewport">
          <div className="showcase__track" ref={trackRef}>
            {featuredProjects.map((project, i) => (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="showcase__card"
              >
                <div className="showcase__media">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="showcase__meta">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{project.title}</h3>
                  <p>{project.tech.join(" · ")}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
