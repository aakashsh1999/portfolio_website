import { useEffect } from "react";
import { AnimationHandler } from "./scripts";

export function SetupAnimation() {
  useEffect(() => {
    document.querySelectorAll("[data-helium-animation-added]").forEach((el) => {
      el.removeAttribute("data-helium-animation-added");
    });

    const run = () => AnimationHandler.init();

    // Bind after paint + once more after layout/Lenis settle
    const t1 = setTimeout(run, 60);
    const t2 = setTimeout(run, 400);
    const t3 = setTimeout(run, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return null;
}

export { heliumAttrs, customAnimationAttrs } from "./utils";
