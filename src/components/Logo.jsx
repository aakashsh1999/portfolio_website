import React from "react";

/**
 * Sky Peak — geometric A mark.
 * "Akash" means sky; apex + horizon bar read as ascent / craft.
 * currentColor + --accent adapt to light/dark themes.
 */
const Logo = ({ size = 40, className = "", title = "Akash Sharma" }) => (
  <svg
    className={`site-logo ${className}`}
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="logo-title logo-desc"
  >
    <title id="logo-title">{title}</title>
    <desc id="logo-desc">
      Geometric letter A with a horizon bar — Akash Sharma mark
    </desc>

    <rect
      x="2.5"
      y="2.5"
      width="59"
      height="59"
      rx="16"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.88"
    />

    {/* A with punched counter (evenodd) */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 13.5 L49.8 50 H43.1 L39.35 40.2 H24.65 L20.9 50 H14.2 L32 13.5Z M32 22.2 L36.85 34.6 H27.15 Z"
      fill="currentColor"
    />

    {/* Horizon / sky accent */}
    <rect
      x="23.2"
      y="36.4"
      width="17.6"
      height="3.6"
      rx="1.2"
      fill="var(--accent, #8ec5ff)"
    />

    {/* Apex spark */}
    <circle cx="32" cy="10.2" r="2.1" fill="var(--accent, #8ec5ff)" />
  </svg>
);

export default Logo;
