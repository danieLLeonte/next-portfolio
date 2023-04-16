import AppWrap from "../wrapper/AppWrap";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center xl:h-screen-navbar h-auto gap-[4.3125rem]">
      <h2 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5.4rem] leading-10 text-center sm:text-left">
        What{" "}
        <span className="relative z-0">
          service
          <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[105%] sm:h-3.5 h-3 bg-highlight"></span>
        </span>{" "}
        do I provide
      </h2>
      <div className="xl:gap-10 gap-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <ServiceCard />
        <ServiceCard style="xl:relative top-11" />
        <ServiceCard />
        <ServiceCard style="xl:relative top-11" />
      </div>
    </section>
  );
};

export default AppWrap(About, "about", "bg-white");
