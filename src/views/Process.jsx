import React from "react";
import { heliumAttrs } from "../helium-animation/utils";

const STEPS = [
  {
    title: "Discover",
    body: "Map the product story, constraints, and conversion goals before a single component ships.",
  },
  {
    title: "Design systems",
    body: "Define type, motion language, and interaction rules so every screen feels coherent.",
  },
  {
    title: "Build in motion",
    body: "Implement with React/Next, Helium animation craft, and performance-first patterns.",
  },
  {
    title: "Ship & refine",
    body: "Launch, measure, and iterate — polish micro-interactions until the experience feels inevitable.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section section--process">
      <div className="container">
        <header className="section__header">
          <p className="eyebrow" {...heliumAttrs("fade")}>
            Process
          </p>
          <h2 {...heliumAttrs("blurScaleIn")}>How I take ideas to production</h2>
          <p className="section__lead" {...heliumAttrs("bottomFadeIn")}>
            A repeatable loop used on Noise PDPs, client sites, and product apps.
          </p>
        </header>

        <ol className="process__list">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="process__item"
              {...heliumAttrs("slideInUp", {
                viewSettings: { once: true },
                transitionSettings: {
                  duration: 0.7,
                  delay: i * 0.08,
                },
              })}
            >
              <span className="process__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <i className="process__line" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
