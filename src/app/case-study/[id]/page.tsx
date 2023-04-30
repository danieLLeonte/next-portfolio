"use client";
// import { useEffect } from "react";
// useEffect(() => {
//   console.log("first");

//   return () => {
//     console.log("second");
//   };
// }, []);

import { motion } from "framer-motion";
import Link from "next/link";

const fakeData = {
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
};

const CaseStudyPage = ({ params }: { params: { id: string } }) => {
  const { title, description, type, stack, live } = fakeData;

  return (
    <motion.div
      whileInView={{ opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="sm:py-28 py-24 xl:py-0 max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-24 mt-24 flex flex-col gap-10"
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
            {stack.map((item, index) => (
              <p key={index}>{item}</p>
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
    </motion.div>
  );
};

export default CaseStudyPage;
