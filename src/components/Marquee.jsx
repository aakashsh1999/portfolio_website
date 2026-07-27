import React from "react";

const ITEMS = [
  "Motion craft",
  "Next.js",
  "React",
  "React Native",
  "Helium Builder",
  "Noise × gonoise",
  "Leaf Studios",
  "FIKN",
  "Lumineve",
  "Product engineering",
  "Backend APIs",
  "AI interfaces",
];

const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
