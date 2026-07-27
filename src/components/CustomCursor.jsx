import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let hovering = false;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      dot.classList.add("is-active");
      ring.classList.add("is-active");
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      show();
      // Position with left/top so it always tracks viewport (not a transformed parent)
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    };

    const onOver = (e) => {
      const target = e.target.closest(
        "a, button, .magnetic, .project-row, .btn, input, textarea, label"
      );
      hovering = Boolean(target);
      ring.classList.toggle("is-hover", hovering);
    };

    let frame;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      ring.style.setProperty("--cursor-scale", hovering ? "1.7" : "1");
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>,
    document.body
  );
};

export default CustomCursor;
