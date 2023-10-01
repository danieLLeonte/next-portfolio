import { pathfindingVisualizer, sortingVisualizer } from "../assets";

// Hero Section
export const profile = {
  name: "Daniel",
  title: "Software Engineer",
  location: "Romania",
  about:
    "From mobile game development, I transitioned to frontend web development. Now, I am exploring the fundamentals of computer science.",
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
      "Master ipsum dolor sit amet, consectetur adipiscing elit.",
      "Class ipsum dolor sit amet, consectetur adipiscing.",
      "Experience ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 1,
    title: "Frontend Developer",
    company: "eJump Media",
    time: "1 year",
    description: [
      "eJump ipsum dolor sit amet, consectetur adipiscing.",
      "Media ipsum dolor sit amet, consectetur adipiscing elit.",
      "Digital ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 2,
    title: "Indie Game Developer",
    company: "Leo Games",
    time: "2 years",
    description: [
      "Indie ipsum dolor sit amet, consectetur adipiscing elit.",
      "Leo ipsum dolor sit amet, consectetur adipiscing elit.",
      "Games ipsum dolor sit amet, consectetur adipiscing.",
    ],
  },
];

// Projects Section
export const projects = [
  {
    id: 0,
    title: "Pathfinding Visualizer",
    categories: ["Graphs", "Algorithms"],
    image: pathfindingVisualizer,
    description: `Visualize how pathfinding algorithms work - Dijkstra's Algorithm`,
    bgColor: "bg-[#56B0B9]",
  },
  {
    id: 1,
    title: "Sorting Visualizer",
    categories: ["Sorting", "Algorithms"],
    image: sortingVisualizer,
    description: `Visualize how sorting algorithms work - Merge Sort`,
    bgColor: "bg-[#5F9FFE]",
  },
];

export const links = [
  {
    name: "Home",
    path: "",
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
