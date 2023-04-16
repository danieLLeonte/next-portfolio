import AppWrap from "../wrapper/AppWrap";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto gap-[3.125rem] xl:py-28 py-0">
      <h2 className="font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5.4rem] leading-10 text-center sm:text-left">
        <span className="relative z-0">
          Featured
          <span className="absolute sm:bottom-1 bottom-0.5 sm:left-5 -left-0.5 -z-10 w-[83%] sm:h-3.5 h-3 bg-highlight"></span>
        </span>{" "}
        Projects
      </h2>
      <div className="lg:gap-[35px] gap-6 flex flex-col xl:w-full">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default AppWrap(Projects, "projects", "bg-white");