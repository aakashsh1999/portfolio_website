import React, { useEffect, useState } from "react";

/** Dennis Snellenberg-style multilingual hello rotator */
const GREETINGS = [
  "Hello",
  "Bonjour",
  "नमस्ते",
  "Ciao",
  "Olá",
  "Hallo",
  "Hola",
  "こんにちは",
];

const GreetingCycle = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIndex((i) => (i + 1) % GREETINGS.length);
        setPhase("in");
      }, 320);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`greeting-cycle is-${phase}`} aria-live="polite">
      {GREETINGS[index]}
    </span>
  );
};

export default GreetingCycle;
