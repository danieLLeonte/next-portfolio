"use client";
import { useState } from "react";
import { workExperience } from "../constants";
import AppWrap from "../wrapper/AppWrap";
import WorkCard from "./WorkCard";

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(0);
  return (
    <section className="flex items-center lg:justify-between flex-col lg:flex-row h-auto gap-5 pt-20">
      <div className="bg-textPrimary xl:w-[607px] lg:w-[500px] md:w-[600px] sm:w-[500px] xsm:w-[340px] w-[290px] lg:h-[593px] xl:p-28 xsm:p-12 p-8 rounded-2xl flex flex-col justify-center relative">
        <div className="h-3.5 w-3.5 bg-[#99E0FF] rounded-full absolute lg:right-24 lg:top-28 right-16 top-10" />
        <h6 className="heading6">
          Working <br />
          <span className="relative z-0">
            experience
            <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[70%] sm:h-3.5 h-3 bg-highlight/25"></span>
          </span>
        </h6>
        <div className="body2 my-7 pb-2 flex gap-2 flex-col">
          <p className="text-xl">{workExperience[selectedWork].company}</p>
          <ul className="mt-3">
            {workExperience[selectedWork].description.map((point, index) => (
              <li className="flex gap-2" key={index}>
                <span className="h-1.5 w-1.5 bg-[#99E0FF] rounded-full md:mt-2.5 sm:mt-1 mt-1.5 pr-1.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-11 w-11 bg-white rounded-full absolute right-[9.6rem] bottom-[6rem] hidden min-[1400px]:block">
          <div className="h-[70px] w-[70px] border border-white/20 rounded-full absolute -left-[0.8rem] -top-[0.8rem]" />
          <div className="w-[286px] border border-white/20 absolute right-[3.55rem] bottom-[1.3rem]" />
        </div>
        <div className="pacman absolute lg:left-[6.7rem] lg:bottom-8 left-42 bottom-3" />
      </div>
      <div className="lg:gap-[35px] gap-6 flex flex-col">
        {workExperience.map((item, index) => (
          <WorkCard key={index} {...item} setSelectedWork={setSelectedWork} />
        ))}
      </div>
    </section>
  );
};

export default AppWrap(Work, "work", "bg-white");
