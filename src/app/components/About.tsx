import { services } from "../constants";
import AppWrap from "../wrapper/AppWrap";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:h-screen-navbar xl:h-screen min-[1350px]:h-screen-navbar gap-[4.3125rem]">
      <h2 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5.4rem] leading-10 text-center sm:text-left">
        What{" "}
        <span className="relative z-0">
          service
          <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[105%] sm:h-3.5 h-3 bg-highlight"></span>
        </span>{" "}
        do I provide
      </h2>
      <div className="xl:gap-10 gap-16 grid grid-cols-1 min-[529px]:w-3/4 md:grid-cols-2 min-[1350px]:grid-cols-4 md:w-full justify-items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            style={`${index % 2 === 1 ? "min-[1350px]:relative top-11" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AppWrap(About, "about", "bg-white");
