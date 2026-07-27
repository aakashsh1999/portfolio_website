import React from "react";
import { heliumAttrs } from "../helium-animation/utils";

/** Word/letter stagger reveal — keeps each word on one line */
const SplitText = ({
  text,
  as: Tag = "span",
  className = "",
  mode = "words",
  animation = "textRevealUp",
}) => {
  if (mode === "chars") {
    // Animate letters inside a single nowrap word so names never break mid-word
    return (
      <Tag
        className={`split-text split-text--chars ${className}`}
        aria-label={text}
      >
        <span className="split-text__word" aria-hidden="true">
          {Array.from(text).map((char, i) => (
            <span className="split-text__mask" key={`${char}-${i}`}>
              <span
                className="split-text__unit"
                {...heliumAttrs(animation, {
                  viewSettings: { once: true },
                  transitionSettings: {
                    duration: 0.85,
                    delay: i * 0.03,
                    easing: [0.16, 1, 0.3, 1],
                  },
                })}
              >
                {char}
              </span>
            </span>
          ))}
        </span>
      </Tag>
    );
  }

  const parts = text.split(" ");

  return (
    <Tag className={`split-text ${className}`} aria-label={text}>
      {parts.map((part, i) => (
        <span className="split-text__mask" key={`${part}-${i}`} aria-hidden="true">
          <span
            className="split-text__unit"
            {...heliumAttrs(animation, {
              viewSettings: { once: true },
              transitionSettings: {
                duration: 0.85,
                delay: i * 0.06,
                easing: [0.16, 1, 0.3, 1],
              },
            })}
          >
            {part}
            {"\u00A0"}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
