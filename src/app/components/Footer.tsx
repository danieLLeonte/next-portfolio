"use client";
import AppWrap from "../wrapper/AppWrap";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import { profile } from "../constants";

const Footer = () => {
  const { gmail, linkedin, github } = profile;
  return (
    <footer className="flex flex-col items-center justify-center h-auto gap-[3.125rem] md:pt-20 pt-12 xl:pb-12">
      <div className="bg-[#99E0FF] md:px-28 px-4 xsm:px-8 sm:py-16 py-12 rounded-3xl flex items-start flex-col w-full gap-8 relative overflow-hidden">
        <div className="absolute h-[231px] w-[231px] rounded-full bg-white/20 -z-0 left-[35px] top-[30px] hidden sm:block" />
        <div className="absolute sm:h-[245px] sm:w-[245px] h-[190px] w-[189px] rounded-full bg-white/20 -z-0 sm:right-[35px] right-[100px] -top-[40px]" />
        <div className="absolute sm:h-[403px] sm:w-[402px] w-[300px] h-[300px] rounded-full bg-white/20 -z-0 -right-[205px] top-[50px]" />
        <h3 className="font-bold xl:text-6xl md:text-3xl text-2xl text-textPrimary xl:leading-[5.3rem] md:leading-[3.5rem] leading-10 z-0">
          Have a project idea to <br />
          <span className="relative z-0">
            collaborate with
            <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[95%] sm:h-3.5 h-3 bg-highlight"></span>
            ?
          </span>
        </h3>
        <Button style="!bg-white !text-textPrimary shadow-none z-0" />
      </div>
      <div className="flex justify-center">
        <SocialLinks gmail={gmail} linkedin={linkedin} github={github} />
      </div>
    </footer>
  );
};

export default AppWrap(Footer, "footer", "bg-secondary !pt-8 !pb-10 xl:!pb-0");
