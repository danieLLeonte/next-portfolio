import Image from "next/image";
import Link from "next/link";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { arrow, mockup } from "../assets";

const categories = ["UI/UX", "Fullstack"];

const ProjectCard = () => {
  return (
    <div className="bg-primary xl:px-28 py-11 rounded-3xl flex justify-between items-center flex-col xl:flex-row">
      <div className="xl:py-11 text-white xl:w-1/3 w-3/4 flex flex-col xl:gap-7 gap-4 justify-between">
        <h6 className="heading6">Real Estate Agency Website</h6>
        <p className="body2 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sit
          amet ultricies lorem ipsum sed nunc.
        </p>
        <div className="flex gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/20 p-2 rounded-md text-center text-sm font-medium"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex gap-6 xl:mt-8 mt-3">
          {/* figure out later if add projects links: smflex added intentionally */}
          <div className="smflex gap-4 hidden text-2xl"> 
            <MdPreview />
            <FaGithub />
          </div>
          <Link
            href="/case-study"
            className="font-bold flex items-center gap-2"
          >
            <p>Case Study</p>
            <Image src={arrow} alt="arrow" width={35} height={35} />
          </Link>
        </div>
      </div>
      <Image
        src={mockup}
        alt="mockup"
        className="px-11 sm:px-0 sm:w-2/3 md:w-2/4 mt-8 xl:mt-0"
      />
    </div>
  );
};

export default ProjectCard;
