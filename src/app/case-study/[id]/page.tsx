"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { caseStudies } from "@/app/constants";
import { mockup } from "@/app/assets";

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
        <div className="flex flex-col gap-6">
          <h1 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5.4rem] leading-10 text-center sm:text-left">
            {title}
          </h1>
          <p className="w-2/3">{description}</p>
          <div className="flex gap-10">
            <div className="flex flex-col gap-5">
              <p>Type</p>
              <p>{type}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>Stack</p>
              <div className="flex flex-col gap-1">
                {stack.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p>Live</p>
              <Link href={live} className="text-highlight">
                View Site
              </Link>
            </div>
          </div>
        </div>
        <Image src={mockup} alt={title + " hero"} />
        <div>
          <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[5.4rem] leading-10">
            Project Purpose and Goal
          </h2>
          <p className="w-2/3">{descriptionPurpose1}</p>
          <br />
          <p className="w-2/3">{descriptionPurpose2}</p>
        </div>
        <div className="flex justify-between items-center gap-20">
          <div className="flex flex-col items-center gap-8 basis-1/2">
            {stackBox.map((item) => (
              <div
                key={item.name}
                className={`${item.color} flex items-center gap-2 shadow-md rounded-md py-2 px-3 w-40`}
              >
                {item.icon}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[5.4rem] leading-10">
              Web Stack and Explanation
            </h2>
            <p className="">{descriptionStack1}</p>
            <br />
            <p className="">{descriptionStack2}</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>
            <Image src={mockup} alt={title + " hero"} />
            <Image src={mockup} alt={title + " hero"} />
          </div>
          <Image src={mockup} alt={title + " hero"} />
        </div>
        <div className="text-center px-48">
          <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[5.4rem] leading-10">
            Problems and Thought Process
          </h2>
          <p>{descriptionProblems1}</p>
          <br />
          <p>{descriptionProblems2}</p>
        </div>
        <Image src={mockup} alt={title + " hero"} className="mx-auto" />
        <div>
          <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[5.4rem] leading-10">
            Lessons Learned
          </h2>
          <p className="w-2/3">{descriptionPurpose1}</p>
        </div>
      </motion.div>
      <div className="bg-white w-full mt-24 py-0.5">
        <div className="sm:py-28 py-24 xl:py-0 max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-24 mt-24 flex flex-col gap-28 items-center justify-center sm:justify-start sm:items-start">
          <h2 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5.4rem] leading-10 text-center sm:text-left">
            Other{" "}
            <span className="relative z-0">
              Projects
              <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[105%] sm:h-3.5 h-3 bg-highlight"></span>
            </span>
          </h2>
          <div className="flex justify-between gap-10 w-full">
            <div className="flex flex-col justify-start gap-3 basis-1/2">
              <Image src={mockup} alt={title + " hero"} />
              <h6 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[3rem] leading-10">
                Decore
              </h6>
              <p className="w-2/3">
                A tool design to hepl web developers build live, custom
                templates & export code
              </p>
              <Link href={live} className="font-bold text-textPrimary">
                View Project
              </Link>
            </div>
            <div className="flex flex-col justify-start gap-3 basis-1/2">
              <Image src={mockup} alt={title + " hero"} />
              <h6 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[3rem] leading-10">
                Decore
              </h6>
              <p className="w-2/3">
                A tool design to hepl web developers build live, custom
                templates & export code
              </p>
              <Link href={live} className="font-bold text-textPrimary">
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
