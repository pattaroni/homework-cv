export const profile = {
  firstName: "Oleksii",
  lastName: "Kyryk",
  status: "Student",
  about:
    "Junior Front-End Developer who enjoys building fast, clean and accessible interfaces with Next.js and TypeScript. I like turning designs into polished products and keep learning something new every day.",
  contacts: [
    {
      type: "mail",
      label: "Email",
      value: "kirikoleksiy112@gmail.com",
      href: "mailto:kirikoleksiy112@gmail.com",
    },
    {
      type: "phone",
      label: "Phone number",
      value: "+380 98 423 2007",
      href: "tel:+380984232007",
    },
    { type: "location", label: "Address", value: "Kyiv, Ukraine" },
  ],
  socials: [
    { type: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/oleksii-kyryk" },
    { type: "github", label: "GitHub", href: "https://github.com/pattaroni" },
  ],
} as const;

export const skills = [
  "HTML5",
  "CSS3 / SASS (SCSS)",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Zustand",
  "Redux",
  "Node.js",
  "Express",
  "Git, GitHub / GitLab",
];

export const codeExample = {
  fileName: "store/noteStore.ts",
  code: `import { create } from "zustand";
import { persist } from "zustand/middleware";

type Draft = { title: string; content: string; tag: string };

type NoteDraftStore = {
  draft: Draft;
  setDraft: (note: Partial<Draft>) => void;
  clearDraft: () => void;
};

const initialDraft: Draft = { title: "", content: "", tag: "Todo" };

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) =>
        set((state) => ({ draft: { ...state.draft, ...note } })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    { name: "note-draft" },
  ),
);`,
};

export const education = [
  {
    icon: "college",
    title: "College",
    items: [
      {
        name: "KAI Professional College «KAI TECH» of the National University «Kyiv Aviation Institute» (Right Bank Campus)",
        period: "2023 — 2027",
      },
    ],
  },
  {
    icon: "courses",
    title: "Courses",
    items: [{ name: "GoIT — Fullstack Developer", period: "2025 — 2026" }],
  },
] as const;

export const languages = [
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "English", level: "B1" },
];

export const projects = [
  {
    name: "NoteHub",
    description: "Notes app with authentication, search, filtering by tags and drafts.",
    stack: ["Next.js", "Auth", "Zustand", "SCSS"],
    live: "https://pattaroni-09-auth.vercel.app/",
    repo: "https://github.com/pattaroni/09-auth",
  },
  {
    name: "WeatherApp",
    description: "Weather forecast for any city with a clean responsive interface.",
    stack: ["HTML", "CSS", "TypeScript"],
    live: "https://pattaroni-weather-app.vercel.app/",
    repo: "https://github.com/pattaroni/weather-app",
  },
  {
    name: "ArtistsHub",
    description: "Landing page for discovering artists and their music.",
    stack: ["HTML", "CSS", "JavaScript", "Teamwork"],
    live: "https://pattaroni.github.io/project-Dev4L1fe/",
    repo: "https://github.com/pattaroni/project-Dev4L1fe",
  },
  {
    name: "Leleka",
    description: "Full-stack pregnancy companion app built by a team.",
    stack: ["Node.js", "Express", "Next.js", "SCSS", "Zustand", "Teamwork"],
    live: "https://04-team-final-project-frontend.vercel.app/",
    repo: "https://github.com/YehorStepanov/Leleka-frontend",
  },
];

export const navItems = [
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "code", label: "Code Examples" },
  { id: "education", label: "Education" },
  { id: "languages", label: "Languages" },
  { id: "projects", label: "Projects" },
];
