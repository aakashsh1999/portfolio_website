import { inView, animate, scroll, transform } from "motion";
import { configs } from "./configs";
import { preloadImages } from "./utils";

const TRANSFORM_KEYS = new Set([
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
]);

function applyInitialStyles(element, animation = {}) {
  Object.keys(animation).forEach((key) => {
    const value = animation[key];
    if (!Array.isArray(value)) return;

    if (key === "opacity") {
      element.style.opacity = String(value[0]);
      return;
    }
    if (key === "filter") {
      element.style.filter = String(value[0]);
      return;
    }
    if (key === "clipPath") {
      element.style.clipPath = String(value[0]);
      return;
    }
    if (key === "transform") {
      element.style.transform = String(value[0]);
      return;
    }
    if (TRANSFORM_KEYS.has(key)) {
      // Keep motion-friendly vars; also mirror into transform for first paint
      const v = value[0];
      if (key === "y" || key === "translateY") {
        element.style.transform = `translateY(${typeof v === "number" ? `${v}px` : v})`;
      } else if (key === "x" || key === "translateX") {
        element.style.transform = `translateX(${typeof v === "number" ? `${v}px` : v})`;
      } else if (key === "scale" || key.startsWith("scale")) {
        element.style.transform = `scale(${v})`;
      }
    }
  });
}

function forceVisible(element) {
  if (!element) return;
  element.style.opacity = "1";
  element.style.filter = "none";
  element.style.transform = "none";
  element.style.clipPath = "none";
}

export class AnimationHandler {
  static animations = {};
  static fallbackTimer = null;

