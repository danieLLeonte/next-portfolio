import Image from "next/image";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { graphic, lineDirection } from "../assets";

const Hero = () => {
  return (
    <section className="flex justify-between">
      <div className="flex-1 flex flex-col gap-y-9">
        <h2 className="font-bold uppercase text-primary tracking-[.5em]">
          Hi, I am Daniel
        </h2>
        <h1 className="font-bold text-[4.15rem] text-textPrimary leading-[5.4rem]">
          Professional <br />
          <span className="relative">
            Web Developer
            <span className="absolute bottom-0 left-0 -z-10 w-full h-7 bg-highlight"></span>
          </span>
          <br /> based in USA
        </h1>
        <p className="font-medium leading-9">
          I am a professional web developer with 2+ years of experience. I have
          a passion for creating beautiful and functional websites. I am
          currently working with React, Node, and MongoDB.
        </p>
        <div className="flex gap-11 items-center">
          <button className="bg-primary text-white font-bold text-sm py-5 px-11 rounded-full">
            Contact Me
          </button>
          <AiFillMail className="icon" size={21} />
          <AiFillLinkedin className="icon" size={21} />
          <AiFillGithub className="icon" size={21} />
          <Image src={lineDirection} alt="line" width={100} height={100} />
        </div>
      </div>
      <Image
        src={graphic}
        alt="hero"
        width={650}
        height={650}
        className="flex-1"
      />
    </section>
  );
};

export default Hero;
