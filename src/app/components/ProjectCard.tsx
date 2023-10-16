import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { arrow, mockup } from "../assets";

const ProjectCard = ({
  id,
  title,
  categories,
  image,
  bgColor,
  github,
  live,
}: {
  id: number;
  title: string;
  categories: string[];
  image: StaticImageData;
  bgColor: string;
  github: string;
  live: string;
}) => {
  return (
    <div
      className={`${bgColor} xl:px-28 py-11 rounded-3xl flex justify-between items-center flex-col xl:flex-row`}
    >
      <div className="xl:py-11 text-white xl:w-1/3 w-3/4 flex flex-col xl:gap-5 gap-4 justify-between">
        <p className="heading6">{title}</p>
        <ul className="flex gap-2 sm:gap-5">
          {categories.map((category, index) => (
            <li
              key={index}
              className="bg-white/20 sm:p-2 p-1.5 rounded-md text-center sm:text-sm text-xs font-medium"
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="flex gap-6 xl:mt-8 mt-3">
          <Link
            href={github}
            className="font-semibold flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>View on Github</span>
          </Link>
          <Link
            href={live}
            className="font-semibold flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdPreview />
            <span>Live Preview</span>
          </Link>
        </div>
      </div>
      <Image
        src={image}
        alt={title}
        className="w-3/4 sm:px-0 sm:w-2/3 md:w-2/4 mt-8 xl:mt-0 rounded-3xl shadow-xl"
      />
    </div>
  );
};

export default ProjectCard;
