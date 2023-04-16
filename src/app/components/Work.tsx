import AppWrap from "../wrapper/AppWrap";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section className="flex items-center lg:justify-center flex-col lg:flex-row xl:h-screen-navbar h-auto xl:gap-20 gap-6">
      <div className="bg-textPrimary xl:w-[607px] lg:w-[500px] md:w-[600px] sm:w-[400px] xsm:w-[340px] w-[290px] lg:h-[593px] xl:p-28 xsm:p-12 p-8 rounded-2xl flex flex-col justify-center relative">
        <div className="h-3.5 w-3.5 bg-[#99E0FF] rounded-full absolute lg:right-24 lg:top-28 right-16 top-10" />
        <h2 className="font-bold md:text-4xl text-3xl text-white md:leading-[3rem] leading-40">
          Working <br />
          <span className="relative z-0">
            experience
            <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[70%] sm:h-3.5 h-3 bg-highlight/25"></span>
          </span>
        </h2>
        <p className="font-medium md:text-base text-xs mt-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          repellendus modi ratione doloribus asperiores accusantium! Ducimus,
          numquam quae, iure hic error assumenda ipsa nam totam eius maiores
          exercitationem, rerum dolorem.
        </p>
        <div className="h-11 w-11 bg-white rounded-full absolute right-[9.6rem] bottom-[6rem] hidden min-[1400px]:block">
          <div className="h-[70px] w-[70px] border border-white/20 rounded-full absolute -left-[0.8rem] -top-[0.8rem]" />
          <div className="w-[286px] border border-white/20 absolute right-[3.55rem] bottom-[1.3rem]" />
        </div>
        <div className="pacman absolute lg:left-[6.7rem] lg:bottom-8 left-42 bottom-3" />
      </div>
      <div className="lg:gap-[35px] gap-6 flex flex-col">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </section>
  );
};

export default AppWrap(Work, "work", "bg-white");
