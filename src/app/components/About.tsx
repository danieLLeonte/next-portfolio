import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center lg:h-screen-navbar h-auto gap-20"
    >
      <h2 className="font-bold sm:text-[4rem] text-4xl text-textPrimary leading-[5.4rem]">
        What{" "}
        <span className="relative z-0">
          service
          <span className="absolute bottom-2 left-0 -z-10 w-full h-5 bg-highlight"></span>
        </span>{" "}
        do I provide
      </h2>
      <div className="xl:gap-9 gap-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <ServiceCard />
        <ServiceCard style={'xl:relative top-11'} />
        <ServiceCard />
        <ServiceCard style={'xl:relative top-11'} />
      </div>
    </section>
  );
};

export default About;
