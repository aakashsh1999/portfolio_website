import React from "react";
import { Link } from "react-scroll";

const StatusPill = () => {
  return (
    <Link
      to="contact"
      spy
      smooth
      offset={-72}
      className="status-pill"
      aria-label="Available for work — contact"
    >
      <span className="status-pill__dot" />
      Available for work
    </Link>
  );
};

export default StatusPill;
