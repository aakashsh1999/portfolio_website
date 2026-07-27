import React, { useEffect, useRef, useState } from "react";
import { heliumAttrs } from "../helium-animation/utils";

const STATS = [
  { label: "Years shipping products", value: 5, suffix: "+" },
  { label: "Client projects at Cloudstok", value: 12, suffix: "" },
  { label: "Load time improvement", value: 30, suffix: "%" },
  { label: "Partner ROAS lift", value: 15, suffix: "%" },
];

const useCountUp = (target, active, duration = 1400) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return undefined;
    }

    let start;
    let frame;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
};

const StatItem = ({ item, active }) => {
  const value = useCountUp(item.value, active);
  return (
    <li className="stats__item">
      <strong>
        {value}
        {item.suffix}
      </strong>
      <span>{item.label}</span>
    </li>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section section--stats" ref={ref}>
      <div className="container">
        <header className="section__header">
          <p className="eyebrow" {...heliumAttrs("fade")}>
            Impact
          </p>
          <h2 {...heliumAttrs("blurScaleIn")}>Numbers that matter</h2>
        </header>
        <ul className="stats__grid" {...heliumAttrs("slideInUp")}>
          {STATS.map((item) => (
            <StatItem key={item.label} item={item} active={active} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
