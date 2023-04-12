import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nextjs,
  nodejs,
  git,
  twitter,
  google,
  firebase,
  library,
  films,
  library2,
  library3,
  twitter2,
  twitter3,
  google2,
  google3,
  films2,
  films3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Twitter Mitosis",
    id: "1",

    description:
      "A Twitter clone, which uses Firebase to allow image, gif and text posts; commenting on tweets; liking tweets and messaging other users. Users can login via google. It has an accurate, responsive design, powered by Tailwind.",
    tags: [
      "NextJS",
      "NextAuth",
      "Tailwind",
      "Firebase",
      "Recoil",
    ],
    image: twitter,
    image2: twitter2,
    image3: twitter3,
    direct_link: "https://twitter-mitosis.vercel.app/",
    github_link: "https://github.com/liveMehdi/twitter-mitosis",
  },
  {
    name: "Google Mitosis",
    id: "2",
    description:
      "A Google clone, which fetched results from the Google API and displays them via server-side rendering. Features include searching text, searching images, and pagination. It has an accurate, responsive design, powered by Tailwind.",
    tags: [
      "NextJS",
      "Google API",
      "Tailwind",
    ],
    image: google,
    image2: google2,
    image3: google3,
    direct_link: "https://google-mitosis.vercel.app/",
    github_link: "https://github.com/liveMehdi/google-mitosis",
  },
  {
    name: "Emerald Films",
    id: "3",

    description:
      "A movie database application which uses TMDB API and Axios to fetch movies and display their details. Features include searching and browsing movies, cast, favorating and pagination - all in a modern, responsive and user-friendly environment.",
    tags: [
      "React",
      "TMDB API",
      "Tailwind",
    ],
    image: films,
    image2: films2,
    image3: films3,
    direct_link: "https://emerald-films.vercel.app/",
    github_link: "https://github.com/liveMehdi/emerald-films",
  },
  {
    name: "Purple Library",
    id: "4",

    description:
      "An online library application, which uses a mock API to render different books. Features include filtering, adding books to cart, animations on scroll, and a modern, responsive UI.",
    tags: ["React", "CSS", "Animations"],
    image: library,
    image2: library2,
    image3: library3,

    direct_link: "https://purple-library.vercel.app/",
    github_link: "https://github.com/liveMehdi/PurpleLibrary",
  },
];

export { technologies, projects };
