import { DiJavascript1, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

// Hero Section
export const hero = {
  name: "Daniel",
  title: "Web Developer",
  location: "RO",
  about:
    "I am a dedicated web developer with 1+ years of experience. I have a passion for creating beautiful and functional websites. I am currently working with React, Node, and MongoDB.",
  gmail: "lgsoftware99@gmail.com",
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
    company: "JSM Masterclass",
    time: "6 months",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 1,
    title: "Frontend Developer",
    company: "eJump Media",
    time: "1 year",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    id: 2,
    title: "Indie Software Developer",
    company: "Leo Games",
    time: "2+ years",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

// Projects Section
export const projects = [
  {
    id: 1,
    title: "Real Estate Agency Website",
    categories: ["UI/UX Design", "Development"],
    image: "https://picsum.photos/200",
    bgColor: "bg-[#56B0B9]",
  },
  {
    id: 2,
    title: "Property Agent Website",
    categories: ["UI/UX Design", "Development"],
    image: "https://picsum.photos/200",
    bgColor: "bg-[#5F9FFE]",
  },
  {
    id: 3,
    title: "Movie Apps Mobile",
    categories: ["UI/UX Design", "Development"],
    image: "https://picsum.photos/200",
    bgColor: "bg-[#1F1D2B]",
  },
];

export const people = [
  {
    name: "John Doe",
    position: "CEO of Tesla",
    image: "https://picsum.photos/200",
    testimonial:
      "Lorem111 ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc.",
  },
  {
    name: "John Doe",
    position: "CEO of SpaceX",
    testimonial:
      "Lorem222 ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc.",
  },
  {
    name: "John Doe",
    position: "CEO of Apple",
    image: "https://picsum.photos/200",
    testimonial:
      "Lorem333 ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc.",
  },
];

// Case Studies
export const fakeData = {
  id: "1",
  title: "Coffe By Benjamin",
  description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
  aspernatur molestias porro fugiat id! Maxime consectetur hic
  necessitatibus quas accusantium expedita quod repudiandae molestiae eos
  eaque optio, ipsa temporibus mollitia architecto ea repellat obcaecati
  labore blanditiis velit eum. Libero ratione neque, sint ex adipisci
  facere modi placeat culpa. Sint, maiores.`,
  type: "Internship",
  stack: ["React", "Next.js", "Typescript", "Netlify", "MongoDB"],
  live: "",
  descriptionPurpose: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
  aspernatur molestias porro fugiat id! Maxime consectetur hic
  necessitatibus quas accusantium expedita quod repudiandae molestiae eos
  eaque optio, ipsa temporibus mollitia architecto ea repellat obcaecati
  labore blanditiis velit eum. Libero ratione neque, sint ex adipisci
  facere modi placeat culpa. Sint, maiores.`,
  stackBox: [
    {
      icon: <DiReact size={25} />,
      name: "React",
      color: "text-[#5ED3F3]",
    },
    {
      icon: <TbBrandNextjs size={25} />,
      name: "Next.js",
      color: "text-[#000000]",
    },
    {
      icon: <DiJavascript1 size={25} />,
      name: "JavaScript",
      color: "text-[#F0DB4F]",
    },
  ],
  descriptionStack: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
  aspernatur molestias porro fugiat id! Maxime consectetur hic
  necessitatibus quas accusantium expedita quod repudiandae molestiae eos
  eaque optio, ipsa temporibus mollitia architecto ea repellat obcaecati
  labore blanditiis velit eum. Libero ratione neque, sint ex adipisci
  facere modi placeat culpa. Sint, maiores.`,
};

export const links = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "About Me",
    path: "#about",
  },
  {
    name: "Work",
    path: "#work",
  },
  {
    name: "Projects",
    path: "#projects",
  },
];
