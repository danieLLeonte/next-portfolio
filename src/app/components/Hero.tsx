import Image from "next/image";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { graphic, lineDirection } from "../assets";

const Hero = () => {
  return (
    <section className="flex justify-between flex-col lg:flex-row gap-20">
      <div className="flex-1 flex flex-col gap-y-9 items-center">
        <h2 className="font-bold uppercase text-primary tracking-[.5em] text-xs sm:text-base">
          Hi, I am Daniel
        </h2>
        <h1 className="sm:font-bold font-[800] sm:text-[4rem] text-4xl text-textPrimary sm:leading-[5.4rem] leading-[155%] text-center">
          Professional <br />
          <span className="relative">
            Web Developer
            <span className="absolute bottom-0 left-0 -z-10 w-full sm:h-7 h-5 bg-highlight"></span>
          </span>
          <br /> based in USA
        </h1>
        <p className="sm:font-medium font-semibold sm:text-base text-xs sm:leading-9 leading-7 text-center lg:text-left">
          I am a professional web developer with 2+ years of experience. I have
          a passion for creating beautiful and functional websites. I am
          currently working with React, Node, and MongoDB.
        </p>
        <div className="flex gap-11 items-center flex-col sm:flex-row">
          <button
            type="button"
            className="bg-primary text-white font-bold text-sm py-5 px-11 rounded-full shadow-primary/50 shadow-md"
          >
            Contact Me
          </button>
          <div className="flex justify-between gap-x-10">
            <AiFillMail className="icon" size={23} />
            <AiFillLinkedin className="icon" size={23} />
            <AiFillGithub className="icon" size={23} />
          </div>
          <Image
            src={lineDirection}
            alt="line"
            width={100}
            height={100}
            className="hidden sm:block"
          />
        </div>
      </div>
      <Image
        src={graphic}
        alt="hero"
        width={650}
        height={650}
        className="flex-1 object-contain self-center grow lg:grow-0 xl:grow min-w-[330px]"
      />
    </section>
  );
};

export default Hero;
