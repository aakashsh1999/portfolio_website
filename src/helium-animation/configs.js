export const configs = {
  float: {
    animation: { translateY: [15, 0, 15] },
    transitionSettings: {
      duration: 2,
      easing: "easeInOut",
      repeat: Infinity,
    },
  },
  wiggle: {
    animation: {
      x: [0, -2, 2, -2, 2, 0],
      rotateZ: [0, 20, -20, 20, -20, 0],
      opacity: 1,
    },
    transitionSettings: {
      duration: 0.5,
      easing: [0.17, 0.55, 0.55, 1],
    },
  },
  blurScaleIn: {
    animation: {
      opacity: [0, 1],
      filter: ["blur(10px)", "blur(0px)"],
      transform: ["scale(0.9)", "scale(1)"],
    },
    transitionSettings: {},
  },
  bottomFadeIn: {
    animation: {
      opacity: [0, 1],
      translateY: [100, 0],
    },
    transitionSettings: { duration: 0.5 },
  },
  widthExpand: {
    animation: { scaleX: [0, 1], opacity: [0, 1] },
    transitionSettings: { duration: 2, easing: [0.16, 1, 0.3, 1] },
  },
  revealLeftToRight: {
    animation: {
      clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
      opacity: [0, 1],
    },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  revealRightToLeft: {
    animation: {
      clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"],
      opacity: [0, 1],
    },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  revealTopToBottom: {
    animation: {
      clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
      opacity: [0, 1],
    },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  revealBottomToTop: {
    animation: {
      clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"],
      opacity: [0, 1],
    },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  textRevealUp: {
    animation: { y: ["100%", "0%"], opacity: [0, 1] },
    transitionSettings: { duration: 1, easing: [0.16, 1, 0.3, 1] },
  },
  textRevealDown: {
    animation: { y: ["-100%", "0%"], opacity: [0, 1] },
    transitionSettings: { duration: 1, easing: [0.16, 1, 0.3, 1] },
  },
  fade: {
    animation: { opacity: [0, 1] },
    transitionSettings: { duration: 1, easing: [0.16, 1, 0.3, 1] },
  },
  textRevealLeft: {
    animation: { x: ["-100%", "0%"], opacity: [0, 1] },
    transitionSettings: { duration: 1, easing: [0.16, 1, 0.3, 1] },
  },
  textRevealRight: {
    animation: { x: ["100%", "0%"], opacity: [0, 1] },
    transitionSettings: { duration: 1, easing: [0.16, 1, 0.3, 1] },
  },
  slideInLeft: {
    animation: { x: [-50, 0], opacity: [0, 1] },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  slideInRight: {
    animation: { x: [50, 0], opacity: [0, 1] },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  slideInUp: {
    animation: { y: [50, 0], opacity: [0, 1] },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  slideInDown: {
    animation: { y: [-50, 0], opacity: [0, 1] },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  curtainLeft: {
    animation: { x: ["-20%", "-100%"] },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
  curtainRight: {
    animation: { x: ["60%", "100%"] },
    transitionSettings: { duration: 1.2, easing: [0.22, 1, 0.36, 1] },
  },
};
