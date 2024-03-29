import {
  pathfindingVisualizer,
  sortingVisualizer,
  spaceSightings,
} from "../assets";

// Hero Section
export const profile = {
  name: "Daniel",
  title: "Software Developer",
  location: "Romania",
  about:
    "I'm a web developer driven by a deep passion for technology and space.",
  gmail: "leontedaniel37@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-leonte/",
  github: "https://github.com/danieLLeonte",
};

// About Section - Services
export const services = [
  {
    title: "Frontend Development",
    description:
      "Rich experience with HTML, CSS, JavaScript. I have also built many projects using React and Tailwind.",
  },
  {
    title: "Backend Development",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
  },
  {
    title: "UI/UX Design",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
  },
  {
    title: "Mobile Apps",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
  },
];

// About Section - Work Experience
export const workExperience = [
  {
    id: 0,
    title: "Full Stack Developer",
    company: "JSM Masterclass (Bootcamp)",
    time: "6 months",
    description: [
      "Collaborated with international teams on MERN stack projects.",
    ],
  },
  {
    id: 1,
    title: "Frontend Developer",
    company: "eJump Media",
    time: "1 year",
    description: ["Developed UI using React/React Native."],
  },
  {
    id: 2,
    title: "Indie Software Developer",
    company: "Leo Games",
    time: "2 years",
    description: [
      "From concept to publication, I worked on mobile game development using Unity and C#.",
    ],
  },
];

// Projects Section
export const projects = [
  {
    id: 0,
    title: "Space Sightings",
    categories: ["NASA API", "React.js"],
    image: spaceSightings,
    description: `Astronomy Picture of the Day`,
    bgColor: "bg-[#1F1D2B]",
    github: "https://github.com/danieLLeonte/space-sightings",
    live: "https://mellifluous-parfait-974ecd.netlify.app/",
  },
  {
    id: 1,
    title: "Pathfinding Visualizer",
    categories: ["Graphs", "Algorithms"],
    image: pathfindingVisualizer,
    description: `Visualize how pathfinding algorithms work`,
    bgColor: "bg-[#5F9FFE]",
    github: "https://github.com/danieLLeonte/pathfinding-visualizer",
    live: "https://danielleonte.github.io/pathfinding-visualizer/",
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    categories: ["Sorting", "Algorithms"],
    image: sortingVisualizer,
    description: `Visualize how sorting algorithms work`,
    bgColor: "bg-[#56B0B9]",
    github: "https://github.com/danieLLeonte/sorting-visualizer",
    live: "https://danielleonte.github.io/sorting-visualizer/",
  },
];

export const links = [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "About Me",
  //   path: "#about",
  // },
  {
    name: "Work",
    path: "#work",
  },
  {
    name: "Projects",
    path: "#projects",
  },
];
