import React from "react";
import { experience, education, resumeProjects } from "../data/experience";
import { heliumAttrs } from "../helium-animation/utils";
import { RESUME_URL } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="section section--experience">
      <div className="container experience">
        <header className="section__header">
          <p className="eyebrow" {...heliumAttrs("fade")}>
            Experience
          </p>
          <h2 {...heliumAttrs("blurScaleIn")}>Work history</h2>
          <p className="section__lead" {...heliumAttrs("bottomFadeIn")}>
            Roles and shipped work from my resume — Helium, Vaionex, and
            Cloudstok.
          </p>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost experience__resume"
            {...heliumAttrs("fade")}
          >
            Download resume
          </a>
        </header>

        <ol className="experience__list">
          {experience.map((role, index) => (
            <li
              key={role.company}
              className="experience__item"
              {...heliumAttrs("slideInUp", {
                viewSettings: { once: true },
                transitionSettings: {
                  duration: 0.7,
                  delay: index * 0.05,
                },
              })}
            >
              <div className="experience__meta">
                <span className="experience__period">{role.period}</span>
                <span className="experience__location">{role.location}</span>
              </div>
              <div className="experience__body">
                <h3>
                  {role.title}
                  <span> · {role.company}</span>
                </h3>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {role.projects?.length > 0 && (
                  <div className="experience__projects">
                    <strong>Projects</strong>
                    <ul>
                      {role.projects.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="experience__tags">
                  {role.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div
          className="experience__extras"
          {...heliumAttrs("slideInUp", {
            viewSettings: { once: true },
            transitionSettings: { duration: 0.7 },
          })}
        >
          <div className="experience__resume-projects">
            <h3>Selected projects (resume)</h3>
            <ul>
              {resumeProjects.map((project) => (
                <li key={project.title}>
                  <div>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="experience__project-title">
                        {project.title}
                      </span>
                    )}
                    <p>{project.description}</p>
                    <div className="experience__tags">
                      {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="experience__education">
            <h3>Education</h3>
            <p>
              <strong>{education.degree}</strong>
              <br />
              {education.school}
              <br />
              <span>{education.period}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
