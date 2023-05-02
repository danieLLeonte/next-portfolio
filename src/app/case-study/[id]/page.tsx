"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

import { caseStudies, projects } from "@/app/constants";
import {
  mockupCS,
  mockupCS1,
  mockupCS2,
  mockupCS3,
  workBackground,
} from "@/app/assets";

const CaseStudyPage = ({ params }: { params: { id: number } }) => {
  if (!caseStudies[params.id]) return null;

  const {
    title,
    description,
    type,
    stack,
    live,
    descriptionPurpose1,
    descriptionPurpose2,
    stackBox,
    descriptionStack1,
    descriptionStack2,
    descriptionProblems1,
    descriptionProblems2,
  } = caseStudies[params.id];
  const otherProjects = projects.filter((project) => project.id != params.id);

  const SectionTitle = ({ title }: { title: string }) => (
    <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[3.9rem] leading-10">
      {title}
    </h2>
  );

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div key={project.id} className="flex flex-col justify-start gap-3.5">
      <Image src={workBackground} alt={"project1"} />
      <h6 className="mt-2 font-bold sm:text-[2.2rem] text-xl text-textPrimary leading-10">
        {project.title}
      </h6>
      <p className="w-2/3">{project.description}</p>
      <Link
        href={`/case-study/${project.id}`}
        className="font-bold text-textPrimary uppercase flex items-center gap-1"
      >
        View Project
        <IoIosArrowForward />
      </Link>
    </div>
  );

  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="py-2 pt-20 lg:pt-8 max-w-[1440px] mx-auto px-7 xsm:px-12 sm:px-12 lg:px-24 mt-2 lg:mt-24 flex flex-col gap-14 sm:gap-18 lg:gap-32 items-center justify-center sm:justify-start sm:items-start"
      >
        <div className="flex flex-col gap-8">
          <h1 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5rem] leading-[3rem] mb-4 sm:bg-0">
            {title}
          </h1>
          <p className="sm:w-2/3">{description}</p>
          <div className="w-full flex sm:gap-32 justify-between sm:justify-start flex-wrap gap-2">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-textPrimary">Type</p>
              <p className="font-medium">{type}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-textPrimary">Stack</p>
              <div className="flex flex-col gap-1.5 font-medium">
                {stack.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold text-textPrimary">Live</p>
              <Link
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight font-bold"
              >
                View Site
              </Link>
            </div>
          </div>
        </div>
        <Image src={mockupCS} alt={title + " hero"} />
        <div className="flex flex-col gap-6">
          <SectionTitle title="Project Purpose and Goal" />
          <p className="sm:w-2/3">{descriptionPurpose1}</p>
          <p className="sm:w-2/3">{descriptionPurpose2}</p>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row sm:gap-20 gap-10">
          <div className="flex flex-col items-center gap-8 basis-1/2">
            {stackBox.map((item) => (
              <div
                key={item.name}
                className={`${item.color} flex items-center gap-2 shadow-md rounded-md py-2 px-3 w-40 bg-white/40`}
              >
                {item.icon}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col gap-6">
            <SectionTitle title="Web Stack and Explanation" />
            <p>{descriptionStack1}</p>
            <p>{descriptionStack2}</p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center flex-wrap md:flex-nowrap">
          <div>
            <Image src={mockupCS1} className="md:w-[85%]" alt={"mockup1"} />
            <Image src={mockupCS2} className="md:w-[85%]" alt={"mockup2"} />
          </div>
          <Image src={mockupCS3} className="md:w-[51%]" alt={"mockup3"} />
        </div>
        <div className="sm:text-center sm:w-2/3 mx-auto flex flex-col gap-6">
          <SectionTitle title="Problems and Thought Process" />
          <p>{descriptionProblems1}</p>
          <p>{descriptionProblems2}</p>
        </div>
        <Image src={mockupCS1} alt={"mockup4"} className="mx-auto" />
        <div className="flex flex-col gap-6">
          <SectionTitle title="Lessons Learned" />
          <p className="sm:w-2/3">{descriptionPurpose1}</p>
        </div>
      </motion.div>
      <div className="bg-white w-full xl:mt-32 xl:pb-14 xl:py-0.5">
        <div className="py-24 xl:pt-0 max-w-[1440px] mx-auto px-7 xsm:px-12 sm:px-12 lg:px-24 mt-2 lg:mt-24 flex flex-col gap-14 sm:gap-18 lg:gap-32 items-center justify-center sm:justify-start sm:items-start">
          <h2 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5rem] leading-10 text-center sm:text-left">
            Other{" "}
            <span className="relative z-0">
              Projects
              <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[105%] sm:h-3.5 h-3 bg-highlight"></span>
            </span>
          </h2>
          <div className="flex justify-between gap-x-16 gap-y-14 -mt-8 flex-col sm:flex-row">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
