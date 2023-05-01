"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

import { caseStudies } from "@/app/constants";
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

  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="sm:py-28 py-24 xl:py-0 max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-24 mt-24 flex flex-col gap-14 items-center justify-center sm:justify-start sm:items-start"
      >
        <div className="flex flex-col gap-8">
          <h1 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5rem] leading-10 text-center sm:text-left">
            {title}
          </h1>
          <p className="w-2/3">{description}</p>
          <div className="flex gap-32">
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
          <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[3.9rem] leading-10">
            Project Purpose and Goal
          </h2>
          <p className="w-2/3">{descriptionPurpose1}</p>
          {/* <br /> */}
          <p className="w-2/3">{descriptionPurpose2}</p>
        </div>
        <div className="flex justify-between items-center gap-20">
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
            <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[3.9rem] leading-10">
              Web Stack and Explanation
            </h2>
            <p>{descriptionStack1}</p>
            {/* <br /> */}
            <p>{descriptionStack2}</p>
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <div>
            <Image src={mockupCS1} width={500} height={500} alt={"mockup1"} />
            <Image src={mockupCS2} width={600} height={600} alt={"mockup2"} />
          </div>
          <Image src={mockupCS3} width={700} height={700} alt={"mockup3"} />
        </div>
        <div className="text-center px-48 flex flex-col gap-6">
          <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[3.9rem] leading-10">
            Problems and Thought Process
          </h2>
          <p>{descriptionProblems1}</p>
          {/* <br /> */}
          <p>{descriptionProblems2}</p>
        </div>
        <Image src={mockupCS1} alt={"mockup4"} className="mx-auto" />
        <div className="flex flex-col gap-6">
          <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[3.9rem] leading-10">
            Lessons Learned
          </h2>
          <p className="w-2/3">{descriptionPurpose1}</p>
        </div>
      </motion.div>
      <div className="bg-white w-full mt-32 pb-24 py-0.5">
        <div className="sm:py-28 py-24 xl:py-0 max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-24 mt-24 flex flex-col gap-28 items-center justify-center sm:justify-start sm:items-start">
          <h2 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5rem] leading-10 text-center sm:text-left">
            Other{" "}
            <span className="relative z-0">
              Projects
              <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[105%] sm:h-3.5 h-3 bg-highlight"></span>
            </span>
          </h2>
          <div className="flex justify-between gap-10 -mt-8">
            <div className="flex flex-col justify-start gap-3.5">
              <Image src={workBackground} alt={"project1"} />
              <h6 className="mt-2 font-bold sm:text-[2.2rem] text-xl text-textPrimary leading-10">
                Decore
              </h6>
              <p className="w-2/3">
                A tool design to hepl web developers build live, custom
                templates & export code
              </p>
              <Link
                href={live}
                className="font-bold text-textPrimary uppercase flex items-center gap-1"
              >
                View Project
                <IoIosArrowForward />
              </Link>
            </div>
            <div className="flex flex-col justify-start gap-3.5">
              <Image src={workBackground} alt={"project2"} />
              <h6 className="mt-2 font-bold sm:text-[2.2rem] text-xl text-textPrimary leading-10">
                Decore
              </h6>
              <p className="w-2/3">
                A tool design to hepl web developers build live, custom
                templates & export code
              </p>
              <Link
                href={live}
                className="font-bold text-textPrimary uppercase flex items-center gap-1"
              >
                View Project
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
