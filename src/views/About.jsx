import React from "react";
import { techStack } from "../constants";
import { summary } from "../data/experience";
import { heliumAttrs } from "../helium-animation/utils";

const About = () => {
  return (
    <section id="about" className="section section--about">
      <div className="container">
        <header className="section__header">
          <p className="eyebrow" {...heliumAttrs("fade")}>
            About
          </p>
          <h2 {...heliumAttrs("blurScaleIn")}>How I work</h2>
          <p className="section__lead" {...heliumAttrs("bottomFadeIn")}>
            {summary}
          </p>
        </header>

        <div className="about__grid">
          <div className="about__copy" {...heliumAttrs("slideInLeft")}>
            <p>
              At Helium I ship product experiences and analytics with Next.js,
              React, and backend services — including Noise on gonoise.com, Leaf
              Studios, Honasa brands FIKN and Lumineve, and the Impulse
              dashboard. Before that, at Vaionex I built AI-powered web
              interfaces and D3 knowledge-graph tools, and at Cloudstok I led
              delivery across 12 client web and mobile projects.
            </p>
            <p>
              I care about performance, accessible interaction, and motion that
              clarifies hierarchy. Day to day that means React, Next.js,
              TypeScript, GraphQL/APIs, and React Native when the product needs
              mobile.
            </p>
          </div>

          <div className="about__skills" {...heliumAttrs("slideInRight")}>
            <h3>Technologies</h3>
            <ul className="skill-list">
              {techStack.map((el) => (
                <li key={el.name}>
                  <img src={el.link} alt="" width={28} height={28} />
                  <span>{el.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
