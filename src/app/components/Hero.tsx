import Image from "next/image";

import { lineDirection, mars } from "../assets";
import AppWrap from "../wrapper/AppWrap";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import { profile } from "../constants";

const Hero = () => {
  const { name, title, location, about, gmail, linkedin, github } =
    profile

  return (
    <section className="flex justify-between flex-col lg:flex-row gap-20 items-center mt-24 lg:mt-0 lg:h-screen-navbar">
      <div className="flex-1 flex flex-col gap-y-9 items-center lg:items-start">
        <h2 className="font-bold uppercase text-primary tracking-[.5em] text-xs xl:text-base">
          Hi, I am {name}
        </h2>
        <h1 className="sm:font-bold font-[800] xl:text-[3.5rem] md:text-[2.3rem] text-4xl text-textPrimary xl:leading-[5.4rem] leading-[155%] text-center lg:text-left">
          Dedicated <br />
          <span className="relative z-0">
            {title}
            <span className="absolute bottom-0 left-0 -z-10 w-full sm:h-7 h-5 bg-highlight"></span>
          </span>
          <br /> based in {location}
        </h1>
        <p className="lg:font-medium font-semibold xl:text-base lg:text-[0.8rem] sm:px-20 lg:px-0 text-sm xl:leading-9 leading-7 text-center lg:text-left">
          {about}
        </p>
        <div className="flex gap-11 items-center flex-col sm:flex-row">
          <Button />
          <SocialLinks gmail={gmail} linkedin={linkedin} github={github} />
          <Image
            src={lineDirection}
            alt="line"
            width={100}
            height={100}
            className="hidden xl:block"
          />
        </div>
      </div>
      <Image
        src={mars}
        alt="hero"
        width={650}
        height={650}
        className="flex-1 object-contain grow lg:grow xsm:max-w-sm md:max-w-md min-[1360px]:max-w-lg min-w-[310px] rounded-full border-8 shadow-2xl shadow-textSecondary/50"
      />
    </section>
  );
};

export default AppWrap(Hero, "hero", "bg-secondary !pt-0");
