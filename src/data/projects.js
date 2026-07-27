export const projects = [
  {
    id: "noise-airwave",
    title: "Noise Airwave Max 6",
    description:
      "Immersive headphone product experience for Noise — horizontal feature storytelling, media-rich sections, and sticky purchase UX on gonoise.com.",
    tech: ["Next.js", "React", "Motion", "Helium"],
    liveUrl: "https://www.gonoise.com/a/h/noise-airwave-max-6-headphones",
    repoUrl: null,
    image: "/projects/noise-airwave.jpg",
    category: "noise",
    featured: true,
  },
  {
    id: "noise-master-buds-2",
    title: "Noise Master Buds 2",
    description:
      "Flagship TWS landing with variant bento grids, scroll-driven media, and conversion-focused sticky CTAs built in Helium Builder.",
    tech: ["Next.js", "React", "Framer Motion", "Helium"],
    liveUrl:
      "https://www.gonoise.com/a/h/noise-master-buds-2-truly-wireless-earbuds",
    repoUrl: null,
    image: "/projects/noise-master-buds-2.jpg",
    category: "noise",
    featured: true,
  },
  {
    id: "noise-master-buds-max",
    title: "Noise Master Buds Max",
    description:
      "Wireless headphone PDP with cinematic first-fold video, feature chapters, and a polished sticky buy bar for Noise’s Master series.",
    tech: ["Next.js", "React", "Motion", "Helium"],
    liveUrl: "https://www.gonoise.com/a/h/noise-master-buds-max",
    repoUrl: null,
    image: "/projects/noise-master-buds-max.jpg",
    category: "noise",
    featured: true,
  },
  {
    id: "fikn",
    title: "FIKN",
    description:
      "Premium elixir fragrance launch for Honasa (Mamaearth house of brands) — waitlist flows, OTP access, and a high-craft brand storefront on fikn.com.",
    tech: ["Next.js", "React", "Helium", "Motion"],
    liveUrl: "https://fikn.com/",
    repoUrl: null,
    image: "/projects/fikn.jpg",
    category: "brand",
    featured: true,
  },
  {
    id: "lumineve",
    title: "Lumineve",
    description:
      "Night-care skincare brand experience for Honasa / Mamaearth founders — science-led PDP storytelling, conversion UI, and launch-ready storefront on lumineve.in.",
    tech: ["Next.js", "React", "Helium", "Motion"],
    liveUrl: "https://lumineve.in/",
    repoUrl: null,
    image: "/projects/lumineve.jpg",
    category: "brand",
    featured: true,
  },
  {
    id: "leaf-studios",
    title: "Leaf Studios",
    description:
      "Audio brand storefront for Leaf — product storytelling, collection UX, and performance-tuned landing experiences on leafstudios.in.",
    tech: ["Next.js", "React", "Helium", "Motion"],
    liveUrl: "https://www.leafstudios.in/",
    repoUrl: null,
    image: "/projects/leaf-studios.jpg",
    category: "brand",
    featured: true,
  },
  {
    id: "meradoc",
    title: "Meradoc",
    description:
      "Production telehealth patient app — appointments, video consults, prescriptions, diagnostics, and payments for modern care workflows.",
    tech: ["React Native", "Redux", "Firebase", "100ms"],
    liveUrl: "https://www.meradoc.com",
    repoUrl: null,
    image: "/projects/meradoc.png",
    category: "mobile",
    featured: false,
  },
  {
    id: "impulse",
    title: "Impulse Analytics",
    description:
      "AI-powered growth analytics platform — dashboards, merchandising signals, and experiment tooling built with Next.js and backend APIs for Helium.",
    tech: ["Next.js", "React", "AI SDK", "Drizzle"],
    liveUrl: "https://www.gethelium.co",
    repoUrl: null,
    image: "/projects/impulse.png",
    category: "product",
    featured: false,
  },
  {
    id: "bplaw",
    title: "BPLaw",
    description:
      "Full-service law firm marketing site with practice areas, team, bilingual content, and lead capture — built for a real client.",
    tech: ["Next.js", "Tailwind", "Firebase", "i18n"],
    liveUrl: "https://github.com/aakashsh1999/Law-firm-site",
    repoUrl: "https://github.com/aakashsh1999/Law-firm-site",
    image: "/projects/bplaw.png",
    category: "web",
    featured: false,
  },
  {
    id: "agro-bazaar",
    title: "Agro Bazaar",
    description:
      "End-to-end B2B grains marketplace — Expo mobile app, Hono API, and admin for buy/sell, cart, and order flows.",
    tech: ["Expo", "Hono", "MySQL", "Vite"],
    liveUrl: "https://github.com/akash-helium/market-place-app",
    repoUrl: "https://github.com/akash-helium/market-place-app",
    image: "/projects/agro-bazaar.jpg",
    category: "mobile",
    featured: false,
  },
  {
    id: "roxy-tailor",
    title: "Roxy Tailor",
    description:
      "Cross-platform tailor business app for inventory, registration, and dashboard — Electron desktop and Capacitor mobile.",
    tech: ["React", "Vite", "Supabase", "Electron"],
    liveUrl: null,
    repoUrl: null,
    image: "/projects/roxy-tailor.png",
    category: "product",
    featured: false,
  },
  {
    id: "gully-17",
    title: "Gully 17 Launch",
    description:
      "High-craft brand launch page with scroll-driven motion, product filters, and lifestyle storytelling for Gully Labs.",
    tech: ["HTML", "CSS", "JavaScript", "Motion"],
    liveUrl: null,
    repoUrl: null,
    image: "/projects/gully-17.png",
    category: "web",
    featured: false,
  },
  {
    id: "voxel-smash",
    title: "Voxel Smash",
    description:
      "Playful AI + 3D experiment — upload an image, generate voxels with Gemini, then smash them with Three.js physics.",
    tech: ["React", "Three.js", "R3F", "Gemini"],
    liveUrl:
      "https://ai.studio/apps/drive/1AsBORk1KS90zEQedXVbtwa4DVhkGM14S",
    repoUrl: "https://github.com/aakashsh1999/voxel-smach",
    image: "/projects/voxel-smash.png",
    category: "experiment",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);
