import React, { useEffect, useRef } from "react";
import { heliumAttrs } from "../helium-animation/utils";

const Card = ({ project, large = false }) => {
  const mediaRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const media = mediaRef.current;
    const img = imgRef.current;
    if (!media || !img) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const onScroll = () => {
      const rect = media.getBoundingClientRect();
      const view = window.innerHeight;
      if (rect.bottom < 0 || rect.top > view) return;
      const p = (rect.top + rect.height / 2 - view / 2) / view;
      img.style.transform = `scale(1.12) translateY(${p * -18}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!project) return null;

  return (
    <article
      className={`project-card group ${large ? "project-card--large" : ""}`}
      {...heliumAttrs("slideInUp", {
        viewSettings: { once: true },
        transitionSettings: { duration: 0.7 },
      })}
    >
      <div className="project-card__media" ref={mediaRef}>
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        <div className="project-card__shade" />
        <span className="project-card__badge">
          {project.category === "noise"
            ? "Noise × Helium"
            : project.category === "brand"
              ? "Brand × Helium"
              : project.category}
        </span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              {project.category === "noise" || project.liveUrl.includes("http")
                ? "View live"
                : "Open"}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
