import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center lg:h-screen h-auto gap-6"
    >
      <h2 className="font-bold sm:text-[4rem] text-4xl text-textPrimary leading-[5.4rem]">
        What{" "}
        <span className="relative">
          service
          <span className="absolute bottom-2 left-0 -z-10 w-full h-5 bg-highlight"></span>
        </span>{" "}
        do I provide
      </h2>
      <div className="flex gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default About;