  static init() {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-helium-animation]").forEach(forceVisible);
      return;
    }

    this.attachAnimation();

    // Safety: never leave content washed out / invisible if inView missed
    clearTimeout(this.fallbackTimer);
    const reveal = () => {
      document.querySelectorAll("[data-helium-animation]").forEach((el) => {
        const opacity = Number(window.getComputedStyle(el).opacity);
        if (opacity < 0.95) forceVisible(el);
      });
    };
    this.fallbackTimer = setTimeout(reveal, 900);
    setTimeout(reveal, 2000);
  }

  static getElements() {
    return Array.from(document.querySelectorAll("[data-helium-animation]"));
  }

  static animate = ({ id, options = { reverse: false } }) => {
    const config = this.animations[id];
    if (!config?.element) return;

    if (config.mode === "number") {
      const initialValue = config.element.innerHTML;
      const number = parseInt(initialValue, 10);
      const numberToColor = transform([0, 100], [0, number]);
      return animate(0, 100, {
        ...config.transitionSettings,
        ease: "circOut",
        onUpdate: (latest) => {
          config.element.innerHTML = Math.floor(numberToColor(latest));
        },
      });
    }

    if (options.reverse) {
      return animate(
        config.element,
        this.reverseAnimation(config.animation),
        config.transitionSettings
      );
    }
    return animate(config.element, config.animation, config.transitionSettings);
  };

  static attachAnimation() {
    this.getElements().forEach((element) => {
      if (element.getAttribute("data-helium-animation-added") === "true") {
        return;
      }

      const animationName = element.getAttribute("data-helium-animation");
      const animation = configs[animationName] || {};
      let options = {};
      const id =
        element.getAttribute("data-helium-animation-id") ??
        "h-" + (Math.random() * 1000000).toFixed(0);
      element.setAttribute("data-helium-animation-id", id);

      try {
        options = JSON.parse(
          element.getAttribute("data-helium-animation-options") || "{}"
        );
      } catch (e) {
        // ignore
      }

      const finalAnimationOptions = {
        ...options,
        animation: { ...animation?.animation, ...options.animation },
        transitionSettings: {
          ...animation?.transitionSettings,
          ...options.transitionSettings,
        },
      };

      this.animations[id] = {
        element,
        ...options,
        ...finalAnimationOptions,
      };

      if (finalAnimationOptions.animation) {
        this.attachAnimationToElement({ id });
      }
    });
  }

  static attachAnimationToElement({ id }) {
    const animationOptions = this.animations[id];
    const element = animationOptions.element;
    if (!element) return;

    const trigger = element.getAttribute("data-helium-animation-trigger");
    applyInitialStyles(element, animationOptions.animation || {});

    if (!trigger) {
      this.animate({ id, options: { reverse: false } });
    } else if (trigger === "view") {
      this.addViewAnimation({ id });
    } else if (trigger === "scroll") {
      this.addScrollAnimation({ id });
    }

    element.setAttribute("data-helium-animation-added", "true");
  }

  static addScrollAnimation({ id }) {
    const animationOptions = this.animations[id];
    const element = animationOptions.element;
    const isAsset = animationOptions.mode === "asset";

    if (!isAsset) {
      if (animationOptions?.scrollOptions?.timeline) {
        this.addScrollWithTimeline({ id });
      } else {
        const scrollRef = element.getAttribute("data-helium-scroll-ref");
        const ref = document.getElementById(scrollRef);
        if (ref) {
          scroll(this.animate({ id, options: { reverse: false } }), {
            target: ref,
          });
        }
      }
    } else {
      this.addImgScrollAnimation({ id });
    }
  }

  static addScrollWithTimeline({ id }) {
    const animationOptions = this.animations[id];
    const scrollRef = animationOptions.element.getAttribute(
      "data-helium-scroll-ref"
    );
    const ref = document.getElementById(scrollRef);
    if (!ref) return;

    const [entry, exit] = animationOptions?.scrollOptions?.timeline || [0, 1];
    let mode = 0;
    scroll(
      (percentage) => {
        if (mode === 0 && percentage > entry && percentage < exit) {
          this.animate({ id, options: { reverse: false } });
          mode = 1;
        } else if (
          mode === 1 &&
          (percentage <= entry || percentage >= exit) &&
          typeof exit === "number"
        ) {
          this.animate({ id, options: { reverse: true } });
          mode = 0;
        }
      },
      { target: ref }
    );
  }

  static addImgScrollAnimation({ id }) {
    const animationOptions = this.animations[id];
    const element = animationOptions.element;
    const scrollRef = element.getAttribute("data-helium-scroll-ref");
    const ref = document.getElementById(scrollRef);
    if (!ref) return;

    const assetList = [];
    try {
      assetList.push(
        ...JSON.parse(element.getAttribute("data-helium-asset-list") || "[]")
      );
    } catch (e) {
      // ignore
    }

    setTimeout(() => preloadImages(assetList), 0);
    const length = assetList.length;

    scroll(
      (percentage) => {
        const index = Math.floor(percentage * (length - 1));
        element.src = assetList[index];
      },
      { target: ref }
    );
  }

  static addViewAnimation({ id }) {
    const animationOptions = this.animations[id];
    const element = animationOptions.element;
    let hasRan = false;

    // If already on screen when mounted, animate immediately
    const rect = element.getBoundingClientRect();
    const inViewport =
      rect.top < window.innerHeight * 0.95 && rect.bottom > 0;

    const run = () => {
      if (hasRan && animationOptions?.viewSettings?.once) return;
      this.animate({ id, options: { reverse: false } });
      hasRan = true;
    };

    if (inViewport) {
      requestAnimationFrame(run);
    }

    inView(
      element,
      () => {
        run();
        if (animationOptions?.viewSettings?.once) {
          return () => {};
        }
        return () => this.animate({ id, options: { reverse: true } });
      },
      { margin: "0px 0px -10% 0px", ...animationOptions.viewOptions }
    );
  }

  static reverseAnimation(config) {
    const newConfig = { ...config };
    Object.keys(newConfig).forEach((key) => {
      if (Array.isArray(newConfig[key])) {
        newConfig[key] = [...newConfig[key]].reverse();
      }
    });
    return newConfig;
  }
}
