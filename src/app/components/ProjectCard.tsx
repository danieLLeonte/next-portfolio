import Image from "next/image";
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
}: {
  id: string;
  title: string;
  categories: string[];
  image: string;
  bgColor: string;
}) => {
  return (
    <div
      className={`${bgColor} xl:px-28 py-11 rounded-3xl flex justify-between items-center flex-col xl:flex-row`}
    >
      <div className="xl:py-11 text-white xl:w-1/3 w-3/4 flex flex-col xl:gap-5 gap-4 justify-between">
        <h6 className="heading6">{title}</h6>
        {/* <p className="body2 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sit
          amet ultricies lorem ipsum sed nunc.
        </p> */}
        <div className="flex gap-2 sm:gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/20 sm:p-2 p-1.5 rounded-md text-center sm:text-sm text-xs font-medium"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex gap-6 xl:mt-8 mt-3">
          {/* <div className="sm:flex gap-4 hidden text-2xl"> 
            <MdPreview />
            <FaGithub />
          </div> */}
          <Link
            href={`/case-study/${id}`}
            className="font-bold flex items-center gap-2"
          >
            <p>See Detail Project</p>
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
