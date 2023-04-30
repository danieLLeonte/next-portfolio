"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { fakeData } from "@/app/constants";
import { mockup } from "@/app/assets";

const CaseStudyPage = ({ params }: { params: { id: string } }) => {
  const {
    title,
    description,
    type,
    stack,
    live,
    descriptionPurpose,
    stackBox,
    descriptionStack,
  } = fakeData;

  return (
    <motion.div
      whileInView={{ opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="sm:py-28 py-24 xl:py-0 max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-24 mt-24 flex flex-col gap-10 items-center justify-center sm:justify-start sm:items-start"
    >
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
      <Image src={mockup} alt={title + " hero"} />
      <h2 className="font-bold sm:text-[1.7rem] text-xl text-textPrimary sm:leading-[5.4rem] leading-10">
        Project Purpose and Goal
      </h2>
      <p className="w-2/3">{descriptionPurpose}</p>
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
          <p className="">{descriptionStack}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyPage;
