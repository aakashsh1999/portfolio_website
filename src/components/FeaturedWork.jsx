import React, { useState } from "react";
import { featuredProjects } from "../data/projects";
import { heliumAttrs } from "../helium-animation/utils";

const FeaturedWork = () => {
  const [active, setActive] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="featured-work" onMouseMove={onMove}>
      <header className="section__header">
        <p className="eyebrow" {...heliumAttrs("fade")}>
          Selected work
        </p>
        <h2 {...heliumAttrs("blurScaleIn")}>Brand product experiences</h2>
        <p className="section__lead" {...heliumAttrs("bottomFadeIn")}>
          High-conversion brand launches — Noise, Leaf, FIKN, and Lumineve —
          motion-led storytelling with Next.js, React, and Helium.
        </p>
      </header>

      <div
        className={`featured-preview ${active ? "is-visible" : ""}`}
        style={{
          transform: `translate(${cursor.x + 28}px, ${cursor.y - 120}px)`,
        }}
        aria-hidden="true"
      >
        {active && <img src={active.image} alt="" />}
      </div>

      <ul className="featured-list">
        {featuredProjects.map((project, index) => (
          <li
            key={project.id}
            className="project-row"
            onMouseEnter={() => setActive(project)}
            onMouseLeave={() => setActive(null)}
            {...heliumAttrs("slideInUp", {
              viewSettings: { once: true },
              transitionSettings: {
                duration: 0.75,
                delay: index * 0.08,
              },
            })}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-row__link"
            >
              <span className="project-row__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-row__copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-card__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <span className="project-row__cta">
                View live
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedWork;
