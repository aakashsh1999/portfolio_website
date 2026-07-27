import { configs } from "./configs";

export const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export function customAnimationConfig(obj) {
  return JSON.stringify(obj);
}

export function customAnimationAttrs(obj) {
  return {
    "data-helium-animation": "",
    "data-helium-animation-trigger": obj.type,
    "data-helium-animation-options": customAnimationConfig(obj),
  };
}

export function predefinedAnimation(animationName) {
  return configs[animationName];
}

export function predefinedAnimationAttrs(animationName) {
  return customAnimationAttrs(predefinedAnimation(animationName));
}

export const viewOnce = {
  viewSettings: { once: true },
  transitionSettings: { duration: 0.8 },
};

export function heliumAttrs(name, options = viewOnce) {
  return {
    "data-helium-animation": name,
    "data-helium-animation-trigger": "view",
    "data-helium-animation-options": JSON.stringify(options),
  };
}
