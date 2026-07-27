import React from "react";
import { Link } from "react-scroll";
import { useMagnetic } from "../hooks/useMagnetic";
import { heliumAttrs } from "../helium-animation/utils";

/** Giant end CTA — Dennis / Awwwards footer pattern */
const BigCTA = () => {
  const magnet = useMagnetic(0.2);

  return (
    <section className="big-cta" aria-label="Call to action">
      <div className="container big-cta__inner">
        <p className="eyebrow" {...heliumAttrs("fade")}>
          Next step
        </p>
        <div {...heliumAttrs("blurScaleIn")}>
          <Link
            to="contact"
            spy
            smooth
            offset={-72}
            className="big-cta__title"
          >
            Let’s talk
          </Link>
        </div>
        <p className="big-cta__lead" {...heliumAttrs("bottomFadeIn")}>
          Have a product page, app, or experiment that needs senior-level craft?
        </p>
        <span ref={magnet} className="magnetic">
          <a
            href="mailto:aakash.sh858791@gmail.com"
            className="btn btn--primary btn--xl"
          >
            aakash.sh858791@gmail.com
          </a>
        </span>
      </div>
    </section>
  );
};

export default BigCTA;
