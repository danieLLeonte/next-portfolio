import Image from "next/image";

import { workBackground } from "../assets";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section className="flex items-center justify-center xl:h-screen-navbar h-auto gap-20">
      <div className="bg-textPrimary w-[607px] h-[593px] p-28 rounded-2xl relative z-0">
        <Image src={workBackground} alt="work" fill className="absolute inset-0 -z-10" />
        <h2 className="font-bold text-4xl text-white leading-[3.8rem]">
          Working <br /> experience
        </h2>
        <p className="font-medium xsm:text-base text-xs mt-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          repellendus modi ratione doloribus asperiores accusantium! Ducimus,
          numquam quae, iure hic error assumenda ipsa nam totam eius maiores
          exercitationem, rerum dolorem.
        </p>
      </div>
      <div className="gap-5 grid grid-cols-1">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </section>
  );
};

export default Work;
