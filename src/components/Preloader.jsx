import { useEffect, useState } from "react";
import Logo from "./Logo";

const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setCount(100);
      setLeaving(true);
      setTimeout(() => onDone?.(), 700);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return undefined;
    }

    let current = 0;
    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 6;
      if (current >= 100) {
        clearInterval(timer);
        finish();
      } else {
        setCount(current);
      }
    }, 35);

    const hard = setTimeout(finish, 2800);

    return () => {
      clearInterval(timer);
      clearTimeout(hard);
    };
  }, [onDone]);

  return (
    <div className={`preloader ${leaving ? "is-leaving" : ""}`}>
      <div className="preloader__inner">
        <div className="preloader__logo">
          <Logo size={56} />
        </div>
        <p className="preloader__brand">Akash Sharma</p>
        <div className="preloader__count">{String(count).padStart(3, "0")}</div>
        <div className="preloader__bar">
          <span style={{ width: `${count}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
