import React from "react";
import Card from "../components/Card";
import FeaturedWork from "../components/FeaturedWork";
import { moreProjects } from "../data/projects";
import { heliumAttrs } from "../helium-animation/utils";

const Projects = () => {
  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <FeaturedWork />

        <header className="section__header section__header--spaced">
          <p className="eyebrow" {...heliumAttrs("fade")}>
            More work
          </p>
          <h2 {...heliumAttrs("blurScaleIn")}>Apps, products & experiments</h2>
          <p className="section__lead" {...heliumAttrs("bottomFadeIn")}>
            Client sites, mobile products, and side projects across the stack.
          </p>
        </header>

        <div className="project-grid">
          {moreProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
